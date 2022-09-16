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

<details>
<summary>Hint 1</summary>
Try traversing the BST node by node, all the while keeping track of the node with the value closest to the target value. calculating the absolute value of the difference between a node's value and the target value should allow you to check if that node is closer then the current closest one.
</details>

<details>
<summary>Hint 2</summary>
Make use of the BST property to determine what side of any given node has values close to the target value and is therefore worth exploring.
</details>

<details>
<summary>Hint 3</summary>
What are the advantages and disadvantages of solving this problem iteratively as opposed to recursively?
</details>

<details>
<summary>Optimal Space & Time Complexity</summary>
Average: O(log(n)) time | O(1) space - where n is the number of nodes in the BST WOrst: O(n) time | O(1) space - where n is the number of nodes in the BST
</details>