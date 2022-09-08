//  O(N) time | O(1) space
export function monotonicArray(nums: number[]): boolean {
  if (nums.length === 1) return true;
  let type: number = 0;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i-1];
    if (diff !== 0){
      if (type && diff * type < 0) {
        return false;
      }
      type = diff;
    }
  }
  return true;
}