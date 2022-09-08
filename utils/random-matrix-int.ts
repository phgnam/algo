import { randomIntFromInterval } from "./random-int-form-interval";

export function randomMatrixInt(n: number, m: number, min?: number, max?: number): number[][] {
  return Array(n).fill(0).map(() => Array(m).fill(0).map(() => randomIntFromInterval(min, max)));
}