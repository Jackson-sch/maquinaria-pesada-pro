import { MachineModel, MachineType } from "./types";

export const LOAD_FACTORS = {
  [MachineType.NEUMATICO]: {
    Excelente: 0.25,
    Promedio: 0.3,
    Severo: 0.4,
  },
  [MachineType.ORUGA]: {
    Excelente: 0.5,
    Promedio: 0.65,
    Severo: 0.75,
  },
};

export const MATERIAL_DESCRIPTIONS = {
  [MachineType.NEUMATICO]: {
    Excelente:
      "tierra suelta, arena, agregados, escoria, relaves, arcilla suelta, etc",
    Promedio:
      "tierra con rocas, arena con rocas, agregados con piedras, arcilla con roca, etc",
    Severo:
      "roca de voladura bancos para rellenos de cimentación, desmonte de concreto",
  },
  [MachineType.ORUGA]: {
    Excelente:
      "tierra suelta, arena, agregados, escoria, relaves, arcilla suelta, etc",
    Promedio:
      "tierra con rocas, arena con rocas, agregados con piedras, arcilla con roca, etc",
    Severo:
      "roca de voladura bancos para rellenos de cimentación, desmonte de concreto",
  },
};

export const MACHINERY_DATA: MachineModel[] = [
  // ===== CARGADOR FRONTAL =====
  { id: "1", category: "Cargador Frontal", model: "WA150PZ-6", hp: 98, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "2", category: "Cargador Frontal", model: "WA200PZ-6", hp: 126, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "3", category: "Cargador Frontal", model: "WA250PZ-6", hp: 138, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "4", category: "Cargador Frontal", model: "WA320-6", hp: 167, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "5", category: "Cargador Frontal", model: "WA380-7", hp: 191, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "6", category: "Cargador Frontal", model: "WA430-6", hp: 231, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "7", category: "Cargador Frontal", model: "WA470-6", hp: 272, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "8", category: "Cargador Frontal", model: "WA480-6", hp: 299, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "9", category: "Cargador Frontal", model: "WA500-6", hp: 353, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "10", category: "Cargador Frontal", model: "L50E", hp: 98, type: MachineType.NEUMATICO, brand: "VOLVO" },
  { id: "11", category: "Cargador Frontal", model: "L60F", hp: 154, type: MachineType.NEUMATICO, brand: "VOLVO" },
  { id: "12", category: "Cargador Frontal", model: "L110F", hp: 227, type: MachineType.NEUMATICO, brand: "VOLVO" },
  { id: "13", category: "Cargador Frontal", model: "966H", hp: 262, type: MachineType.NEUMATICO, brand: "CATERPILLAR" }, // 262 HP es el estándar neto SAE J1349
  { id: "33", category: "Cargador Frontal", model: "WA600-8", hp: 529, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "34", category: "Cargador Frontal", model: "950GC", hp: 225, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "35", category: "Cargador Frontal", model: "980H", hp: 349, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "36", category: "Cargador Frontal", model: "L120H", hp: 272, type: MachineType.NEUMATICO, brand: "VOLVO" },
  { id: "54", category: "Cargador Frontal", model: "950M", hp: 230, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "55", category: "Cargador Frontal", model: "WA470-8", hp: 272, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "56", category: "Cargador Frontal", model: "L90H", hp: 184, type: MachineType.NEUMATICO, brand: "VOLVO" },
  { id: "57", category: "Cargador Frontal", model: "544L", hp: 163, type: MachineType.NEUMATICO, brand: "JOHN_DEERE" },
  { id: "58", category: "Cargador Frontal", model: "HL757-9", hp: 197, type: MachineType.NEUMATICO, brand: "HYUNDAI" },
  { id: "59", category: "Cargador Frontal", model: "DL300-5", hp: 271, type: MachineType.NEUMATICO, brand: "DOOSAN" },
  { id: "60", category: "Cargador Frontal", model: "437ZX", hp: 173, type: MachineType.NEUMATICO, brand: "JCB" },

  // ===== TRACTOR ORUGA =====
  { id: "14", category: "Tractor Oruga", model: "D31EX-22", hp: 78, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "15", category: "Tractor Oruga", model: "D61EX-15E0", hp: 168, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "16", category: "Tractor Oruga", model: "D155AX-6", hp: 354, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "17", category: "Tractor Oruga", model: "D8T", hp: 310, type: MachineType.ORUGA, brand: "CATERPILLAR" },
  { id: "18", category: "Tractor Oruga", model: "D11T", hp: 850, type: MachineType.ORUGA, brand: "CATERPILLAR" },
  { id: "42", category: "Tractor Oruga", model: "D6T", hp: 200, type: MachineType.ORUGA, brand: "CATERPILLAR" },
  { id: "43", category: "Tractor Oruga", model: "D7E", hp: 235, type: MachineType.ORUGA, brand: "CATERPILLAR" },
  { id: "44", category: "Tractor Oruga", model: "D85EX-15", hp: 264, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "68", category: "Tractor Oruga", model: "D6K2", hp: 130, type: MachineType.ORUGA, brand: "CATERPILLAR" },
  { id: "69", category: "Tractor Oruga", model: "D65EX-16", hp: 219, type: MachineType.ORUGA, brand: "KOMATSU" },

  // ===== EXCAVADORA =====
  { id: "19", category: "Excavadora", model: "PC200LC-8", hp: 148, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "20", category: "Excavadora", model: "PC350LC-8", hp: 246, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "21", category: "Excavadora", model: "320C L", hp: 138, type: MachineType.ORUGA, brand: "CATERPILLAR" }, // Confirmado 138 HP Neto para motor 3066 T
  { id: "22", category: "Excavadora", model: "EC210B", hp: 145, type: MachineType.ORUGA, brand: "VOLVO" },
  { id: "23", category: "Excavadora", model: "PC2000-8", hp: 976, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "37", category: "Excavadora", model: "PC300LC-8", hp: 246, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "38", category: "Excavadora", model: "PC400LC-8", hp: 345, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "39", category: "Excavadora", model: "336D", hp: 268, type: MachineType.ORUGA, brand: "CATERPILLAR" },
  { id: "40", category: "Excavadora", model: "349D", hp: 380, type: MachineType.ORUGA, brand: "CATERPILLAR" },
  { id: "41", category: "Excavadora", model: "EC480D", hp: 343, type: MachineType.ORUGA, brand: "VOLVO" },
  { id: "61", category: "Excavadora", model: "330D2", hp: 208, type: MachineType.ORUGA, brand: "CATERPILLAR" },
  { id: "62", category: "Excavadora", model: "PC210LC-11", hp: 165, type: MachineType.ORUGA, brand: "KOMATSU" },
  { id: "63", category: "Excavadora", model: "EC300D", hp: 227, type: MachineType.ORUGA, brand: "VOLVO" },
  { id: "64", category: "Excavadora", model: "350G LC", hp: 271, type: MachineType.ORUGA, brand: "JOHN_DEERE" },
  { id: "65", category: "Excavadora", model: "HX300L", hp: 242, type: MachineType.ORUGA, brand: "HYUNDAI" },
  { id: "66", category: "Excavadora", model: "DX300LC-5", hp: 271, type: MachineType.ORUGA, brand: "DOOSAN" },
  { id: "67", category: "Excavadora", model: "JS220LC", hp: 173, type: MachineType.ORUGA, brand: "JCB" },
  { id: "78", category: "Excavadora", model: "DX300LCA", hp: 197, type: MachineType.ORUGA, brand: "DOOSAN" }, // Verificado: 197 HP Neto

  // ===== RETROEXCAVADORA =====
  { id: "24", category: "Retroexcavadora", model: "416D", hp: 74, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "25", category: "Retroexcavadora", model: "WB93R-5", hp: 98, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "26", category: "Retroexcavadora", model: "BL 70", hp: 90, type: MachineType.NEUMATICO, brand: "JCB" },
  { id: "48", category: "Retroexcavadora", model: "420F2", hp: 93, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "49", category: "Retroexcavadora", model: "3CX", hp: 91, type: MachineType.NEUMATICO, brand: "JCB" },
  { id: "50", category: "Retroexcavadora", model: "310SL", hp: 99, type: MachineType.NEUMATICO, brand: "JOHN_DEERE" },
  { id: "73", category: "Retroexcavadora", model: "422F2", hp: 101, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "74", category: "Retroexcavadora", model: "WB97R-5", hp: 98, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "75", category: "Retroexcavadora", model: "4CX", hp: 109, type: MachineType.NEUMATICO, brand: "JCB" },

  // ===== MOTONIVELADORA =====
  { id: "27", category: "Motoniveladora", model: "GD555-3A", hp: 160, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "28", category: "Motoniveladora", model: "G930", hp: 160, type: MachineType.NEUMATICO, brand: "JOHN_DEERE" }, // G930 Neto base es 160 HP
  { id: "29", category: "Motoniveladora", model: "140M", hp: 183, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "45", category: "Motoniveladora", model: "GD655-5", hp: 218, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "46", category: "Motoniveladora", model: "120K", hp: 145, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "47", category: "Motoniveladora", model: "12K", hp: 145, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "70", category: "Motoniveladora", model: "140K", hp: 170, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "71", category: "Motoniveladora", model: "GD655-7", hp: 218, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "72", category: "Motoniveladora", model: "670G", hp: 217, type: MachineType.NEUMATICO, brand: "JOHN_DEERE" },

  // ===== CAMION VOLQUETE =====
  { id: "30", category: "Camion Volquete", model: "770", hp: 476, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "31", category: "Camion Volquete", model: "777F", hp: 938, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "32", category: "Camion Volquete", model: "797F", hp: 3793, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "51", category: "Camion Volquete", model: "785C", hp: 1348, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "52", category: "Camion Volquete", model: "793F", hp: 2419, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "53", category: "Camion Volquete", model: "HD785-7", hp: 1178, type: MachineType.NEUMATICO, brand: "KOMATSU" },
  { id: "76", category: "Camion Volquete", model: "730C", hp: 367, type: MachineType.NEUMATICO, brand: "CATERPILLAR" },
  { id: "77", category: "Camion Volquete", model: "HM400-5", hp: 469, type: MachineType.NEUMATICO, brand: "KOMATSU" },
];