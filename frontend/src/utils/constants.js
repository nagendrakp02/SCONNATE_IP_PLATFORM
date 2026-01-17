export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
export const WS_URL = import.meta.env.VITE_WS_URL || 'ws://localhost:8000';

export const BLOCK_CATEGORIES = {
  input: { label: 'Input', color: 'bg-green-500' },
  basic: { label: 'Basic', color: 'bg-blue-500' },
  ai: { label: 'AI', color: 'bg-purple-500' },
  geometry: { label: 'Geometry', color: 'bg-orange-500' }
};

export const DIFFICULTY_COLORS = {
  Beginner: 'text-green-400',
  Intermediate: 'text-yellow-400',
  Advanced: 'text-red-400'
};

export const LOG_LEVELS = {
  info: 'text-gray-400',
  success: 'text-green-400',
  warning: 'text-yellow-400',
  error: 'text-red-400'
};
