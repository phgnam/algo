
//  O(n^2) time | O(n) space
export function smallestDifference(firstArray: number[], secondArray: number[]): number[] {
  firstArray.sort((a,b) => a-b);
  secondArray.sort((a,b) => a-b);
  let min = Math.abs(firstArray[0] - secondArray[0]);
  let result: number[] = [firstArray[0], secondArray[0]];
  for (let i = 0, j = 0; i < firstArray.length && j < secondArray.length;) {
    if (firstArray[i] === secondArray[j]) {
      result = [firstArray[i], secondArray[j]];
      break;
    }
    if (Math.abs(firstArray[i] - secondArray[j]) < min) {
      min = Math.abs(firstArray[i] - secondArray[j]);
      result = [firstArray[i], secondArray[j]]
    }
    if (firstArray[i] < secondArray[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}