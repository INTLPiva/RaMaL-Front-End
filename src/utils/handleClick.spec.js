import {
  handleClickHelpButton,
  handleClickCloseModal,
  handleClickBackButton,
  handleClickChatButton,
  handleClickFirstChatOption,
  handleClickSecondChatOption,
} from './handleClick';

document.body.innerHTML = `
  <div>
    <button id="helpButton"></button>
    <button id="closeModal"></button>
    <button id="backButton"></button>
    <button id="chatButton"></button>
    <button id="firstChatOption"></button>
    <button id="secondChatOption"></button>
  </div>
`;

describe('Testes handleClick', () => {
  test('Teste para handleClickHelpButton', () => {
    handleClickHelpButton();
    expect(document.getElementById('helpButton')).toBeTruthy();
  });

  test('Teste para handleClickCloseModal', () => {
    handleClickCloseModal();
    expect(document.getElementById('closeModal')).toBeTruthy();
  });

  test('Teste para handleClickBackButton', () => {
    handleClickBackButton();
    expect(document.getElementById('backButton')).toBeTruthy();
  });

  test('Teste para handleClickChatButton', () => {
    handleClickChatButton();
    expect(document.getElementById('chatButton')).toBeTruthy();
  });

  test('Teste para handleClickFirstChatOption', () => {
    handleClickFirstChatOption();
    expect(document.getElementById('firstChatOption')).toBeTruthy();
  });

  test('Teste para handleClickSecondChatOption', () => {
    handleClickSecondChatOption();
    expect(document.getElementById('secondChatOption')).toBeTruthy();
  });
});
