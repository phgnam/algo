import { Benchmark } from "../../../../../../utils/class/Benchmark";
import { randomIntFromInterval } from "../../../../../../utils/random-int-form-interval";
import { randomSelfBalancingBinarySearchTree } from "../../../../../../utils/random-self-balancing-binary-search-tree";
import * as solution from "./find-closest-value-in-bst";
import * as solution1 from "./find-closest-value-in-bst-solution-1";
import * as solution2 from "./find-closest-value-in-bst-solution-2";

const depth = 17;
const binarySearchTree = randomSelfBalancingBinarySearchTree(depth);
const target = randomIntFromInterval(0, Math.pow(2, depth + 1));
const benchmarks: Benchmark[] = [];
binarySearchTree.printInorder();
function runSolution(name: string, sol: any) {
  const start = Date.now();
  const result = sol.closestValue(binarySearchTree.getRootNode(), target);
  const end = Date.now();
  const timeSpend = end - start;
  benchmarks.push(new Benchmark(name, timeSpend, target, result));
}

runSolution('solution', solution);
runSolution('solution1', solution1);
runSolution('solution2', solution2);

console.table(benchmarks);