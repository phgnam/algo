// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }

  contains(value: number) {
    // Write your code here.
    return false;
  }

  remove(value: number): BST {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }
}
