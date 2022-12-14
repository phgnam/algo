import { Benchmark } from "../../../../../../utils/class/Benchmark";
import { randomArrayIntFromInterval } from "../../../../../../utils/random-array-int-from-interval";
import * as solution from "./first-duplicate-value";
import * as solution1 from "./first-duplicate-value-solution-1";
import * as solution2 from "./first-duplicate-value-solution-2";

const length = 10000000;
const array = randomArrayIntFromInterval(length, 1, length);

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
runSolution('solution2', solution2);

console.log('Array:');
console.log(array);
console.log('Result:');
console.table(benchmarks);