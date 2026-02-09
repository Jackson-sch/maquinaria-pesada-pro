
import { useState, useEffect } from 'react';
import { MaterialClassification, MachineModel, CalculationResult, MixedCalculationBreakdown } from '../lib/types';
import { LOAD_FACTORS } from '../lib/constants';

const roundTo = (num: number, decimals: number = 2): number => {
  const multiplier = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * multiplier) / multiplier;
};

export interface MixedHours {
  [MaterialClassification.EXCELENTE]: number;
  [MaterialClassification.PROMEDIO]: number;
  [MaterialClassification.SEVERO]: number;
}

export function useFuelCalculator(
  selectedMachine: MachineModel | null,
  isMixedMode: boolean,
  materialType: MaterialClassification,
  workHours: number,
  mixedHours: MixedHours,
  pricePerGallon: number
) {
  const [result, setResult] = useState<CalculationResult | null>(null);

  useEffect(() => {
    if (!selectedMachine) {
      setResult(null);
      return;
    }

    const hpNominal = selectedMachine.hp;
    // Hp al Freno = Hp Nominal + 15% (Hp Nominal) -> Redondeado a 1 decimal
    const hpBrake = roundTo(hpNominal * 1.15, 1);

    if (!isMixedMode) {
      if (workHours < 0.1) {
        setResult(null);
        return;
      }
      const loadFactor = LOAD_FACTORS[selectedMachine.type][materialType];
      
      // PASO 1: Calcular GPH base y REDONDEARLO a 2 decimales inmediatamente
      const rawGph = (0.5 * hpBrake * loadFactor) / 7.2;
      const gphRounded = roundTo(rawGph, 2);

      // PASO 2: Calcular galones totales usando el GPH redondeado
      const totalGallons = roundTo(gphRounded * workHours, 2);
      const totalCost = roundTo(totalGallons * pricePerGallon, 2);

      setResult({ 
        hpNominal, 
        hpBrake, 
        loadFactor, 
        gph: gphRounded, 
        totalGallons, 
        totalCost 
      });
    } else {
      const breakdown: MixedCalculationBreakdown[] = Object.values(MaterialClassification).map(cat => {
        const lf = LOAD_FACTORS[selectedMachine.type][cat];
        const h = mixedHours[cat] || 0;
        
        const catGphRaw = (0.5 * hpBrake * lf) / 7.2;
        const catGphRounded = roundTo(catGphRaw, 2);
        
        return {
          category: cat,
          factor: lf,
          hours: h,
          gph: catGphRounded,
          gallons: roundTo(catGphRounded * h, 2)
        };
      });

      const totalGallons = roundTo(breakdown.reduce((acc, item) => acc + item.gallons, 0), 2);
      const totalHours = breakdown.reduce((acc, item) => acc + item.hours, 0);

      if (totalHours <= 0) {
        setResult(null);
        return;
      }

      setResult({
        hpNominal,
        hpBrake,
        loadFactor: 0, 
        gph: roundTo(totalGallons / totalHours, 2), 
        totalGallons,
        totalCost: roundTo(totalGallons * pricePerGallon, 2),
        breakdown
      });
    }
  }, [selectedMachine, materialType, workHours, pricePerGallon, isMixedMode, mixedHours]);

  return result;
}
