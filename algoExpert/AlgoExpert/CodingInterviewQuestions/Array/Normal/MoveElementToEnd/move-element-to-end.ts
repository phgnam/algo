
//  O(N) time | O(1) space
export function moveElementToEnd(array: number[], toMove: number): number[] {
  let lastIndex = array.length - 1;
  let index = 0;
  while (index < lastIndex) {
    if (array[index] === toMove) {
      if (array[lastIndex] !== toMove) {
        let temp = array[index];
        array[index] = array[lastIndex];
        array[lastIndex] = temp;
        lastIndex -= 1;
      } else {
        lastIndex -= 1;
        continue;
      }
    }
    index += 1;
  }
  return array;
}