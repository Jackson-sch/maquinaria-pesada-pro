
export enum MachineType {
  NEUMATICO = 'Neumático',
  ORUGA = 'Sobre Oruga'
}

export enum MaterialClassification {
  EXCELENTE = 'Excelente',
  PROMEDIO = 'Promedio',
  SEVERO = 'Severo'
}

export interface MachineModel {
  id: string;
  category: string;
  model: string;
  hp: number;
  type: MachineType;
  brand:
    | 'CATERPILLAR'
    | 'KOMATSU'
    | 'VOLVO'
    | 'JOHN_DEERE'
    | 'HYUNDAI'
    | 'DOOSAN'
    | 'JCB';
}



export interface CalculationResult {
  hpNominal: number;
  hpBrake: number;
  loadFactor: number;
  gph: number;
  totalGallons: number;
  totalCost: number;
  breakdown?: MixedCalculationBreakdown[];
}

export interface MixedCalculationBreakdown {
  category: MaterialClassification;
  factor: number;
  hours: number;
  gph: number;
  gallons: number;
}
