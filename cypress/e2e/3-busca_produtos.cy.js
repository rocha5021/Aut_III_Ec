// Arquivo vazio para testes de busca de produtos e adição ao carrinho

describe('Busca e adição de produto ao carrinho', () => {
  it('Deve buscar um produto e adicioná-lo ao carrinho', () => {
    // Acessa o site da Demoblaze
    cy.visit('https://www.demoblaze.com/');

    // Clica na categoria de produtos "Laptops"
    cy.contains('Laptops').click();

    // Clica no primeiro produto da lista
    cy.get('.hrefch').first().click();

    // Clica no botão "Add to cart"
    cy.contains('Add to cart').click();

    // Lida com o alerta do navegador
    cy.on('window:alert', (alertText) => {
      // Verifica se o texto do alerta é "Product added"
      expect(alertText).to.equal('Product added');
    });
  });
});
