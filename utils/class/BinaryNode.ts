export class BinaryNode {
  val: number
  left: BinaryNode | null
  right: BinaryNode | null
  constructor(val?: number, left?: BinaryNode | null, right?: BinaryNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}