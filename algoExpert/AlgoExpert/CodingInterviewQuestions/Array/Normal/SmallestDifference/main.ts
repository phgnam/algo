import { Benchmark } from "../../../../../../utils/benchmark";
import { randomArrayIntFromInterval } from "../../../../../../utils/random-array-int-from-interval";
import * as solution from "./smallest-difference";
import * as solution1 from "./smallest-difference-solution-1";

const length = 100;
const firstArray = randomArrayIntFromInterval(length);
const secondArray = randomArrayIntFromInterval(length);

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.smallestDifference(firstArray, secondArray);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);
runSolution('solution1', solution1);

console.table(benchmarks);