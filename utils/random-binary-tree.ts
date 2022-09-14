import { TreeNode } from "./class/TreeNode";
import { randomArrayIntFromInterval } from "./random-array-int-from-interval";

export function randomBinaryTree(length: number, min?: number, max?: number): TreeNode | null {
  const array = randomArrayIntFromInterval(length, min, max);
  function createTree(index: number): TreeNode | null {
    if (index > length) return null;
    return new TreeNode(array[index], createTree(index * 2 + 1), createTree(index * 2 + 2))
  }
  return createTree(0);
}