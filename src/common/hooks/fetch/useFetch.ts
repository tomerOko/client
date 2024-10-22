// apiService.ts
import axios from "axios";
import { pathMap } from "events-tomeroko3";
import { z } from "zod";
import { apiStoreHookFactory } from "./useApiStore";
import { formatZodError } from "../../utils/formatZodError";
import { useAuthStore } from "../../data/authStore";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:4001";

const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

console.log("pathMap17", pathMap);

// debugger;

apiClient.interceptors.request.use(
  (config) => {
    const authState = useAuthStore.getState() || {};
    const token = authState?.data?.token;
    if (token) {
      console.log("token", token);
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

type Endpoints = typeof pathMap;

type EndpointName = keyof Endpoints;

type BodyType<T extends EndpointName> = z.infer<
  Endpoints[T]["requestValidation"]
> extends { body: infer B }
  ? B
  : undefined;

export const fetchHookFactory = <T extends EndpointName>(endpointName: T) => {
  const useCustomFetch = () => {
    const endpoint = pathMap[endpointName];
    const { setCache, getCache, setError, setLoading, loading, error } =
      apiStoreHookFactory()();
    const fetch: (
      payload: BodyType<T>
    ) => Promise<z.infer<Endpoints[T]["responseValidation"]> | null> = async (
      payload
    ) => {
      setError(null);
      try {
        debugger;
        endpoint.requestValidation.parse({ body: payload }); // Validate request payload
        const cacheKey = `${endpointName}_${JSON.stringify(payload)}`;
        const cachedData = getCache(cacheKey);
        if (cachedData) {
          return cachedData;
        }
        const response = await apiClient[endpoint.method as "post"](
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
        debugger;
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
