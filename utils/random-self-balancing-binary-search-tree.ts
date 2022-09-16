import { BinarySearchTree } from "./class/BinarySearchTree";
import { randomIntFromInterval } from "./random-int-form-interval";

export function randomSelfBalancingBinarySearchTree(depth: number): BinarySearchTree {
  const numberNode = Math.pow(2, depth) - 1;
  const array = new Array((numberNode + 1) * 2).fill(0).map((_, idx) => idx += 1);

  const binarySearchTree: BinarySearchTree = new BinarySearchTree();
  for (let i = 0; i < numberNode; i ++) {
    const idx = randomIntFromInterval(0, array.length - 1);
    binarySearchTree.insert(array[idx]);
    array.splice(idx, 1);
  }
  return binarySearchTree;
}