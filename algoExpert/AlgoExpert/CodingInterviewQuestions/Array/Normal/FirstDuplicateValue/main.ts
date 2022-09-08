import { Benchmark } from "../../../../../../utils/benchmark";
import { randomArrayIntFromInterval } from "../../../../../../utils/random-array-int-from-interval";
import * as solution from "./first-duplicate-value";
import * as solution1 from "./first-duplicate-value-solution-1";

const length = 2000000;
const array = randomArrayIntFromInterval(length, -1000000, 1000000);

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.firstDuplicateValue(array);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);
runSolution('solution1', solution1);

console.log('Array:');
console.log(array);
console.log('Result:');
console.table(benchmarks);