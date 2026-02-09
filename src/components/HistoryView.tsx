"use client";

import { X, Clock, Trash2 } from "lucide-react";
import { HistoryItem } from "@/hooks/useHistory";
import { motion, AnimatePresence } from "framer-motion";

interface HistoryViewProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryItem[];
  onClear: () => void;
}

export function HistoryView({
  isOpen,
  onClose,
  history,
  onClear,
}: HistoryViewProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 bg-amber-500 flex justify-between items-center">
              <h2 className="text-xl font-black uppercase text-slate-900 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Historial
              </h2>
              <button
                onClick={onClose}
                className="p-2 bg-black/10 rounded-full hover:bg-black/20 transition-colors"
              >
                <X className="w-5 h-5 text-slate-900" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {history.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 opacity-50">
                  <Clock className="w-16 h-16 mb-4" />
                  <p className="font-bold uppercase tracking-widest text-sm">
                    No hay registros
                  </p>
                </div>
              ) : (
                history.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100 shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-black text-slate-900 uppercase text-sm">
                          {item.machine.model}
                        </p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase">
                          {new Date(item.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <span className="bg-amber-100 text-amber-600 text-[10px] font-black px-2 py-1 rounded">
                        {item.result.totalGallons.toFixed(1)} gal
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-t border-gray-200 pt-2 mt-2">
                      <p className="text-[10px] text-gray-400 font-bold uppercase">
                        Costo Total
                      </p>
                      <p className="font-black text-slate-900">
                        S/. {item.result.totalCost.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {history.length > 0 && (
              <div className="p-6 border-t border-gray-100">
                <button
                  onClick={onClear}
                  className="w-full py-4 bg-slate-900 text-white font-black uppercase rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                  Borrar Historial
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
