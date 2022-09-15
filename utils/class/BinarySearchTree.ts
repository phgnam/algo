import { BinaryNode } from "./BinaryNode";

// Binary Search tree class
export class BinarySearchTree {
  root: BinaryNode | null;
  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  // helper method which creates a new node to
  // be inserted and calls insertNode
  insert(data: number) {
    // Creating a node and initialising
    // with data
    var newNode = new BinaryNode(data);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null)
      this.root = newNode;
    else

      // find the correct position in the
      // tree and add the node
      this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  private insertNode(node: BinaryNode, newNode: BinaryNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.val < node.val) {
      // if left is null insert node here
      if (node.left === null)
        node.left = newNode;
      else

        // if left is not null recur until
        // null is found
        this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null)
        node.right = newNode;
      else

        // if right is not null recur until
        // null is found
        this.insertNode(node.right, newNode);
    }
  }

  // remove(data)
  // helper method that calls the
  // removeNode with a given data
  remove(data: number) {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data);
  }

  // Method to remove node with a
  // given data
  // it recur over the tree to find the
  // data and removes it
  private removeNode(node: BinaryNode | null, key: number): BinaryNode | null {

    // if the root is null then tree is
    // empty
    if (node === null)
      return null;

    // if data to be delete is less than
    // roots data then move to left subtree
    else if (key < node.val) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (key > node.val) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      }

      else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      var aux = this.findMinNode();
      if (aux) {
        node.val = aux.val;
        node.right = this.removeNode(node.right, aux.val);
      }
      return node;
    }

  }

  // Helper function
  // searching starts from given node
  findMinNode(): BinaryNode | null {
    // if left of a node is null
    // then it must be minimum node
    let node = this.root;
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  }

  getRootNode(): BinaryNode | null {
    return this.root;
  }

  // Performs inorder traversal of a tree
  printInorder() {
    console.log(this.inorder(this.root));
  }
  private inorder(node: BinaryNode | null): number[] {
    if (node !== null) {
      return [...this.inorder(node.left), node.val, ...this.inorder(node.right)];
    }
    return [];
  }

  printPreorder() {
    console.log(this.preorder(this.root));
  }
  // Performs preorder traversal of a tree
  private preorder(node: BinaryNode | null): number[] {
    if (node !== null) {
      return [node.val, ...this.preorder(node.left), ...this.preorder(node.right)];
    }
    return [];
  }

  printPostorder() {
    console.log(this.postorder(this.root));
  }
  // Performs postorder traversal of a tree
  private postorder(node: BinaryNode | null): number[] {
    if (node !== null) {
      return [...this.postorder(node.left), ...this.postorder(node.right), node.val];
    }
    return [];
  }

  // search for a node with given data
  search(val: number): BinaryNode | null {
    return this.searchNode(this.root, val);
  }
  private searchNode(node: BinaryNode | null, val: number): BinaryNode | null {
    // if trees is empty return null
    if (node === null)
      return null;

    // if data is less than node's data
    // move left
    else if (val < node.val)
      return this.searchNode(node.left, val);

    // if data is less than node's data
    // move left
    else if (val > node.val)
      return this.searchNode(node.right, val);

    // if data is equal to the node data
    // return node
    else
      return node;
  }

}