# Find Closest Value In BST

https://leetcode.com/problems/closest-binary-search-tree-value/

Given a Binary Search Tree and a target integer, we are asked to write a function that is going to return the value in the BST that is closest to the target. We can assume there is only one closest value.

**Example 1:**
```
      10
    /    \
   4      20
 /   \
1     6

Input: root = [10, 4, 20, 1, 6], target = 5
Output: 4
```


**Example 2:**
```
Input: root = [1], target = 4.428571
Output: 1
```


**Constraints:**
- The number of nodes in the tree is in the range [1, $10^4$].
- 0 <= Node.val <= $10^9$
- $-10^9$ <= target <= $10^9$