import user from "../fixtures/user.json"
import * as myInfoPage from "../page.modules/myInfo.js"

describe('my info module testsuit',()=>{
    before(()=>{
        cy.visit('/')
        cy.login(user)
    })
    it('successfully update personal information',()=>{
        myInfoPage.goToMyInfoPage()
      //  myInfoPage.fillPersonalDetails(user)
        
    cy.get('#personal_txtEmpFirstName').should('have.value',user.myInfo.firstName)
    cy.get('#personal_txtEmpLastName').should('have.value',user.myInfo.lastName)
    cy.get('#personal_txtEmployeeId').should('have.value',user.myInfo.employeeId)
    cy.get('#personal_txtLicenNo').should('have.value',user.myInfo.drivingLicenseNumber)
    cy.get('#personal_txtLicExpDate').should('have.value',user.myInfo.licenseExpiryDate)
    cy.get('#personal_txtNICNo').should('have.value',user.myInfo.SSNnumber)
    cy.get('#personal_txtSINNo').should('have.value',user.myInfo.SINnumber)
    //cy.get('ul.radio_list').find('input[value = "'+user.myInfo.gender+'"]').click()
    cy.get('#personal_cmbMarital').should('have.value',user.myInfo.maritalStatus)
    cy.get('#personal_cmbNation').should('have.text',user.myInfo.nationality)
    cy.get('#personal_DOB').should('have.value',user.myInfo.dob)
    cy.get('#personal_txtEmpNickName').should('have.value',user.myInfo.nickName)
    cy.get('#personal_txtMilitarySer').should('have.value',user.myInfo.militaryService)
    })
})