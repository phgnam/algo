// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// O(n) time | O(n) space
export function twoNumberSumSolution2(array: number[], targetSum: number) {
  const nums: {[key: number]: boolean} = {}
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}