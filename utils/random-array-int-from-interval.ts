import { randomIntFromInterval } from "./random-int-form-interval";

export function randomArrayIntFromInterval(length: number, min?: number, max?: number): number[] {
  return Array(length).fill(0).map(() => randomIntFromInterval(min, max));
}