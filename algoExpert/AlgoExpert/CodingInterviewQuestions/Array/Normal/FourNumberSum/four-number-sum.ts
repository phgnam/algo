export function fourNumberSum(nums: number[], target: number): number[][] {
  nums.sort((a,b) => a-b);
  const result: number[][] = []; 
  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] * 4 > target ) continue;
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    const num = nums[i];
    const three = threeSum(nums.slice(i+1), target - num);
    three.forEach(item => result.push([num, ...item]));
  }
  return result;
};

function threeSum(nums: number[], target: number): number[][] {
  const result: number[][] = []; 
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] * 3 > target ) continue;
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    const num = nums[i];
    const two = twoSum(nums.slice(i+1), target - num);
    two.forEach(item => result.push([num, ...item]));
  }
  return result;
};

function twoSum(nums: number[], target: number): number[][] {
  let p1 = 0;
  let p2 = nums.length - 1;
  const result: number[][] = []
  while (p1 < p2) {
    const sum = nums[p1] + nums[p2];
    if (sum === target) {
      result.push([nums[p1], nums[p2]]);
      while (nums[p1] === nums[p1 - 1]) {
        p1++;
      };
      while (nums[p2] === nums[p2 + 1]) {
        p2--;
      };
      p2--;
    } else if (sum > target) {
      p2--;
    } else {
      p1++;
    }
  }
  return result;
};