import { HardHat } from "lucide-react";

export function Header() {
  return (
    <header className="w-full pt-12 pb-24 px-6 bg-amber-500 rounded-b-[2.5rem] relative z-10 shadow-xl overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto flex flex-col items-center gap-4 relative z-20">
        <div className="bg-slate-900 p-3 rounded-2xl shadow-xl shadow-slate-900/20">
          <HardHat className="w-8 h-8 text-amber-500" strokeWidth={2.5} />
        </div>

        <div className="text-center text-slate-900">
          <h1 className="text-3xl font-black uppercase tracking-tight leading-none mb-1">
            MAQUINARIA PRO
          </h1>
          <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
            Cálculo Técnico por Tramos
          </p>
        </div>
      </div>
    </header>
  );
}
