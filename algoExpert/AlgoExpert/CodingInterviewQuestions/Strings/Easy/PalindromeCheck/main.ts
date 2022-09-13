import { Benchmark } from "../../../../../../utils/class/Benchmark";
import { randomString } from "../../../../../../utils/random-string";
import * as solution from "./palindrome-check";
import * as solution1 from "./palindrome-check-solution-1";
import * as solution2 from "./palindrome-check-solution-2";
import * as solution3 from "./palindrome-check-solution-3";
import * as solution4 from "./palindrome-check-solution-4";

const length = 10000000;
const s = randomString(length);

const benchmarks: Benchmark[] = [];

function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.isPalindrome(s);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, length, result));
}

runSolution('solution', solution);
runSolution('solution1', solution1);
runSolution('solution2', solution2);
runSolution('solution3', solution3);
runSolution('solution4', solution4);

console.table(benchmarks);