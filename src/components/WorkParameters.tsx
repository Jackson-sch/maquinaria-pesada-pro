"use client";

import { Info, Settings2, Edit3 } from "lucide-react";
import { MaterialClassification } from "@/lib/types";
import { MixedHours } from "@/hooks/useFuelCalculator";
import { LOAD_FACTORS } from "@/lib/constants";
import { MachineModel } from "@/lib/types";
import { cn } from "@/lib/utils";

interface WorkParametersProps {
  selectedMachine: MachineModel;
  isMixedMode: boolean;
  setIsMixedMode: (val: boolean) => void;
  materialType: MaterialClassification;
  setMaterialType: (val: MaterialClassification) => void;
  workHours: number;
  setWorkHours: (val: number) => void;
  mixedHours: MixedHours;
  onMixedHourChange: (cat: MaterialClassification, val: string) => void;
  pricePerGallon: number;
  setPricePerGallon: (val: number) => void;
}

export function WorkParameters({
  selectedMachine,
  isMixedMode,
  setIsMixedMode,
  materialType,
  setMaterialType,
  workHours,
  setWorkHours,
  mixedHours,
  onMixedHourChange,
  pricePerGallon,
  setPricePerGallon,
}: WorkParametersProps) {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-6 space-y-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between mb-2 gap-3">
        <h2 className="text-lg font-black uppercase flex items-center gap-3 text-slate-800">
          <Settings2 className="w-6 h-6 text-amber-500" />
          <span className="leading-tight">
            2. Parámetros
            <br />
            de Trabajo
          </span>
        </h2>

        <div className="flex justify-center items-center gap-2 lg:bg-gray-100 p-1.5 lg:rounded-full lg:border lg:border-gray-100">
          <span
            className={cn(
              "text-[10px] font-black px-2 uppercase",
              !isMixedMode ? "text-slate-900" : "text-gray-300",
            )}
          >
            Simple
          </span>
          <button
            onClick={() => setIsMixedMode(!isMixedMode)}
            className={cn(
              "w-12 h-6 rounded-full relative transition-colors focus:outline-none",
              isMixedMode ? "bg-amber-500" : "bg-gray-200",
            )}
          >
            <div
              className={cn(
                "absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm",
                isMixedMode ? "left-7" : "left-1",
              )}
            />
          </button>
          <span
            className={cn(
              "text-[10px] font-black px-2 uppercase",
              isMixedMode ? "text-slate-900" : "text-gray-300",
            )}
          >
            Mixto
          </span>
        </div>
      </div>

      {!isMixedMode ? (
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">
              Clasificación de Material
            </label>
            <div className="flex flex-col-3 gap-3">
              {Object.values(MaterialClassification).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setMaterialType(cat)}
                  className={cn(
                    "w-full p-4 rounded-2xl flex justify-between items-center transition-all border-2 group",
                    materialType === cat
                      ? "bg-white border-amber-500 shadow-lg shadow-amber-500/10"
                      : "bg-gray-100 border-transparent hover:bg-gray-200",
                  )}
                >
                  <div className="text-left">
                    <span
                      className={cn(
                        "block text-xs font-black uppercase transition-colors",
                        materialType === cat
                          ? "text-slate-900"
                          : "text-gray-900",
                      )}
                    >
                      {cat}
                    </span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                      Factor:{" "}
                      {LOAD_FACTORS[selectedMachine.type][cat].toFixed(2)}
                    </span>
                  </div>
                  {materialType === cat && (
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1">
              Horas de Operación
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.5"
                className="w-full p-5 bg-slate-900 rounded-2xl text-2xl font-black text-white outline-none focus:ring-4 focus:ring-amber-500/20 transition-all"
                value={workHours || ""}
                onChange={(e) => setWorkHours(parseFloat(e.target.value) || 0)}
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-black text-gray-500 uppercase">
                HRS
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-orange-50 border border-orange-100 text-orange-800">
            <Info className="w-5 h-5 shrink-0 text-amber-500 fill-amber-500/20" />
            <p className="text-[11px] font-bold leading-relaxed">
              Lógica: GPH se redondea a 2 decimales antes de multiplicar por
              horas.
            </p>
          </div>

          <div className="space-y-3">
            {Object.values(MaterialClassification).map((cat) => {
              const isActive = Number(mixedHours[cat]) > 0;
              return (
                <div
                  key={cat}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-2xl border-2 transition-all",
                    isActive
                      ? "bg-white border-amber-400 shadow-md"
                      : "bg-white border-gray-100",
                  )}
                >
                  <div>
                    <span
                      className={cn(
                        "text-xs font-black uppercase block mb-1",
                        isActive ? "text-amber-500" : "text-gray-400",
                      )}
                    >
                      {cat}
                    </span>
                    <span className="text-[10px] text-gray-300 font-black uppercase tracking-wider">
                      Factor:{" "}
                      {LOAD_FACTORS[selectedMachine.type][cat].toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black text-gray-300 uppercase mr-1">
                      HRS
                    </span>
                    <input
                      type="number"
                      placeholder="0"
                      className={cn(
                        "w-16 h-10 text-center rounded-lg font-black text-lg outline-none transition-all",
                        isActive
                          ? "bg-slate-900 text-white"
                          : "bg-gray-100 text-gray-400",
                      )}
                      value={mixedHours[cat] || ""}
                      onChange={(e) => onMixedHourChange(cat, e.target.value)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className="pt-2">
        <label className="text-[10px] font-black uppercase text-gray-400 tracking-widest pl-1 mb-2 block">
          Precio del Galón (S/.)
        </label>
        <div className="relative group">
          <input
            type="number"
            className="w-full p-5 bg-slate-900 rounded-2xl text-3xl font-black text-white outline-none focus:ring-4 focus:ring-amber-500/20 transition-all placeholder:text-gray-700"
            value={pricePerGallon || ""}
            onChange={(e) => setPricePerGallon(parseFloat(e.target.value) || 0)}
          />
          <Edit3 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
