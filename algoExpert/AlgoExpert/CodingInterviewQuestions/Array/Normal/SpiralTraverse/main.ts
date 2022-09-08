import { Benchmark } from "../../../../../../utils/benchmark";
import { randomMatrixInt } from "../../../../../../utils/random-matrix-int";
import * as solution from "./spiral-traverse";

const n = 100;
const m = 100;
const matrix = randomMatrixInt(n, m);
const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.spiralTraverse(matrix);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, `${n} * ${m}`, result));
}

runSolution('solution', solution);

console.log('Matrix:');
console.table(matrix);
console.log('Result:');
console.table(benchmarks);