// apiService.ts
import axios from "axios";
import {
  sendPincodeRequestValidation,
  sendPincodeRespondValidation,
  signupRequestValidation,
  signupRespondValidation,
} from "events-tomeroko3";
import { z } from "zod";

const baseURL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";

const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

const requestSchema = z.object({
  id: z.string(),
});

const responseSchema = z.object({
  data: z.object({
    name: z.string(),
  }),
});

const endpoints = {
  getUser: {
    path: "/user",
    requestSchema,
    responseSchema,
  },
  sendPincode: {
    path: "/send-pincode",
    requestSchema: sendPincodeRequestValidation,
    responseSchema: sendPincodeRespondValidation,
  },
  signup: {
    path: "/signup",
    requestSchema: signupRequestValidation,
    responseSchema: signupRespondValidation,
  },

  // Add more endpoints here
};

type Endpoints = typeof endpoints;

type EndpointName = keyof Endpoints;

export const fetchFactory = <T extends EndpointName>(endpointName: T) => {
  const endpoint = endpoints[endpointName];
  //   const { setCache, getCache } = useApiStore.getState();

  return async (
    payload: z.infer<typeof endpoint.requestSchema>
  ): Promise<z.infer<typeof endpoint.responseSchema>> => {
    endpoint.requestSchema.parse(payload); // Validate request payload

    // const cacheKey = `${endpointName}_${JSON.stringify(payload)}`;
    // const cachedData = getCache(cacheKey);

    // if (cachedData) {
    //   return cachedData.data as z.infer<typeof endpoint.responseSchema>;
    // }

    const response = await apiClient.post(endpoint.path, payload);
    const responseData = endpoint.responseSchema.parse(response.data); // Validate response data

    // setCache(cacheKey, responseData);

    return responseData;
  };
};
