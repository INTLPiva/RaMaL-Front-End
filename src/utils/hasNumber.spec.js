import {
  hasNumber1,
  hasNumber2,
  hasNumber3,
  hasNumber4,
  hasNumber5,
  hasNumber6,
} from './hasNumber';

describe('Testes hasNumber', () => {
  test('Teste para hasNumber1', () => {
    expect(hasNumber1('Texto com o número 1')).toBe(true);
    expect(hasNumber1('Texto com a palavra Um')).toBe(true);
    expect(hasNumber1('Outro texto sem o número')).toBe(false);
  });

  test('Teste para hasNumber2', () => {
    expect(hasNumber2('Texto com o número 2')).toBe(true);
    expect(hasNumber2('Texto com a palavra Dois')).toBe(true);
    expect(hasNumber2('Outro texto sem o número')).toBe(false);
  });

  test('Teste para hasNumber3', () => {
    expect(hasNumber3('Texto com o número 3')).toBe(true);
    expect(hasNumber3('Texto com a palavra Três')).toBe(true);
    expect(hasNumber3('Outro texto sem o número')).toBe(false);
  });

  test('Teste para hasNumber4', () => {
    expect(hasNumber4('Texto com o número 4')).toBe(true);
    expect(hasNumber4('Texto com a palavra Quatro')).toBe(true);
    expect(hasNumber4('Outro texto sem o número')).toBe(false);
  });

  test('Teste para hasNumber5', () => {
    expect(hasNumber5('Texto com o número 5')).toBe(true);
    expect(hasNumber5('Texto com a palavra Cinco')).toBe(true);
    expect(hasNumber5('Outro texto sem o número')).toBe(false);
  });

  test('Teste para hasNumber6', () => {
    expect(hasNumber6('Texto com o número 6')).toBe(true);
    expect(hasNumber6('Texto com a palavra Seis')).toBe(true);
    expect(hasNumber6('Outro texto sem o número')).toBe(false);
  });
});
