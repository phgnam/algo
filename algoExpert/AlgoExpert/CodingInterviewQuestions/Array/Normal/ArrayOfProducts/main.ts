import { Benchmark } from "../../../../../../utils/benchmark";
import { randomArrayIntFromInterval } from "../../../../../../utils/random-array-int-from-interval";
import * as solution from "./array-of-products";

const length = 10;
const array = randomArrayIntFromInterval(length, -100, 100);

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.arrayOfProducts(array);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);

console.table(benchmarks);