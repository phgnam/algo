
//  O(n^3) time | O(n) space
export function threeNumberSum(array: number[], targetSum: number): number[][] {
  array.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < array.length - 3; i++) {
    if (array[i] >= targetSum) break;
    for (let j = i + 1; j < array.length - 2; j++) {
      if (array[i] + array[j] >= targetSum) break;
      for (let k = j + 1; k < array.length - 1; k++) {
        if (array[i] + array[j] + array[k] > targetSum) break;
        if (array[i] + array[j] + array[k] === targetSum) result.push([array[i], array[j], array[k]]);
      }
    }
  }
  return result;
}