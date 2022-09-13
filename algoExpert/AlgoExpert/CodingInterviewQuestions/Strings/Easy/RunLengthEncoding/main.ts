import { Benchmark } from "../../../../../../utils/class/Benchmark";
import { randomString } from "../../../../../../utils/random-string";
import { randomIntFromInterval } from "../../../../../../utils/random-int-form-interval";
import * as solution from "./run-length-encoding";
import * as solution1 from "./run-length-encoding-solution-1";
import * as solution2 from "./run-length-encoding-solution-2";

const length = 2000;
const s = randomString(length).split('');
for (let i = length - 1; i > 0; i--) {
  const k = randomIntFromInterval(0, 10000);
  const append: string[] = Array(k).fill(s[i]);
  s.splice(i, 0, ...append);
}
const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.compress(s);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);
runSolution('solution1', solution1);
runSolution('solution2', solution2);

console.table(benchmarks);