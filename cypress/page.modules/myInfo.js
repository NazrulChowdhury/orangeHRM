export function goToMyInfoPage(){
    cy.get('#menu_pim_viewMyDetails').should('have.text','My Info').click()
    cy.url().should('include','/viewMyDetails')
}
export function fillPersonalDetails(user){
    cy.get('#btnSave').should('have.value','Edit').click()
    cy.get('#personal_txtEmpFirstName').clear().type(user.myInfo.firstName)
    cy.get('#personal_txtEmpLastName').clear().type(user.myInfo.lastName)
    cy.get('#personal_txtEmployeeId').clear().type(user.myInfo.employeeId)
    cy.get('#personal_txtLicenNo').clear().type(user.myInfo.drivingLicenseNumber)
    cy.get('#personal_txtLicExpDate').clear().type(user.myInfo.licenseExpiryDate)
    cy.get('#personal_txtNICNo').clear().type(user.myInfo.SSNnumber)
    cy.get('#personal_txtSINNo').clear().type(user.myInfo.SINnumber)
    cy.get('ul.radio_list').find('input[value = "'+user.myInfo.gender+'"]').click()
    cy.get('#personal_cmbMarital').select(user.myInfo.maritalStatus)
    cy.get('#personal_cmbNation').select(user.myInfo.nationality)
    cy.get('#personal_DOB').clear().type(user.myInfo.dob)
    cy.get('#personal_txtEmpNickName').clear().type(user.myInfo.nickName)
    cy.get('#personal_txtMilitarySer').clear().type(user.myInfo.militaryService)
    if(user.myInfo.Smoker==1){
        cy.get('#personal_chkSmokeFlag').check()
    } else {
        cy.get('#personal_chkSmokeFlag').uncheck()
    }
    cy.get('#btnSave').should('have.value','Save').click()
}