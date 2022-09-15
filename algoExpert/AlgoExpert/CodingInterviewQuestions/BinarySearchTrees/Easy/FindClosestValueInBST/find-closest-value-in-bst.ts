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

export function closestValue(root: BinaryNode | null, target: number): number {
  const arr: number[] = [];
  let min = Infinity;
  let result = Infinity;
  function getValueNode(node: BinaryNode | null) {
    if (!node) return;
    if (Math.abs(target - node.val) < min) {
      min = Math.abs(target - node.val);
      result = node.val;
    }
    getValueNode(node.left);
    getValueNode(node.right);
  }
  getValueNode(root);
  return result;
};