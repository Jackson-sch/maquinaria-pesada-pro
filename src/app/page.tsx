"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { MachineSelector } from "@/components/MachineSelector";
import { WorkParameters } from "@/components/WorkParameters";
import { TechnicalSummary } from "@/components/TechnicalSummary";
import { useFuelCalculator, MixedHours } from "@/hooks/useFuelCalculator";
import { MaterialClassification, MachineModel } from "@/lib/types";
import { motion } from "framer-motion";

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

  const handleMixedHourChange = (cat: MaterialClassification, val: string) => {
    const num = parseFloat(val) || 0;
    setMixedHours((prev) => ({ ...prev, [cat]: num }));
  };

  return (
    <div className="min-h-screen bg-bg-dark text-text-main pb-20 selection:bg-amber-500/30">
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-6 mt-12 space-y-12">
        <MachineSelector
          selectedMachine={selectedMachine}
          onSelect={setSelectedMachine}
        />

        {selectedMachine && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            <div className="lg:col-span-2">
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
            </div>

            <div className="lg:col-span-1">
              <TechnicalSummary
                result={calculationResult}
                isMixedMode={isMixedMode}
              />
            </div>
          </motion.div>
        )}
      </main>

      <footer className="mt-20 border-t border-white/5 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
            Redondeo Técnico Estándar Aplicado
          </p>
          <div className="flex justify-center gap-8 opacity-20">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
            <div className="w-12 h-1 bg-amber-500 rounded-full" />
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
          </div>
        </div>
      </footer>
    </div>
  );
}
