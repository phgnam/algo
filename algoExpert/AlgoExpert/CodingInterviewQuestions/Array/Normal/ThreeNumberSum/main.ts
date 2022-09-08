import { Benchmark } from "../../../../../../utils/benchmark";
import { randomArrayIntFromInterval } from "../../../../../../utils/random-array-int-from-interval";
import { randomIntFromInterval } from "../../../../../../utils/random-int-form-interval";
import * as solution from "./three-number-sum";
import * as solution1 from "./three-number-sum-solution-1";
import * as solution2 from "./three-number-sum-solution-2";

const length = 100;
const array = randomArrayIntFromInterval(length);
const targetSum = randomIntFromInterval(length);

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.threeNumberSum(array, targetSum);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);
runSolution('solution1', solution1);
runSolution('solution2', solution2);

console.table(benchmarks);