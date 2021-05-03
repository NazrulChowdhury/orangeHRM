import 'cypress-file-upload';

Cypress.Commands.add('login',(user)=>{
    cy.get('#txtUsername').type(user.userName)
    cy.get('#txtPassword').type(user.password)
    cy.get('#btnLogin').click()
    cy.title().should('eq','OrangeHRM')
    cy.get('.box').find('.head').contains('Dashboard')
    cy.get('#btnLogin').should('not.exist')
})
