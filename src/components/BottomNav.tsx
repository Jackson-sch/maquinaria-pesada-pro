"use client";

import { Calculator, History, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  onHistoryClick: () => void;
}

export function BottomNav({ onHistoryClick }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 py-2 px-6 pb-safe z-50 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-400 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] md:hidden">
      <button className="flex flex-col items-center gap-1 text-amber-500 p-2">
        <Calculator className="w-6 h-6" />
        <span>Cálculo</span>
      </button>
      <button
        onClick={onHistoryClick}
        className="flex flex-col items-center gap-1 hover:text-gray-600 p-2 transition-colors"
      >
        <History className="w-6 h-6" />
        <span>Historial</span>
      </button>
      <button className="flex flex-col items-center gap-1 hover:text-gray-600 p-2 transition-colors">
        <User className="w-6 h-6" />
        <span>Perfil</span>
      </button>
    </nav>
  );
}
