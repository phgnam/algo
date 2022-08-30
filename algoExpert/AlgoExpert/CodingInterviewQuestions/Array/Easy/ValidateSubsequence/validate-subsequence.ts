// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

export function twoNumberSumSolution1(array: number[], sequence: number[]): boolean {
  let j = 0;
  let i = 0;
  let c = 0
  for (;i < sequence.length; i++) {
    for (; j < array.length; j++) {
      if (sequence[i] === array[j]) {
        c++;
        j++;
        break
      };
    }
  }
  return c === sequence.length;
}

console.log(twoNumberSumSolution1([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]));