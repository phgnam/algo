# BST Contruction

https://www.algoexpert.io/questions/bst-construction

Write a `BST` class for a Binary Search Tree. The class should support:
- Inserting values with the `insert` method.
- Removing values with the `remove` method; this method should only remove the first instance of a given value.
- Searching for values with the contains methods.

Note that you can't remove values from a signle-node tree. In other words, calling the `remove` method on a single-node tree should simply not do anything.

Each `BST` node has an integer `value`, a `left` child node, and a `right` child node. A node is said to be a valid `BST` node if and only if it satisfies the BST property: its `value` is strictly greater than the values of every node to its left; its `value` is less than or euqal to the values of every node to its right; and its children nodes are either valid `BST` nodes themselves or `None` / `null`.

**Sample Usage**
```
// Assume the following BST has already been created:
          10
       /     \
     5         15
    /  \     /   \
   2    5   13     22
 /            \
1              14

// All operations below are performed sequentially.
insert(12):
          10
       /     \
     5         15
    /  \     /   \
   2    5   13     22
 /         /   \
1        12      14

insert(10):
         12
       /     \
     5         15
    /  \     /   \
   2    5   13     22
 /             \
1               14

contains(15): true
```


<details>
<summary>Hint 1</summary>
As you try to insert, find, or a remove a value into, in, or from a BST, you will have to traverse the tree's nodes. The BST property allows you to eleminate half of the remaining tree at each node that you traverse: if the target value is strictly smaller than a node's value, then it must me (or can only be) located to the left of the node, otherwise it must be (or can only be) to the right of that node.
</details>

<details>
<summary>Hint 2</summary>
Traverse the BST all the while applying the logic described in Hint #1. For insertion, add the target value to the BST once you reach a leaf (Noe/ null) node. For searching, if you reach aleaf node without having found the target value that means the value that means the value ín't in the BST. For removal, consider the various the various cases that you might encounter: the node you need to remove might have two children nodes, one, or none; it might also be the root node; make sure to account for all of these cases.
</details>


<details>
<summary>Hint 3</summary>
What are the advantages and disadvantages of implementing these mothods iteratively as opposed to recursively?
</details>


<details>
<summary>Optimal Space & Time Complexity</summary>
Average (all 3 methods): O(log(n)) time | O(1) space - where n is the number of nodes in the BST Worst (all 3 methods): O(n) time | O(1) space - where n is the number of nodes in the BST</details>