export class Benchmark {
  n: any;
  time: number;
  solution: string;
  result: any;
  constructor(solution: string, time: number, n: any, result: any) {
    this.n = n
    this.solution = solution;
    this.time = time;
    this.result = result;
  }
}