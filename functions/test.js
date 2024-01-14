export function printURLParts(urlString) {
  const urlObj = new URL(urlString)
  console.log('protocol:', urlObj.protocol);
  console.log('username:', urlObj.username);
}


