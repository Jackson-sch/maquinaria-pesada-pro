"use client";

import { FileText, Coins } from "lucide-react";
import { CalculationResult } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

interface TechnicalSummaryProps {
  result: CalculationResult | null;
  isMixedMode: boolean;
}

export function TechnicalSummary({
  result,
  isMixedMode,
}: TechnicalSummaryProps) {
  return (
    <section className="bg-slate-900 rounded-xl shadow-2xl p-6 text-white h-full border-t-4 border-amber-500 relative overflow-hidden flex flex-col">
      <AnimatePresence mode="wait">
        {result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col h-full"
          >
            <div className="flex items-center gap-2 mb-8">
              <FileText className="w-4 h-4 text-amber-500" />
              <h3 className="text-amber-500 font-black uppercase text-xs tracking-widest">
                Resumen Técnico
              </h3>
            </div>

            <div className="space-y-5 flex-grow">
              <div className="flex justify-between items-end border-b border-slate-800 pb-2">
                <span className="text-slate-400 text-[10px] font-bold uppercase">
                  Hp al Freno (+15%)
                </span>
                <span className="text-lg font-mono font-bold">
                  {result.hpBrake.toFixed(1)} HP
                </span>
              </div>

              {isMixedMode && result.breakdown && (
                <div className="bg-slate-800/40 p-4 rounded-lg space-y-3">
                  <p className="text-[9px] font-black uppercase text-amber-500/50 mb-1">
                    Desglose (GPH Redondeado)
                  </p>
                  {result.breakdown.map(
                    (item) =>
                      item.hours > 0 && (
                        <div
                          key={item.category}
                          className="flex justify-between items-center text-[11px] border-b border-slate-700/30 last:border-0 pb-1"
                        >
                          <span className="text-slate-400">
                            {item.category} ({item.gph} GPH × {item.hours}h)
                          </span>
                          <span className="font-mono text-white font-bold">
                            {item.gallons.toFixed(2)} gal
                          </span>
                        </div>
                      ),
                  )}
                </div>
              )}

              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-black uppercase text-amber-500">
                    Total Galones
                  </span>
                  <span className="text-2xl font-black">
                    {result.totalGallons.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center opacity-60">
                  <span className="text-[9px] font-bold uppercase">
                    Consumo Promedio
                  </span>
                  <span className="text-xs font-mono">
                    {result.gph.toFixed(2)} Gln/Hr
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-amber-500 p-6 rounded-lg text-slate-900 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <Coins className="w-12 h-12" />
              </div>
              <span className="block text-xs font-black uppercase text-center mb-2 opacity-70">
                Costo Total Final
              </span>
              <div className="text-center flex items-start justify-center">
                <span className="text-[14px] font-black mr-1 mt-1">S/.</span>
                <span className="text-5xl font-black tracking-tighter leading-none">
                  {result.totalCost.toLocaleString("es-PE", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-center space-y-4 opacity-20 py-20">
            <FileText className="w-12 h-12" />
            <p className="text-xs font-black uppercase tracking-widest leading-loose">
              Ingresa los datos para ver
              <br />
              el cálculo técnico
            </p>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
