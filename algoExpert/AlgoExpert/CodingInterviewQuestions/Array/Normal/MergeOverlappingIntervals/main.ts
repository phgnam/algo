import { Benchmark } from "../../../../../../utils/benchmark";
import { randomMatrixInt } from "../../../../../../utils/random-matrix-int";
import * as solution from "./merge-overlapping-intervals";

const length = 2000000;
const array = randomMatrixInt(length, 2, -10000, 10000);

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.mergeOverlappingIntervals(array);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);

console.log('Array:');
console.log(array);
console.log('Result:');
console.table(benchmarks);