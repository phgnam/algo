
//  O(n^2) time | O(n) space
export function threeNumberSum(array: number[], targetSum: number): number[][] {
  array.sort((a, b) => a - b);
  const triplates: number[][] = [];
  for (let i = 0; i < array.length - 3; i++) {
    let leftIndex = i + 1;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
      const sum = array[i] + array[leftIndex] + array[rightIndex];
      if (sum === targetSum) {
        triplates.push([array[i], array[leftIndex], array[rightIndex]]);
        leftIndex += 1;
        rightIndex -= 1;
      } else if (sum < targetSum) {
        leftIndex += 1;
      } else if (sum > targetSum) {
        rightIndex -= 1;
      }
    }
  }
  return triplates;
}