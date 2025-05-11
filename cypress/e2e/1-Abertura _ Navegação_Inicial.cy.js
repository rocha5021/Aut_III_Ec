describe.only('Abertura do site e navegação inicial', () => {
  it.only('Deve carregar a página inicial corretamente', () => {
    // Acessa o site da Demoblaze
    cy.visit('https://www.demoblaze.com/');

    // Verifica se o texto do elemento #nava contém "STORE"
    cy.get('#nava').should('contain.text', 'STORE');

    // Verifica se o corpo da página está visível
    //cy.get('#nava').should('be.visible');

  });
});
