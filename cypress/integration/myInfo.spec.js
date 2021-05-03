import user from "../fixtures/user.json"
import * as myInfoPage from "../page.modules/myInfo.js"

describe('my info module testsuit',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.login(user)
        myInfoPage.goToMyInfoPage()
    })
    it('Update personal information by submitting given form',()=>{
        myInfoPage.updatePersonalDetails(user)
        myInfoPage.verifyPersonalDetails(user)
    })
    it('Update Custom Fields blood type',()=>{
        myInfoPage.updateBloodType(user)
        myInfoPage.verifyBloodType(user)
    })
    it('Upload an attachment',()=>{
        myInfoPage.uploadAttachment(user)
        myInfoPage.verifyAttachment(user)
    })
    it('edit uploaded attachment',()=>{
       myInfoPage.editAttachment(user)
       myInfoPage.verifyEditedAttachment(user)
    })
    it('upload profile photo',()=>{
       myInfoPage.uploadProfilePhoto()
    })
})