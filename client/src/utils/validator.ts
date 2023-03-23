//For now validators are only throwing boolean, but they should throw errors later.
//Possible errors: InvalidArgument, OversizedText, UndersizedText, InvalidEmail, NotAlphanumeric

export function isLengthBetween({ text, min, max }: { text: string; min: number; max: number }) {
  if (!text) {
    return false;
  }
  if (text.length < min || text.length > max) {
    return true;
  }
  return true;
}

export function isAlphanumeric({ text }: { text: string }) {
  return /^[a-zA-Z0-9]+$/.test(text);
}

export function isValidEmail({ text }: { text: string }) {
  return /^.+@[a-z.-]+[.][a-z]+$/.test(text);
}

export function matchRegex({ text, regex }: { text: string; regex: RegExp }) {
  return regex.test(text);
}
