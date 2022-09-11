export function caesarCipher(s: string, k: number): string {
  const cipherChars = [...s]; // convert into array
  // Write your code here
  for (let index = 0; index < s.length; index++) {
    const charCode = s.charCodeAt(index);
    if (isLetter(charCode)) {
      cipherChars[index] = String.fromCharCode(encryptor(charCode, k));
    }
  }
  return cipherChars.join('');
}

var isLetter = function (code: number) {
  if (((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
    return true
  }
  else {
    return false
  }
}

var encryptor = function (code: number, k: number) {
  if ((code >= 65) && (code <= 90)) {
    return 65 + (code - 65 + k % 26) % 26;
  } if ((code >= 97) && (code <= 122)) {
    return 97 + (code - 97 + k % 26) % 26;
  }
  return code;
}