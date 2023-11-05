export const hasNumber1 = (string) => {
  const regex1 = /\b1\b/i;
  const regex2 = /\bum\b/i;
  const regex3 = /\bUm\b/i;

  const result =
    regex1.test(string) || regex2.test(string) || regex3.test(string);

  return result;
};

export const hasNumber2 = (string) => {
  const regex1 = /\b2\b/i;
  const regex2 = /\bdois\b/i;
  const regex3 = /\bDois\b/i;

  const result =
    regex1.test(string) || regex2.test(string) || regex3.test(string);

  return result;
};

export const hasNumber3 = (string) => {
  const regex1 = /\b3\b/i;
  const regex2 = /\btrês\b/i;
  const regex3 = /\bTrês\b/i;

  const result =
    regex1.test(string) || regex2.test(string) || regex3.test(string);

  return result;
};

export const hasNumber4 = (string) => {
  const regex1 = /\b4\b/i;
  const regex2 = /\bquatro\b/i;
  const regex3 = /\bQuatro\b/i;

  const result =
    regex1.test(string) || regex2.test(string) || regex3.test(string);

  return result;
};

export const hasNumber5 = (string) => {
  const regex1 = /\b5\b/i;
  const regex2 = /\bcinco\b/i;
  const regex3 = /\bCinco\b/i;

  const result =
    regex1.test(string) || regex2.test(string) || regex3.test(string);

  return result;
};

export const hasNumber6 = (string) => {
  const regex1 = /\b6\b/i;
  const regex2 = /\bseis\b/i;
  const regex3 = /\bSeis\b/i;

  const result =
    regex1.test(string) || regex2.test(string) || regex3.test(string);

  return result;
};
