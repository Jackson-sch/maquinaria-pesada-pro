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
    <section className="bg-white rounded-xl shadow-lg p-6 border-l-8 border-amber-500">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-black uppercase flex items-center gap-2 text-slate-900">
          <Search className="w-5 h-5 text-amber-500" />
          1. Selección de Equipo
        </h2>
        {selectedMachine && (
          <button
            onClick={() => onSelect(null)}
            className="text-[10px] font-bold text-rose-500 uppercase hover:underline transition-all"
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
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-lg focus:border-amber-500 outline-none font-bold text-slate-800 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
            <AnimatePresence>
              {isFocused && filteredMachines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl overflow-hidden"
                >
                  {filteredMachines.map((machine) => (
                    <button
                      key={machine.id}
                      onClick={() => onSelect(machine)}
                      className="w-full p-4 text-left hover:bg-amber-50 flex justify-between items-center border-b border-gray-50 last:border-0 transition-colors"
                    >
                      <div>
                        <span className="font-black text-slate-900">
                          {machine.model}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold ml-2 uppercase">
                          ({machine.category})
                        </span>
                      </div>
                      <span className="font-mono text-sm font-bold text-slate-600">
                        {machine.hp} HP
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </>
        ) : (
          <div className="bg-slate-900 text-white p-5 rounded-lg flex justify-between items-center shadow-inner">
            <div>
              <p className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-1">
                Equipo Seleccionado
              </p>
              <h3 className="text-2xl font-black">{selectedMachine.model}</h3>
              <p className="text-[10px] uppercase font-bold text-slate-400 mt-1">
                {selectedMachine.category} | {selectedMachine.type} |{" "}
                {selectedMachine.hp} HP
              </p>
            </div>
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
        )}
      </div>
    </section>
  );
}
