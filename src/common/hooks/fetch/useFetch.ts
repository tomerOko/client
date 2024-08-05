// apiService.ts
import axios from "axios";
import { pathMap } from "events-tomeroko3";
import { z } from "zod";
import { apiStoreHookFactory } from "./useApiStore";
import { formatZodError } from "../../utils/formatZodError";
import { useAuthStore } from "../../data/authenticatedToken";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost";

const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(
  (config) => {
    const { token } = useAuthStore.getState();
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

type Endpoints = typeof pathMap;

type EndpointName = keyof Endpoints;

export const fetchHookFactory = <T extends EndpointName>(endpointName: T) => {
  const useCustomFetch = () => {
    const endpoint = pathMap[endpointName];
    const { setCache, getCache, setError, setLoading, loading, error } =
      apiStoreHookFactory(endpointName)();

    const fetch: (
      payload: z.infer<Endpoints[T]["requestValidation"]>["body"]
    ) => Promise<z.infer<Endpoints[T]["responseValidation"]> | null> = async (
      payload
    ) => {
      setLoading(true);
      setError(null);
      try {
        endpoint.requestValidation.parse({ body: payload }); // Validate request payload
        const cacheKey = `${endpointName}_${JSON.stringify(payload)}`;
        const cachedData = getCache(cacheKey);
        if (cachedData) {
          return cachedData;
        }
        const response = await apiClient[endpoint.method](
          `${endpoint.service}${endpoint.path}`,
          payload
        );
        const validatedResponse = endpoint.responseValidation.parse(
          response.data
        );
        setCache(cacheKey, validatedResponse);
        setLoading(false);
        return validatedResponse;
      } catch (error: any) {
        const isZodError = error.issues !== undefined;
        if (isZodError) {
          error = formatZodError(error);
        }
        console.error("error at fething", endpointName, error);
        setLoading(false);
        setError(error);
        return null;
      }
    };

    return { fetch, loading, error };
  };

  return useCustomFetch;
};
