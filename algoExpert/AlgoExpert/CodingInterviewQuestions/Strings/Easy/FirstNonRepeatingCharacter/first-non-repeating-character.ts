export function firstUniqChar(s: string): number {
  const arr:string[] = s.split("");
  const counting: {[key: string]: number} = {};

  for (let i = 0; i < arr.length; i++) {
    if (counting[arr[i]] === undefined) {
      counting[arr[i]] = i;
    } else {
      counting[arr[i]] = -1;
    }
  }
  let min = arr.length;
  for (let key in counting) {
    if (counting[key] !== -1 && counting[key] < min) {
      min = counting[key];
    }
  }
  return min === arr.length ? -1 : min;
};