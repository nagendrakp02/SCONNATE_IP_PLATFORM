import { create } from 'zustand';

export const useMetricsStore = create((set) => ({
  metrics: {
    fps: 0,
    latency: 0,
    cpuUsage: 0,
    ramUsage: 0
  },
  logs: [],

  setMetrics: (metrics) => set({ metrics }),

  addLog: (message, level = 'info') => set((state) => ({
    logs: [
      {
        timestamp: new Date().toLocaleTimeString(),
        message,
        level
      },
      ...state.logs
    ].slice(0, 100)
  })),

  clearLogs: () => set({ logs: [] })
}));

// Continue in next artifact with Context and Hooks...
