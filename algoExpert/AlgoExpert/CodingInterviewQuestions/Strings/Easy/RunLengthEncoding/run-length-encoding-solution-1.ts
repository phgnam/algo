// TODO: FAIL

export function compress(chars: string[]): number {
  let len = 0; // also a pointer to modify array in-place
  for (let i = 0; i < chars.length;) {
    chars[len] = chars[i];
    let j = i + 1;

    while (j < chars.length && chars[j] == chars[i])
      j++;

    if (j - i >= 1) { // need compression
      // console.log(j,i);
      let freq = j - i + "";
      // console.log('freq', freq);
      for (let c of freq.split('')) {
        chars[len++] = c;
      }
    } else {
      len++;
    }
   
    i = j;
  }
  return len;
};