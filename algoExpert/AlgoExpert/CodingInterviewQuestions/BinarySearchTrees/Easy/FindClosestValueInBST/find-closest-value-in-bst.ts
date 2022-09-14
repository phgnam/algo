/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../../../../../../utils/class/TreeNode";

export function closestValue(root: TreeNode | null, target: number): number {
  const arr: number[] = [];
  let min = Infinity;
  let result = Infinity;
  function getValueNode(node: TreeNode | null) {
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