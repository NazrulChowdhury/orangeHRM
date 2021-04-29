import user from "../fixtures/user.json"
import * as myInfoPage from "../page.modules/myInfo.js"

describe('my info module testsuit',()=>{
    before(()=>{
        cy.visit('/')
        cy.login(user)
    })
    it('successfully update personal information by submitting given form',()=>{
        myInfoPage.goToMyInfoPage()
        myInfoPage.updatePersonalDetails(user)
        myInfoPage.verifyPersonalDetails(user)
    })
})