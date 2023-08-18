import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function camelCaseSeperator(string: string) {
  let result = string;
  let index = 1;
  while (index < result.length) {
    index++;
    if (result.charCodeAt(index) < 91) {
      result = result.substring(0, index) + " " + result.substring(index);
      index++;
    }
  }
  return result;
}
