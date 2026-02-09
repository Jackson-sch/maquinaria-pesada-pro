"use client";

import { Info, Settings2 } from "lucide-react";
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
    <section className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-black uppercase flex items-center gap-2 text-slate-900">
          <Settings2 className="w-5 h-5 text-amber-500" />
          2. Parámetros de Trabajo
        </h2>

        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-full border border-gray-200">
          <span
            className={cn(
              "text-[10px] font-black px-2 uppercase",
              !isMixedMode ? "text-amber-600" : "text-gray-400",
            )}
          >
            Simple
          </span>
          <button
            onClick={() => setIsMixedMode(!isMixedMode)}
            className={cn(
              "w-10 h-5 rounded-full relative transition-colors bg-gray-300",
              isMixedMode && "bg-amber-500",
            )}
          >
            <div
              className={cn(
                "absolute top-1 w-3 h-3 bg-white rounded-full transition-all left-1",
                isMixedMode && "left-6",
              )}
            />
          </button>
          <span
            className={cn(
              "text-[10px] font-black px-2 uppercase",
              isMixedMode ? "text-amber-600" : "text-gray-400",
            )}
          >
            Mixto
          </span>
        </div>
      </div>

      {!isMixedMode ? (
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">
              Clasificación de Material
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.values(MaterialClassification).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setMaterialType(cat)}
                  className={cn(
                    "p-3 rounded-lg text-xs font-black uppercase transition-all border-2",
                    materialType === cat
                      ? "bg-amber-500 border-slate-900 text-slate-900 shadow-md"
                      : "bg-white border-gray-100 text-gray-400 hover:border-gray-200",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">
                Horas de Operación
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.5"
                  className="w-full p-4 border-2 border-gray-100 rounded-lg text-xl font-bold focus:border-amber-500 outline-none"
                  value={workHours || ""}
                  onChange={(e) =>
                    setWorkHours(parseFloat(e.target.value) || 0)
                  }
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-gray-400">
                  HRS
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">
                Precio Galón (S/.)
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full p-4 border-2 border-gray-100 rounded-lg text-xl font-bold focus:border-amber-500 outline-none"
                  value={pricePerGallon || ""}
                  onChange={(e) =>
                    setPricePerGallon(parseFloat(e.target.value) || 0)
                  }
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-gray-400">
                  S/.
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-3 rounded bg-amber-50 border border-amber-200 text-amber-800">
            <Info className="w-5 h-5 shrink-0" />
            <p className="text-[11px] font-bold">
              Lógica: GPH se redondea a 2 decimales antes de multiplicar por
              horas.
            </p>
          </div>

          <div className="space-y-3">
            {Object.values(MaterialClassification).map((cat) => (
              <div
                key={cat}
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200"
              >
                <div className="flex-1">
                  <span className="text-xs font-black uppercase text-gray-600 block">
                    {cat}
                  </span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">
                    Factor: {LOAD_FACTORS[selectedMachine.type][cat].toFixed(2)}
                  </span>
                </div>
                <div className="relative w-32">
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full p-2 border-2 border-gray-200 rounded focus:border-amber-500 outline-none text-right font-black text-slate-800"
                    value={mixedHours[cat] || ""}
                    onChange={(e) => onMixedHourChange(cat, e.target.value)}
                  />
                  <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] font-black text-gray-300">
                    HRS
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-[10px] font-black uppercase text-gray-500 tracking-wider">
              Precio del Galón (S/.)
            </label>
            <input
              type="number"
              className="w-full p-4 border-2 border-gray-100 rounded-lg text-xl font-bold focus:border-amber-500 outline-none bg-slate-800 text-white"
              value={pricePerGallon || ""}
              onChange={(e) =>
                setPricePerGallon(parseFloat(e.target.value) || 0)
              }
            />
          </div>
        </div>
      )}
    </section>
  );
}
