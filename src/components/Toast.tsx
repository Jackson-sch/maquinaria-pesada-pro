"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { useEffect } from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export function Toast({
  message,
  isVisible,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 z-[100] bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px] border border-white/10"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="font-black uppercase text-sm text-amber-500">
              ¡Éxito!
            </h4>
            <p className="text-xs font-medium text-gray-300">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
