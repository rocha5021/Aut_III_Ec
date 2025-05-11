// Arquivo vazio para testes de registro de um novo usuário

describe('Registro de um novo usuário', () => {
  it('Deve registrar um novo usuário com sucesso', () => {
    // Acessa o site da Demoblaze
    cy.visit('https://www.demoblaze.com/');

    // Clica no botão "Sign Up" para registrar um novo usuário
    cy.get('#signin2').click();

    // Preenche o nome de usuário e senha
    cy.get('#sign-username').type('5021522ss');
    cy.get('#sign-password').type('s5021522s');

    // Clica no botão para se registrar
    cy.get('.modal-footer > .btn-primary').click();

    // Verifica se a mensagem de sucesso aparece
    cy.contains('Sign up successful').should('be.visible');

    cy.on('window:alert', (alertText) => {
  if (alertText === 'User does not exist.') {
    cy.log('Usuário não existe.');
  } else if (alertText === 'Wrong password.') {
    cy.log('Senha incorreta.');
  } else {
    throw new Error(`Alerta inesperado: ${alertText}`);
  }
});
  });
});
