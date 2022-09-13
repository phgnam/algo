
export function generateDocument(characters: string, document: string): boolean {
  const characterCounts: {[key: string]: number} = {};
  for (const character of characters) {
    if (!(character in characterCounts)) characterCounts[character] = 0;
    characterCounts[character]++;
  }
  for (const character of document) {
    if (!(character in characterCounts) || characterCounts[character] === 0) return false;
    characterCounts[character]--;
  }
  return true;
}