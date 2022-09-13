
export function generateDocument(characters: string, document: string): boolean {
  const characterCounts: {[key: string]: number} = {};
  let i = -1;
  for (const character of document) {
    if (characterCounts[character] && characterCounts[character] > 0) {
      characterCounts[character]--;
    } else {
      i++;
      for (; i < characters.length; i++) {
        if (characters[i] === character) {
          break;
        }
        if (characterCounts[characters[i]]) {
          characterCounts[characters[i]]++;
        } else {
          characterCounts[characters[i]] = 1;
        }
      }
      if (i === characters.length) return false;
    }
  }
  return true;
}