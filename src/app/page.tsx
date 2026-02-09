"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { MachineSelector } from "@/components/MachineSelector";
import { WorkParameters } from "@/components/WorkParameters";
import { TechnicalSummary } from "@/components/TechnicalSummary";
import { HistoryView } from "@/components/HistoryView";
import { Toast } from "@/components/Toast";
import { useFuelCalculator, MixedHours } from "@/hooks/useFuelCalculator";
import { useHistory } from "@/hooks/useHistory";
import { MaterialClassification, MachineModel } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  const [selectedMachine, setSelectedMachine] = useState<MachineModel | null>(
    null,
  );
  const [isMixedMode, setIsMixedMode] = useState(false);
  const [materialType, setMaterialType] = useState<MaterialClassification>(
    MaterialClassification.PROMEDIO,
  );
  const [workHours, setWorkHours] = useState<number>(1);
  const [pricePerGallon, setPricePerGallon] = useState<number>(14.0);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [mixedHours, setMixedHours] = useState<MixedHours>({
    [MaterialClassification.EXCELENTE]: 0,
    [MaterialClassification.PROMEDIO]: 0,
    [MaterialClassification.SEVERO]: 0,
  });

  const calculationResult = useFuelCalculator(
    selectedMachine,
    isMixedMode,
    materialType,
    workHours,
    mixedHours,
    pricePerGallon,
  );

  const { history, addToHistory, clearHistory } = useHistory();

  const handleMixedHourChange = (cat: MaterialClassification, val: string) => {
    const num = parseFloat(val) || 0;
    setMixedHours((prev) => ({ ...prev, [cat]: num }));
  };

  const handleSave = () => {
    if (selectedMachine && calculationResult) {
      addToHistory(selectedMachine, calculationResult);
      setToastMessage("Cálculo guardado en el historial");
      setShowToast(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100/50 pb-32 md:pb-10">
      <Header />

      <main className="px-4 -mt-10 md:mt-8 relative z-20 space-y-6 max-w-md md:max-w-7xl mx-auto">
        {/* Mobile Layout (Default stacked) */}
        <div className="md:hidden space-y-6">
          <MachineSelector
            selectedMachine={selectedMachine}
            onSelect={setSelectedMachine}
          />

          <AnimatePresence>
            {selectedMachine && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <WorkParameters
                  selectedMachine={selectedMachine}
                  isMixedMode={isMixedMode}
                  setIsMixedMode={setIsMixedMode}
                  materialType={materialType}
                  setMaterialType={setMaterialType}
                  workHours={workHours}
                  setWorkHours={setWorkHours}
                  mixedHours={mixedHours}
                  onMixedHourChange={handleMixedHourChange}
                  pricePerGallon={pricePerGallon}
                  setPricePerGallon={setPricePerGallon}
                />

                <TechnicalSummary
                  result={calculationResult}
                  isMixedMode={isMixedMode}
                  onSave={handleSave}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Bento Grid Layout */}
        <div
          className={cn(
            "hidden md:grid gap-6 items-start transition-all duration-500 ease-in-out",
            selectedMachine ? "grid-cols-12" : "grid-cols-1",
          )}
        >
          <div
            className={cn(
              "space-y-6 transition-all duration-500",
              selectedMachine
                ? "col-span-8"
                : "col-span-1 max-w-2xl mx-auto w-full mt-20",
            )}
          >
            <MachineSelector
              selectedMachine={selectedMachine}
              onSelect={setSelectedMachine}
            />

            {selectedMachine && (
              <WorkParameters
                selectedMachine={selectedMachine}
                isMixedMode={isMixedMode}
                setIsMixedMode={setIsMixedMode}
                materialType={materialType}
                setMaterialType={setMaterialType}
                workHours={workHours}
                setWorkHours={setWorkHours}
                mixedHours={mixedHours}
                onMixedHourChange={handleMixedHourChange}
                pricePerGallon={pricePerGallon}
                setPricePerGallon={setPricePerGallon}
              />
            )}
          </div>

          {selectedMachine && (
            <div className="col-span-4 h-full animate-fade-in">
              <div className="sticky top-6 h-[600px]">
                <TechnicalSummary
                  result={calculationResult}
                  isMixedMode={isMixedMode}
                  onSave={handleSave}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      <BottomNav onHistoryClick={() => setIsHistoryOpen(true)} />

      <HistoryView
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onClear={clearHistory}
      />

      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />

      {/* Desktop History Toggle */}
      <button
        onClick={() => setIsHistoryOpen(true)}
        className="hidden md:flex fixed bottom-8 right-8 w-14 h-14 bg-slate-900 text-amber-500 rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50"
        title="Ver Historial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v5h5" />
          <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" />
          <path d="M12 7v5l4 2" />
        </svg>
      </button>
    </div>
  );
}
