
import { MachineModel, MachineType } from './types';

export const LOAD_FACTORS = {
  [MachineType.NEUMATICO]: {
    Excelente: 0.25,
    Promedio: 0.30,
    Severo: 0.40
  },
  [MachineType.ORUGA]: {
    Excelente: 0.50,
    Promedio: 0.65,
    Severo: 0.75
  }
};

export const MACHINERY_DATA: MachineModel[] = [
  { id: '1', category: 'Cargador Frontal', model: 'WA150PZ-6', hp: 98, type: MachineType.NEUMATICO },
  { id: '2', category: 'Cargador Frontal', model: 'WA200PZ-6', hp: 127, type: MachineType.NEUMATICO },
  { id: '3', category: 'Cargador Frontal', model: 'WA250PZ-6', hp: 139, type: MachineType.NEUMATICO },
  { id: '4', category: 'Cargador Frontal', model: 'WA320-6', hp: 170, type: MachineType.NEUMATICO },
  { id: '5', category: 'Cargador Frontal', model: 'WA380-7', hp: 192, type: MachineType.NEUMATICO },
  { id: '6', category: 'Cargador Frontal', model: 'WA430-6', hp: 232, type: MachineType.NEUMATICO },
  { id: '7', category: 'Cargador Frontal', model: 'WA470-6', hp: 274, type: MachineType.NEUMATICO },
  { id: '8', category: 'Cargador Frontal', model: 'WA480-6', hp: 300, type: MachineType.NEUMATICO },
  { id: '9', category: 'Cargador Frontal', model: 'WA500-6', hp: 357, type: MachineType.NEUMATICO },
  { id: '10', category: 'Cargador Frontal', model: 'L50E', hp: 100, type: MachineType.NEUMATICO },
  { id: '11', category: 'Cargador Frontal', model: 'L60F', hp: 154, type: MachineType.NEUMATICO },
  { id: '12', category: 'Cargador Frontal', model: 'L110F', hp: 228, type: MachineType.NEUMATICO },
  { id: '13', category: 'Cargador Frontal', model: '966H', hp: 262, type: MachineType.NEUMATICO },
  { id: '14', category: 'Tractor Oruga', model: 'D31EX-22', hp: 78, type: MachineType.ORUGA },
  { id: '15', category: 'Tractor Oruga', model: 'D61EX-15E0', hp: 168, type: MachineType.ORUGA },
  { id: '16', category: 'Tractor Oruga', model: 'D155AX-6', hp: 354, type: MachineType.ORUGA },
  { id: '17', category: 'Tractor Oruga', model: 'D8T', hp: 310, type: MachineType.ORUGA },
  { id: '18', category: 'Tractor Oruga', model: 'D11T', hp: 850, type: MachineType.ORUGA },
  { id: '19', category: 'Excavadora', model: 'PC200LC-8', hp: 147, type: MachineType.ORUGA },
  { id: '20', category: 'Excavadora', model: 'PC350LC-8', hp: 260, type: MachineType.ORUGA },
  { id: '21', category: 'Excavadora', model: '320C L', hp: 138, type: MachineType.ORUGA },
  { id: '22', category: 'Excavadora', model: 'EC210B', hp: 150, type: MachineType.ORUGA },
  { id: '23', category: 'Excavadora', model: 'PC2000-8', hp: 976, type: MachineType.ORUGA },
  { id: '24', category: 'Retroexcavadora', model: '416D', hp: 74, type: MachineType.NEUMATICO },
  { id: '25', category: 'Retroexcavadora', model: 'WB93R-5', hp: 99, type: MachineType.NEUMATICO },
  { id: '26', category: 'Retroexcavadora', model: 'BL 70', hp: 90, type: MachineType.NEUMATICO },
  { id: '27', category: 'Motoniveladora', model: 'GD555-3A', hp: 160, type: MachineType.NEUMATICO },
  { id: '28', category: 'Motoniveladora', model: 'G930', hp: 195, type: MachineType.NEUMATICO },
  { id: '29', category: 'Motoniveladora', model: '140M', hp: 148, type: MachineType.NEUMATICO },
  { id: '30', category: 'Camion Volquete', model: '770', hp: 476, type: MachineType.NEUMATICO },
  { id: '31', category: 'Camion Volquete', model: '777F', hp: 938, type: MachineType.NEUMATICO },
  { id: '32', category: 'Camion Volquete', model: '797F', hp: 4000, type: MachineType.NEUMATICO },
];
