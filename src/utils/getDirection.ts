import { RTL_LOCALS } from "models/locals";

export const getDirection = (locale: string) => {
  return RTL_LOCALS.includes(locale) ? "rtl" : "ltr";
};
