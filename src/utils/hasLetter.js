export const hasLetterA = (string) => {
  const regex = /\ba\b/i;
  return regex.test(string);
};

export const hasLetterB = (string) => {
  const regex = /\bb\b/i;
  return regex.test(string);
};

export const hasLetterC = (string) => {
  const regex = /\bc\b/i;
  return regex.test(string);
};
