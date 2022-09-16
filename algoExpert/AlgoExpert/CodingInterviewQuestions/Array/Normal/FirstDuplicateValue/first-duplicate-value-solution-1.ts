// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// O(n) time | O(n) space - where n is the length of the input array
export function firstDuplicateValue(array: number[]) {
  const seen = new Set();
  for (const value of array) {
    if (seen.has(value)) return value;
    seen.add(value);
  }
  return -1;
}