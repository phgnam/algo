//  O(N) time | O(N) space
export function firstDuplicateValue(array: number[]): number {
  const newArray: number[] = [];
  let result = array.length;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (newArray[num] || newArray[num] === 0) {
      if (newArray[num] < result) {
        result = newArray[num];
      }
    } else {
      newArray[num] = i;
    }
  }
  return array[result];
};