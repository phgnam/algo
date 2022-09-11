const alphanumeric = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';

export function isPalindrome(s: string): boolean {
  const stack: string[] = []
  for (let char of s) {
    if (alphanumeric.includes(char)) {
      stack.push(char.toLocaleLowerCase())
    }
  }
  const haftLength = Math.floor(stack.length / 2);
  for (let i = 0; i < haftLength; i++) {
    if (stack[i] !== stack[stack.length - i - 1]) return false;
  }
  return true;
};