export function nonConstructibleChage(coins: number[]): number {
  const newArr: number[] = [];
  for (let i = 0; i < coins.length; i++) {
    for (let j = newArr.length - 1; j >= 0; j--) {
      newArr.push(newArr[j] + coins[i]);
    }
    newArr.push(coins[i]);
  }
  newArr.sort((a, b) => a - b);
  let min = 1;
  if (newArr[0] !== 1) {
    return min;
  } else {
    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i] - newArr[i - 1] > 1) {
        return newArr[i - 1] + 1;
      }
    }
    return newArr[newArr.length - 1] + 1
  }
}
