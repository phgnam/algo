export function mergeOverlappingIntervals(intervals: number[][]): number[][] {
  intervals.sort((a: number[], b: number[]) => a[0] - b[0]);
  let result: number[][] = [intervals[0]];
  let indexResult = 0
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= result[indexResult][1]) {
        result[indexResult][1] = Math.max(result[indexResult][1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
      indexResult++;
    }
  }
  return result;
};