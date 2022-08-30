export function tournamentWinner(competitions: string[][], results: number[]) {
  const a: {[key: string]: number} = {};
  let winner = '';
  let max = 0;
  for (let i = 0; i < competitions.length; i++) {
    const curWinner = results[i] ? competitions[i][0] : competitions[i][1];
    a[curWinner] ? a[curWinner]++ : a[curWinner] = 1;
    a[curWinner] > max ? (max = a[curWinner]) && (winner = curWinner) : 0;
  }
  return winner;
}

console.log(tournamentWinner([
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
], [0, 0, 1]))