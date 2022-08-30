// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// O(n) time | O(1) space - where n is the length of the array
export function twoNumberSumSolution1(array: number[], sequence: number[]): boolean {
  let arrIdx = 0;
  let seqIdx = 0;
  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }
  return seqIdx === sequence.length;
}

console.log(twoNumberSumSolution1([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 22, 25, 6, -1, 8, 10]));