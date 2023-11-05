export const hasLetterA = (string) => {
  const regex = /\ba\b/i;
  return regex.test(string);
};

export const hasLetterB = (string) => {
  const regex1 = /\bb\b/i;
  const regex2 = /\bbebê\b/i;
  const regex3 = /\bbeber\b/i;

  const result =
    regex1.test(string) || regex2.test(string) || regex3.test(string);

  return result;
};

export const hasLetterC = (string) => {
  const regex1 = /\bc\b/i;
  const regex2 = /\bse\b/i;

  const result = regex1.test(string) || regex2.test(string);

  return result;
};

export const hasLetterD = (string) => {
  const regex1 = /\bd\b/i;
  const regex2 = /\bde\b/i;
  const regex3 = /\bdê\b/i;

  const result =
    regex1.test(string) || regex2.test(string) || regex3.test(string);

  return result;
};

export const hasLetterE = (string) => {
  const regex = /\be\b/i;

  return regex.test(string);
};

export const hasLetterF = (string) => {
  const regex = /\bf\b/i;

  return regex.test(string);
};

export const hasLetterG = (string) => {
  const regex = /\bg\b/i;

  return regex.test(string);
};

export const hasLetterH = (string) => {
  const regex = /\bh\b/i;

  return regex.test(string);
};

export const hasLetterO = (string) => {
  const regex1 = /\bo\b/i;
  const regex2 = /\bó\b/i;

  const result = regex1.test(string) || regex2.test(string);

  return result;
};
