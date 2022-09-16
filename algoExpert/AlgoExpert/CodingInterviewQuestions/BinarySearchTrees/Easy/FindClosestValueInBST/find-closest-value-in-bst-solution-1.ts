// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// Average: O(log(n)) time | O(log(n)) space
// Worst: O(n) time | O(n) space

/**
 * Definition for a binary tree node.
 * class BinaryNode {
 *     val: number
 *     left: BinaryNode | null
 *     right: BinaryNode | null
 *     constructor(val?: number, left?: BinaryNode | null, right?: BinaryNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { BinaryNode } from "../../../../../../utils/class/BinaryNode";

export function closestValue(root: BinaryNode, target: number): number {
  return findClosestValueInBstHelper(root, target, root.val);
};

function findClosestValueInBstHelper(tree: BinaryNode | null, target: number, closest: number): number {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.val)) {
    closest = tree.val;
  }
  if (target < tree.val) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.val) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}