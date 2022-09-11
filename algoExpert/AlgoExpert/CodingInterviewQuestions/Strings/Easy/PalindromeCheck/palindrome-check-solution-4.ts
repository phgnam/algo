const alphanumeric = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';

export function isPalindrome(s: string): boolean {
    let string = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return string.split('').slice(0, Math.floor(string.length / 2)).every((letter, index) => letter === string[string.length - 1 - index])
};