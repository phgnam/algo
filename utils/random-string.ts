class Option {
  upperCase?: boolean;
  lowerCase?: boolean;
  number?: boolean;
  symbols?: boolean;
}

const defaultOption: Option = {
  upperCase: true,
  lowerCase: true,
  number: true,
}

export function randomString(length: number, option: Option = defaultOption): string {
  var result = '';
  var characters = '';
  if (option.upperCase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  if (option.lowerCase) {
    characters += 'abcdefghijklmnopqrstuvwxyz'
  }
  if (option.number) {
    characters += '0123456789'
  }
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}