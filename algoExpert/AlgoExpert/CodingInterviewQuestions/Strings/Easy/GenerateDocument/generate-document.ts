
export function generateDocument(characters: string, document: string): boolean {
  for (const char of document) {
    const idx = characters.indexOf(char)
    if (idx === -1) return false;
    characters = characters.slice(0, idx) + characters.slice(idx + 1)
  }
  return true;
}