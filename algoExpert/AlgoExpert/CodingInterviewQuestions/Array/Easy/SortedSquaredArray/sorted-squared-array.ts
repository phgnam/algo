export function sortedSquaredArray(array: number[]) {
  return array.map(i => i*i).sort((a,b) => a-b);
}
