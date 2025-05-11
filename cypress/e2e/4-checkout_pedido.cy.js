// Arquivo vazio para testes de validação do checkout e confirmação do pedido

describe('Validação do checkout e confirmação do pedido', () => {
  it('Deve finalizar a compra e confirmar o pedido', () => {
    // Acessa o site da Demoblaze
    cy.visit('https://www.demoblaze.com/');

    // Clica no ícone do carrinho de compras
    cy.get('#cartur').click();

    // Clica no botão "Place Order" para iniciar o checkout
    cy.contains('Place Order').click();

    // Preenche os campos de pagamento e endereço
    cy.get('#name').type('Nicollas Noah');
    cy.get('#country').type('Brasil');
    cy.get('#city').type('Salvador');
    cy.get('#card').type('1234 5678 9876 5432');
    cy.get('#month').type('12');
    cy.get('#year').type('2054');
    
    // Clica em "Purchase" para confirmar o pedido
    cy.contains('Purchase').click();

    // Verifica se a mensagem de confirmação do pedido aparece
    cy.contains('Thank you for your purchase!').should('be.visible');

    // Clica no botão "OK" do alerta SweetAlert
    cy.get('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click();
  });
});
