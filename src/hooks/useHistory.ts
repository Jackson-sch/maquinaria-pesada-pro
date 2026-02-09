
import { useState, useEffect } from 'react';
import { CalculationResult, MachineModel } from '@/lib/types';

export interface HistoryItem {
  id: string;
  timestamp: number;
  machine: MachineModel;
  result: CalculationResult;
}

export function useHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('fuel_calc_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse history', e);
      }
    }
  }, []);

  const addToHistory = (machine: MachineModel, result: CalculationResult) => {
    const newItem: HistoryItem = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36),
      timestamp: Date.now(),
      machine,
      result
    };
    
    setHistory(prev => {
      const updated = [newItem, ...prev].slice(0, 50); // Keep last 50
      localStorage.setItem('fuel_calc_history', JSON.stringify(updated));
      return updated;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('fuel_calc_history');
  };

  return { history, addToHistory, clearHistory };
}
