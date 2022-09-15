import { BinaryNode } from "./class/BinaryNode";
import { randomArrayIntFromInterval } from "./random-array-int-from-interval";

export function randomBinaryTree(length: number, min?: number, max?: number): BinaryNode | null {
  const array = randomArrayIntFromInterval(length, min, max);
  function createTree(index: number): BinaryNode | null {
    if (index > length) return null;
    return new BinaryNode(array[index], createTree(index * 2 + 1), createTree(index * 2 + 2))
  }
  return createTree(0);
}