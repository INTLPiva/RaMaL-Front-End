import {
  hasLetterA,
  hasLetterB,
  hasLetterC,
  hasLetterD,
  hasLetterE,
  hasLetterF,
  hasLetterG,
  hasLetterH,
  hasLetterO,
} from './hasLetter';

describe('Testes hasLetter', () => {
  test('Teste para hasLetterA', () => {
    expect(hasLetterA('Texto com a letra a')).toBe(true);
    expect(hasLetterA('Texto qualquer')).toBe(false);
  });

  test('Teste para hasLetterB', () => {
    expect(hasLetterB('Texto com a letra b')).toBe(true);
    expect(hasLetterB('Texto com a palavra beber')).toBe(true);
    expect(hasLetterB('Texto qualquer')).toBe(false);
  });

  test('Teste para hasLetterC', () => {
    expect(hasLetterC('Texto com a letra c')).toBe(true);
    expect(hasLetterC('Texto com a palavra Se')).toBe(true);
    expect(hasLetterC('Texto qualquer')).toBe(false);
  });

  test('Teste para hasLetterD', () => {
    expect(hasLetterD('Texto com a letra d')).toBe(true);
    expect(hasLetterD('Texto com a palavra De')).toBe(true);
    expect(hasLetterD('Texto qualquer')).toBe(false);
  });

  test('Teste para hasLetterE', () => {
    expect(hasLetterE('Texto com a letra e')).toBe(true);
    expect(hasLetterE('Texto qualquer')).toBe(false);
  });

  test('Teste para hasLetterF', () => {
    expect(hasLetterF('Texto com a letra f')).toBe(true);
    expect(hasLetterF('Texto qualquer')).toBe(false);
  });

  test('Teste para hasLetterG', () => {
    expect(hasLetterG('Texto com a letra g')).toBe(true);
    expect(hasLetterG('Texto qualquer')).toBe(false);
  });

  test('Teste para hasLetterH', () => {
    expect(hasLetterH('Texto com a letra h')).toBe(true);
    expect(hasLetterH('Texto qualquer')).toBe(false);
  });

  test('Teste para hasLetterO', () => {
    expect(hasLetterO('Texto com a letra o')).toBe(true);
    expect(hasLetterO('Texto com a palavra ou')).toBe(true);
    expect(hasLetterO('Texto qualquer')).toBe(false);
  });
});
