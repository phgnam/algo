// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// Average: O(log(n)) time | O(log(1)) space
// Worst: O(n) time | O(1) space

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
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.val)) {
      closest = currentNode.val;
    }
    if (target < currentNode.val) {
      currentNode = currentNode.left;
    } else if (target > currentNode.val) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}