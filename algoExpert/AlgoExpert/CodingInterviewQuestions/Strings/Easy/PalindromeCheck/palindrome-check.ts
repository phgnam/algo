const alphanumeric = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';

export function isPalindrome(s: string): boolean {
  let lowercaseAlphanumeric = '';
  for (let char of s) {
    if (alphanumeric.includes(char)) {
      lowercaseAlphanumeric += char.toLocaleLowerCase();
    }
  }
  return lowercaseAlphanumeric === lowercaseAlphanumeric.split('').reverse().join('');
};