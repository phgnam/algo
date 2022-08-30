// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// O(n^2) time | O(1) space
export function twoNumberSumSolution1(array: number[], targetSum: number) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstNum = array[i];
    for (let j = i + 1; j< array.length; j++) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum]
      }
    }
  }
  return [];
}