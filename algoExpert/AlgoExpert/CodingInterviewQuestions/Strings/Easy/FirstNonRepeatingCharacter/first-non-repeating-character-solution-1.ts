// https://javascript.plainenglish.io/first-non-repeating-character-37dc17a267fb

export function firstUniqChar(string: string): number {
  for (let i = 0; i < string.length; i++) {
    let before = string.slice(0, i);
    let after = string.slice(i + 1);
    if (!before.includes(string[i]) && !after.includes(string[i])) {
      return i;
    }
  }
  return -1;
}