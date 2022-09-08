export class Benchmark {
  n: number;
  time: number;
  solution: string;
  result: any;
  constructor(solution: string, time: number, n: number, result: any) {
    this.n = n
    this.solution = solution;
    this.time = time;
    this.result = result;
  }
}