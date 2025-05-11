# 🚀 Automação de Testes com Cypress - Projeto Demoblaze

Este projeto tem como objetivo demonstrar a automação de testes em um site de e-commerce utilizando o framework **Cypress**. Os testes foram realizados no site de demonstração [Demoblaze](https://www.demoblaze.com/index.html), focando em cenários funcionais como navegação, busca, carrinho de compras e tentativas de finalização de pedido.

---

## 📦 Funcionalidades Automatizadas

- ✅ Acesso a categorias de produtos (Phones, Laptops, Monitors)
- ✅ Busca e listagem de produtos
- ✅ Abertura de página de detalhes de produtos
- ✅ Adição de itens ao carrinho
- ✅ Verificação de itens no carrinho
- ✅ Tentativa de finalização de compra sem preencher os campos obrigatórios
- ✅ Validação de mensagens e alertas

---

## 🛠️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript (ES6+)
- Node.js
- Mocha + Chai (default do Cypress)

---

## 📁 Estrutura do Projeto

```bash
.
├── cypress/
│   └── e2e/
│       ├── 01-categorias.cy.js
│       ├── 02-adicionar-carrinho.cy.js
│       ├── 03-verificar-carrinho.cy.js
│       └── 04-tentativa-compra.cy.js
├── cypress.config.js
└── README.md

▶️ Como Executar os Testes

    Clone o repositório:

git clone https://github.com/seu-usuario/cypress-demoblaze.git
cd cypress-demoblaze

    Instale as dependências:

npm install

    Abra o Cypress em modo interativo:

npx cypress open

    Ou execute em modo headless:

npx cypress run

📌 Pré-requisitos

    Node.js instalado

    Navegador Chrome (ou compatível)

    Acesso à internet (para navegar até o Demoblaze)

💡 Observações

Este projeto é de uso educativo e voltado para fins de treinamento. O site Demoblaze é público e voltado para testes de automação front-end.
📬 Contato

Caso tenha dúvidas ou sugestões, fique à vontade para entrar em contato ou abrir uma issue.

#Cypress #QA #TestesAutomatizados #JavaScript #Demoblaze


---

Se quiser, posso gerar também a `cypress.config.js` com as configurações básicas. Deseja isso?
