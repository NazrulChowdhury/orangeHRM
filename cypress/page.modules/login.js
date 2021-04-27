export function login(userName,password){
    cy.get('#txtUsername').type(userName)
    cy.get('#txtPassword').type(password)
    cy.get('#btnLogin').click()
}