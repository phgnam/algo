//  O(N) time | O(1) space
export function arrayOfProducts(nums: number[]): number[] {
  function products(arr: number[]) {
    if (arr.length === 0) return 1;
    let result = 1;
    for (const value of arr) {
      result *= value
    }
    return result;
  }

  const prod:number[] = [];
  for (let i = 0; i < nums.length; i++) {
    prod.push(products(nums.slice(0, i)) * products(nums.slice(i+1, nums.length)))
  }
  return prod;
};