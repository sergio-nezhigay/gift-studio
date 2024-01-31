export function getSocialLink(str: string) {
  const regexInstagram = /@([a-zA-Z0-9._]+)/g;
  return str.split(regexInstagram);
}
