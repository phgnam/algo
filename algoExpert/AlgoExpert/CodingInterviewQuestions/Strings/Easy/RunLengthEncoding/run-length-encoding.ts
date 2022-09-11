export function compress(chars: string[]): number {
  let string: string = '';
  let number = 1;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      number++
    } else {
      if (number === 1) {
        string += chars[i];
      } else {
        string += chars[i] + number;
      }
      number = 1;
    }
  }
  for (let i = 0; i < string.length; i++) {
    chars[i] = string[i];
  }
  chars.splice(string.length);
  return string.length;
};