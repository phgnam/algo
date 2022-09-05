// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// O(n * m) time | O(N) space

export function nonConstructibleChage(coins: number[]): number {
    coins.sort((a, b) => a - b);
    const maximumSum = coins.reduce((sum, value) => sum + value, 0);
  
    for (let sum = 1; sum < maximumSum; sum++) {
      let currentSum = sum;
      for (let i = coins.length - 1; i >= 0; i--) {
        const currentValue = coins[i];
        if (currentValue <= currentSum) {
          currentSum -= currentValue;
        }
        if (currentSum === 0) {
          break;
        }
      }
  
      if (currentSum > 0) {
        return sum;
      }
    }
  
    return maximumSum + 1;
}
