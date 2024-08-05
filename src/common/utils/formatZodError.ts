import { ZodError } from "zod";

export const formatZodError = (zodError: ZodError): Object => {
  const formattedError: Record<string, any> = {};
  zodError.issues.forEach((issue) => {
    const path = issue.path.join(".");
    (issue.path as any) = path;
    formattedError[path] = issue;
  });
  return formattedError;
};
