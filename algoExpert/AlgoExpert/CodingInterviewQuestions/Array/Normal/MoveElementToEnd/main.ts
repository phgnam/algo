import { Benchmark } from "../../../../../../utils/class/Benchmark";
import { randomArrayIntFromInterval } from "../../../../../../utils/random-array-int-from-interval";
import { randomIntFromInterval } from "../../../../../../utils/random-int-form-interval";
import * as solution from "./move-element-to-end";

const length = 1000000;
const array = randomArrayIntFromInterval(length);
const moveTo = randomIntFromInterval();

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.moveElementToEnd(array, moveTo);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);

console.table(benchmarks);