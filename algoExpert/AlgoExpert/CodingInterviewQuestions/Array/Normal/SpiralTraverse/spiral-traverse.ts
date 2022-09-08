// Recursive
export function spiralTraverse(matrix: number[][]): number[] {
  const result: number[] = []

  function helper(top: number, left: number, bottom: number, right: number): void {
    if (top > bottom) return;

    // top
    result.push(...(matrix[top].slice(left, right + 1)));

    if (top === bottom) {
      return;
    };
    // right
    for (let i = top + 1; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    // bottom
    result.push(...(matrix[bottom].slice(left, right).reverse()));
    // left
    for (let i = bottom - 1; i > top; i--) {
      result.push(matrix[i][left]);
    }
    return helper(top + 1, left + 1, bottom - 1, right - 1);
  }
  helper(0, 0, matrix.length - 1, matrix[0].length);
  return result;
};