"use client";

import { FileText, ChevronRight, Save } from "lucide-react";
import { CalculationResult } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

interface TechnicalSummaryProps {
  result: CalculationResult | null;
  isMixedMode: boolean;
  onSave?: () => void;
}

export function TechnicalSummary({
  result,
  isMixedMode,
  onSave,
}: TechnicalSummaryProps) {
  console.log("🚀 ~ TechnicalSummary ~ result:", result)
  return (
    <section className="bg-slate-900 rounded-3xl shadow-xl overflow-hidden text-white relative h-full flex flex-col">
      <div className="p-6 pb-40 flex-grow">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-amber-500" />
            <h3 className="text-amber-500 font-black uppercase text-sm tracking-widest">
              Resumen Técnico
            </h3>
          </div>
          {result && onSave && (
            <button
              onClick={onSave}
              className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-colors"
              title="Guardar en Historial"
            >
              <Save className="w-4 h-4" />
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {result ? (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[11px] font-black uppercase text-gray-500 tracking-wider">
                  Hp Nominal
                </span>
                <span className="text-xl font-black">
                  {result.hpNominal.toFixed(1)}{" "}
                  <span className="text-xs text-gray-500 font-bold">HP</span>
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-[11px] font-black uppercase text-gray-500 tracking-wider">
                  Hp al Freno (+15%)
                </span>
                <span className="text-xl font-black">
                  {result.hpBrake.toFixed(1)}{" "}
                  <span className="text-xs text-gray-500 font-bold">HP</span>
                </span>
              </div>

              {isMixedMode && result.breakdown && (
                <div className="space-y-4 py-2">
                  <p className="text-[10px] font-black uppercase text-amber-500 mb-2">
                    Desglose (GPH Redondeado)
                  </p>
                  {result.breakdown.map(
                    (item) =>
                      item.hours > 0 && (
                        <div
                          key={item.category}
                          className="flex justify-between items-center text-xs"
                        >
                          <span className="text-gray-400 font-medium">
                            {item.category} ({item.gph} GPH × {item.hours}h)
                          </span>
                          <span className="font-bold">
                            {item.gallons.toFixed(2)} gal
                          </span>
                        </div>
                      ),
                  )}
                </div>
              )}

              <div className="flex justify-between items-end pt-4">
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-500 block mb-1">
                    Total Galones
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase block">
                    Consumo Promedio
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black block leading-none">
                    {result.totalGallons.toFixed(2)}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {result.gph.toFixed(2)} Gln/Hr
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-40 flex items-center justify-center opacity-20">
              <p className="text-xs font-black uppercase tracking-widest">
                Sin datos
              </p>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Bottom Card style for cost */}
      {result && (
        <div className="bg-amber-500 p-6 rounded-t-3xl absolute bottom-0 left-0 w-full shadow-[0_-10px_40px_rgba(245,158,11,0.2)]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-amber-900/60 tracking-widest mb-1">
                Costo Total Final
              </span>
              <div className="flex items-start text-slate-900">
                <span className="text-base font-black mr-1 mt-1">S/.</span>
                <span className="text-4xl font-black tracking-tighter">
                  {result.totalCost.toLocaleString("es-PE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-900/10 flex items-center justify-center">
              <ChevronRight className="w-6 h-6 text-slate-900/40" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
