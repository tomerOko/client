import create from "zustand";

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

interface ApiState {
  loading: boolean;
  error: string | null;
  cache: Record<string, CacheEntry<any>>;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setCache: <T>(key: string, data: T) => void;
  getCache: <T>(key: string) => CacheEntry<T> | null;
}

export const useApiStore = create<ApiState>((set, get) => ({
  loading: false,
  error: null,
  cache: {},
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setCache: (key, data) =>
    set((state) => ({
      cache: {
        ...state.cache,
        [key]: { data, timestamp: Date.now() },
      },
    })),
  getCache: (key) => {
    const cacheEntry = get().cache[key];
    if (cacheEntry && Date.now() - cacheEntry.timestamp < 60000) {
      return cacheEntry;
    }
    return null;
  },
}));
