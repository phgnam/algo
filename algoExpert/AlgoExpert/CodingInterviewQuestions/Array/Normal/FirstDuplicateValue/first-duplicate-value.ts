//  O(N) time | O(N) space
export function firstDuplicateValue(array: number[]): number {
  let hash: {[key: number]: number} = {}
  for (const val of array) {
    if (hash[val]) return val;
    hash[val] = 1;
  }
  return -1;
}