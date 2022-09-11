export function compress(chars: string[]): number {
  let indexAns = 0, index = 0;
  while (index < chars.length) {
    let currentChar = chars[index];
    let count = 0;
    while (index < chars.length && chars[index] == currentChar) {
      index++;
      count++;
    }
    chars[indexAns++] = currentChar;
    if (count != 1)
      for (let c of count.toString().split(''))
        chars[indexAns++] = c;
  }
  return indexAns;
};