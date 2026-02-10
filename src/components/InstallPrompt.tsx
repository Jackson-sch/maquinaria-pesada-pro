"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsStandalone(true);
    }

    // Check if iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  if (isStandalone) return null;

  return (
    <AnimatePresence>
      {(deferredPrompt || isIOS) && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-24 left-4 right-4 z-50 md:bottom-24 md:left-auto md:right-8 md:w-auto"
        >
          <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 p-2 rounded-xl text-slate-900">
                <Download size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm">Instalar Aplicación</h4>
                <p className="text-xs text-slate-400">
                  {isIOS
                    ? "Para iOS: Compartir → Agregar a Inicio"
                    : "Acceso rápido y modo offline"}
                </p>
              </div>
            </div>

            {!isIOS && (
              <button
                onClick={handleInstallClick}
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold text-xs px-4 py-2 rounded-lg transition-colors"
              >
                Instalar
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
