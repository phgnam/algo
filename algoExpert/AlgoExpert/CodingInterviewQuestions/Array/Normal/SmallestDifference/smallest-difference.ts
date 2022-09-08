
//  O(n^2) time | O(n) space
export function smallestDifference(firstArray: number[], secondArray: number[]): number[] {
  let min = Math.abs(firstArray[0] - secondArray[0]);
  let result: number[] = [firstArray[0], secondArray[0]];
  for (let firstIndex = 0; firstIndex < firstArray.length; firstIndex++) {
    for (let secondIndex = 0; secondIndex < secondArray.length; secondIndex++) {
      if (Math.abs(firstArray[firstIndex] - secondArray[secondIndex]) < min) {
        min = Math.abs(firstArray[firstIndex] - secondArray[secondIndex]);
        result = [firstArray[firstIndex], secondArray[secondIndex]]
      }
    }
  }
  return result;
}