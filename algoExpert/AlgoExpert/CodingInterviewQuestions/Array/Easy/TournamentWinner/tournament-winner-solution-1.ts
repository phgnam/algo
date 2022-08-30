// Copyright (c) 2022 AlgoExpert LLC. All rights reserved.

const HOME_TEAM_WON = 1;

// O(n) time | O(k) space -where n is the number
// of competitions and k is the number of teams
export function tournamentWinner(competitions: string[][], results: number[]) {
  let currentBestTeam = '';
  const scores = {[currentBestTeam]: 0};

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
}

function updateScores(team: string, points: number, scores: {[team: string]: number}) {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
}

console.log(tournamentWinner([
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
], [0, 0, 1]))