// Arquivo vazio para testes de login de usuário

describe('Login de usuário', () => {
  it.only('Deve realizar login com sucesso', () => {
    // Acessa o site da Demoblaze
    cy.visit('https://www.demoblaze.com/');

    // Clica no botão "Log in"
    cy.get('#login2').click();

    // Preenche o nome de usuário e senha
    cy.get('#loginusername').type('s5021522');
    cy.get('#loginpassword').type('5021522s');

    // Clica no botão para realizar o login
    cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();


    // Verifica se o nome de usuário está visível no topo da página (caso o login seja bem-sucedido)
    cy.get('#nameofuser').should('contain.text', 's5021522');

  });
});
