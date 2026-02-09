import { HardHat } from "lucide-react";

export function Header() {
  return (
    <header className="w-full py-6 md:py-8 industrial-header shadow-md mb-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-2">
        <div className="bg-dark-accent p-2 rounded-lg mb-2 shadow-lg">
          <HardHat className="w-8 h-8 text-primary" strokeWidth={2.5} />
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-black text-dark-accent uppercase tracking-tighter leading-none">
            MAQUINARIA PRO
          </h1>
          <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-dark-accent opacity-80 mt-1">
            Cálculo Técnico por Tramos
          </p>
        </div>
      </div>
    </header>
  );
}
