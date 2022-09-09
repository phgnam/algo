export function fourNumberSum(nums: number[], target: number): number[][] {
  nums.sort((a,b) => a-b);
  const result: number[][] = []; 
  nSum(nums, target, 4, [], result)
  return result;
};

function nSum(nums: number[], target: number, N: number, result: number[], results: number[][]) {
  if (nums.length < N || N < 2) return;

  if (N === 2) {
    let l = 0;
    let r = nums.length -1;
    
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        results.push([...result, nums[l], nums[r]])
        l += 1;
        r -= 1;
        while ((l < r) && (nums[l] === nums[l - 1])) {
          l += 1;
        }
        while ((r < l) && (nums[r] === nums[r + 1])) {
          r -= 1;
        }
      } else if (nums[l] + nums[r] < target) {
        l += 1;
      } else {
        r -= 1;
      }
    }
  } else {
    for (let i = 0; i < nums.length - N + 1; i++) {
      if (target < nums[i] * N || target > nums[-1] * N) {
        break;
      }
      if ((i === 0) || ((i > 0) && nums[i - 1] !== nums[i])) {
        result.push(nums[i])
        nSum(nums.slice(i+1), target - nums[i], N - 1, result, results);
      }
    }
  }
  return;
}