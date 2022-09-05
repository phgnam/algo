function abb(arr: number[], total: number): number[][] {
  arr.sort((a, b) => a - b);
  const result: number[][] = [];
  for (let i = 0; i < arr.length - 3; i++) {
    if (arr[i] >= total) break;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (arr[i] + arr[j] >= total) break;
      for (let k = j + 1; k < arr.length - 1; k++) {
        if (arr[i] + arr[j] + arr[k] > total) break;
        if (arr[i] + arr[j] + arr[k] === total) result.push([arr[i], arr[j], arr[k]]);
      }
    }
  }
  return result;
}