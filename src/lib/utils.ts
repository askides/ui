import { ClassValue, clsx } from "clsx";
import gaussian from "gaussian";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createSmoothValues(
  nob = 20,
  options?: { mh: number; sd: number; mean: number }
) {
  const mh = options?.mh ?? 75;
  const mean = options?.mean ?? mh / 1.5;
  const sd = options?.sd ?? mh / 1.2;

  const dist = gaussian(mean, sd);

  const heights = Array.from({ length: nob }, () => {
    return Math.ceil(Math.max(0, Math.min(mh, dist.ppf(Math.random()))));
  });

  return heights;
}
