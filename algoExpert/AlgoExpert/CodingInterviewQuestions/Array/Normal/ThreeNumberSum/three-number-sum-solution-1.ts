// https://cosmocoder1.medium.com/three-number-sum-e55bd0785ab5

export function threeNumberSum(array: number[], targetSum: number): number[][] {

  let solutions: number[][] = [];

  const helper = (arr: number[], index: number) => {

    if (arr.length === 3 && arr.reduce((a, b) => a + b) === targetSum) {
      let validSolution: number[] = arr.slice().sort((a, b) => a - b);
      solutions = solutions.concat([validSolution]);
      return;
    }

    for (let i = index; i < array.length; i++) {
      if (arr.length < 3) {
        arr.push(array[i]);
        helper(arr, i + 1);
        arr.pop();
      }
    }
  }

  helper([], 0);
  solutions = solutions.sort((a, b) => {
    if (isLesserArray(a, b)) {
      return -1;
    } else {
      return 1;
    }
  });
  return solutions;
}

const isLesserArray = (arr1: number[], arr2: number[]) => {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[i]) {
      return true;
    } else if (arr1[i] > arr2[i]) {
      return false;
    }
  }
  return -1;
} 