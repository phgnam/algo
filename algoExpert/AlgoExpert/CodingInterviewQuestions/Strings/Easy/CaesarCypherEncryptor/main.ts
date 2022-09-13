import { Benchmark } from "../../../../../../utils/class/Benchmark";
import { randomString } from "../../../../../../utils/random-string";
import { randomIntFromInterval } from "../../../../../../utils/random-int-form-interval";
import * as solution from "./caesar-cypher-encryptor";

const length = 100;
const s = randomString(length, {
  lowerCase: true,
  upperCase: true,
});
const k = randomIntFromInterval(0, 100);

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.caesarCipher(s, k);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);

console.log('String: ', s);
console.log('Seed: ', k);
console.table(benchmarks);