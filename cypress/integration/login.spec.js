import user from "../fixtures/user.json"
import * as loginPage from "../page.modules/login.js"

describe('log in test', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('log in attempt fails with wrong username',()=>{
        loginPage.login(user.wrongName, user.password)
        cy.get('#spanMessage').should('have.text','Invalid credentials')
        cy.url().should('include','/validateCredentials')
    })
    it('log in attempt fails with wrong password',()=>{
        loginPage.login(user.userName, user.wrongPassword)
        cy.get('#spanMessage').should('have.text','Invalid credentials')
        cy.url().should('include','/validateCredentials')
    })    
    it('Successfully log in with correct credentials', ()=>{
        cy.login(user)
    })
})