//  O(N) time | O(1) space
export function longestPeak(arr: number[]): number {
  let longest = 0;
  if (arr.length < 3) return longest;
  let start = false;
  let dec = false;
  let cur = 0;
  for (let i = 1; i< arr.length ; i++) {
    if (arr[i-1] < arr[i]) {
      if (dec) {
        if (cur > longest) {
          longest = cur;
        }
        start = false;
        dec = false;
        cur = 0;
      }
      if (!start) {
        start = true;
        cur = 2;
      } else {
        cur++;
      }
    } else if (arr[i-1] > arr[i]){
      dec = true;
      if (start) {
        cur++;
        if (cur > longest) {
          longest = cur;
        }
      }
    } else {
      if (cur > longest && dec) {
        longest = cur;
      }
      start = false;
      dec = false;
      cur = 0
    }
  }
  return longest;
};