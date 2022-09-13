import { Benchmark } from "../../../../../../utils/class/Benchmark";
import { randomArrayIntFromInterval } from "../../../../../../utils/random-array-int-from-interval";
import { randomIntFromInterval } from "../../../../../../utils/random-int-form-interval";
import * as solution from "./four-number-sum";
import * as solution1 from "./four-number-sum-solution-1";

const length = 200;
const array = randomArrayIntFromInterval(length);
const target = randomIntFromInterval();

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.fourNumberSum(array, target);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);
runSolution('solution1', solution1);

console.table(benchmarks);