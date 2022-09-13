import { Benchmark } from "../../../../../../utils/benchmark";
import { randomString } from "../../../../../../utils/random-string";
import * as solution from "./generate-document";
import * as solution1 from "./generate-document-solution-1";
import * as solution2 from "./generate-document-solution-2";

const length = 10000;
const characters = randomString(length, {
  lowerCase: true,
  upperCase: true,
  number: true,
  symbols: true,
});
const document = characters.split("");
const a = randomString(1);
if (Date.now() % 2 === 1) { document[0] = a }

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.generateDocument(characters, '');
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);
runSolution('solution1', solution1);
runSolution('solution2', solution2);

console.table(benchmarks);