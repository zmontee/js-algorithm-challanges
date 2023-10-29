export function toUnderscore(string) {
  return string
    .split('')
    .map((char, index) => {
      const charCode = char.charCodeAt(0);
      return charCode >= 65 && charCode <= 90
        ? `${index !== 0 ? '_' : ''}${char.toLowerCase()}`
        : char
    })
    .join('');
}