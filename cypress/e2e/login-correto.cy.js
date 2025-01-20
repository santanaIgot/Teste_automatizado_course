describe('Página de login', () => {
    // antes de cada teste, rode este comando 
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
      cy.get('[data-test="input-loginEmail"]').type('igot02@gmail.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha123');
      cy.get('[data-test="submit-button"]').click();
    })
})


// describe('Página de login', () => {
//     beforeEach(() => {
//       cy.visit('https://adopet-frontend-cypress.vercel.app/');
//       cy.get('[data-test="login-button"]').click();
//     })
//         it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
//           cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
//           cy.get('[data-test="input-loginPassword"]').type('Senha123');
//           cy.get('[data-test="submit-button"]').click();
//         })
// })