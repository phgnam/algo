// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

// O(nlogn) time | O(1) space

export function nonConstructibleChage(coins: number[]): number {
  coins.sort((a, b) => a - b);
  let maxChangeGenerated = 0;
  let i = 0;
  while (i < coins.length) {
    console.log(i, maxChangeGenerated);
    if (coins[i] <= maxChangeGenerated + 1) {
      maxChangeGenerated += coins[i];
    } else {
      return maxChangeGenerated + 1;
    }
    i += 1;
  }
  return maxChangeGenerated + 1;
}
