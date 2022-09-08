//  O(N) time | O(1) space
export function arrayOfProducts(nums: number[]): number[] {
  let haveZero = 0;
  let products = 1;
  for (let num of nums) {
    if (num !== 0) {
      products *= num;
    } else {
      haveZero += 1;
    }
  }

  const prod: number[] = [];
  for (const num of nums) {
    const result = haveZero && num !== 0 ? 0 : ((num === 0) ? ((haveZero > 1) ? 0 : products) : products / num);
    prod.push(result);
  }
  return prod;
};