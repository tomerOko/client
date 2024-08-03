import { pathMap } from "events-tomeroko3";
import { create } from "zustand";
import z from "zod";

type EndpointName = keyof typeof pathMap;
type EndpointResponse<T extends EndpointName> = z.infer<
  (typeof pathMap)[T]["responseValidation"]
>;

interface CacheEntry<T extends EndpointName> {
  data: EndpointResponse<T>;
  timestamp: number;
}

interface ApiState<T extends EndpointName> {
  loading: boolean;
  error: any;
  cache: Record<string, CacheEntry<any>>;
  setLoading: (loading: boolean) => void;
  setError: (error: any) => void;
  setCache: (key: string, data: EndpointResponse<T>) => void;
  getCache: (key: string) => EndpointResponse<T> | null;
}

export const apiStoreHookFactory = <T extends EndpointName>(key: T) => {
  const useApiStore = create<ApiState<T>>((set, get) => ({
    // create from "zustand"; returns an hook function
    loading: false,
    error: null,
    cache: {},
    setLoading: (loading) => set({ loading }),
    setError: (error: any) => set({ error }),
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
        return cacheEntry.data;
      }
      return null;
    },
  }));
  return useApiStore;
};

export const hallow = 5;
