import { Benchmark } from "../../../../../../utils/class/Benchmark";
import { randomString } from "../../../../../../utils/random-string";
import * as solution from "./find-closest-value-in-bst";

const length = Math.pow(2, 8) - 1;
let characters = randomString(length, {
  lowerCase: true,
});
const character = randomString(1, {
  lowerCase: true,
});
const re = new RegExp(character, "g");
characters = characters.replace(re, "");
const newStr = characters.split('')
newStr.push(character)
characters = newStr.join('');

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.firstUniqChar(characters);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);

console.table(benchmarks);