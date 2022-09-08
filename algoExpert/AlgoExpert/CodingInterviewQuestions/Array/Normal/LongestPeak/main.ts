import { Benchmark } from "../../../../../../utils/benchmark";
import { randomArrayIntFromInterval } from "../../../../../../utils/random-array-int-from-interval";
import * as solution from "./longest-peak";

const length = 10000;
const array = randomArrayIntFromInterval(length);

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.longestPeak(array);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);

console.table(benchmarks);