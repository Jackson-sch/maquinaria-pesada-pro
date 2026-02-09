"use client";

import { useState, useMemo } from "react";
import { Search, CheckCircle2 } from "lucide-react";
import { MACHINERY_DATA } from "@/lib/constants";
import { MachineModel } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface MachineSelectorProps {
  selectedMachine: MachineModel | null;
  onSelect: (machine: MachineModel | null) => void;
}

export function MachineSelector({
  selectedMachine,
  onSelect,
}: MachineSelectorProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const filteredMachines = useMemo(() => {
    if (!searchTerm || selectedMachine) return [];
    return MACHINERY_DATA.filter(
      (m) =>
        m.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.category.toLowerCase().includes(searchTerm.toLowerCase()),
    ).slice(0, 5);
  }, [searchTerm, selectedMachine]);

  return (
    <section className="bg-white rounded-3xl shadow-xl p-6 relative overflow-visible z-30">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-black uppercase flex items-center gap-2 text-slate-800">
          <Search className="w-5 h-5 text-amber-500" />
          1. Selección de Equipo
        </h2>
        {selectedMachine && (
          <button
            onClick={() => onSelect(null)}
            className="text-[10px] font-black text-rose-500 uppercase hover:text-rose-600 tracking-wider"
          >
            Cambiar Equipo
          </button>
        )}
      </div>

      <div className="relative">
        {!selectedMachine ? (
          <>
            <input
              type="text"
              placeholder="Busca el modelo (ej. BL 70, WA480...)"
              className="w-full p-4 pl-5 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-amber-500 focus:bg-white outline-none font-bold text-slate-800 transition-all shadow-inner"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
            <AnimatePresence>
              {isFocused && filteredMachines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute z-50 w-full mt-4 bg-white border border-gray-100 rounded-2xl shadow-2xl p-2"
                >
                  {filteredMachines.map((machine) => (
                    <button
                      key={machine.id}
                      onClick={() => onSelect(machine)}
                      className="w-full p-3 text-left hover:bg-amber-50 rounded-xl flex justify-between items-center transition-colors mb-1 last:mb-0"
                    >
                      <div>
                        <span className="font-black text-slate-900 block">
                          {machine.model}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase">
                          {machine.category}
                        </span>
                      </div>
                      <span className="font-mono text-xs font-black text-amber-500 bg-amber-50 px-2 py-1 rounded-md">
                        {machine.hp} HP
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="bg-slate-900 text-white p-6 rounded-2xl flex justify-between items-center shadow-lg shadow-slate-900/30">
            <div>
              <p className="text-amber-500 text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                Equipo Seleccionado
              </p>
              <h3 className="text-3xl font-black leading-none mb-1">
                {selectedMachine.model}
              </h3>
              <p className="text-[10px] uppercase font-bold text-gray-500 flex items-center gap-2">
                {selectedMachine.category}{" "}
                <span className="w-1 h-1 bg-gray-700 rounded-full" />{" "}
                {selectedMachine.type}
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
