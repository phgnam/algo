// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// O(n) time | O(1) space - where n is the length of the array
export function twoNumberSumSolution1(array: number[], sequence: number[]): boolean {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}

console.log(twoNumberSumSolution1([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]));