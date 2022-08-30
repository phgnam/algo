// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// O(nlogn) time | O(n) space - where n is the length of the array
export function sortedSquaredArray(array: number[]) {
  const sortedSquares = new Array(array.length).fill(0);

  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sortedSquares[idx] = value * value;
  }
  
  sortedSquares.sort((a,b) => a-b);
  return sortedSquares
}
