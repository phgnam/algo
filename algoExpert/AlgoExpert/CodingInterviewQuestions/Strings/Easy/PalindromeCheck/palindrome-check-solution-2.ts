export function isPalindrome(input: string): boolean {
  var start = 0
  var end = input.length - 1
  while (start < end) {
    var s = input.charCodeAt(start)
    var e = input.charCodeAt(end)

    if (!isLetter(s)) {
      start++
      continue
    }
    if (!isLetter(e)) {
      end--
      continue
    }

    if (toLowerCase(s) !== toLowerCase(e)) {
      return false
    }
    start++
    end--
  }
  return true
};

var isLetter = function (code: number) {
  if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
    return true
  }
  else {
    return false
  }
}

var toLowerCase = function (code: number) {
  if (code >= 65 && code <= 90) {
    return code + 32
  }
  else {
    return code
  }
}