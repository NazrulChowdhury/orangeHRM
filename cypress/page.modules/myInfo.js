export function goToMyInfoPage() {
    cy.get('#menu_pim_viewMyDetails').should('have.text', 'My Info').click()
    cy.url().should('include', '/viewMyDetails')
}
export function updatePersonalDetails(user) {
    cy.get('#btnSave').should('have.value', 'Edit').click()
    cy.get('#personal_txtEmpFirstName').clear().type(user.myInfo.firstName)
    cy.get('#personal_txtEmpLastName').clear().type(user.myInfo.lastName)
    cy.get('#personal_txtEmployeeId').clear().type(user.myInfo.employeeId)
    cy.get('#personal_txtLicenNo').clear().type(user.myInfo.drivingLicenseNumber)
    cy.get('#personal_txtLicExpDate').clear().type(user.myInfo.licenseExpiryDate)
    cy.get('#personal_txtNICNo').clear().type(user.myInfo.SSNnumber)
    cy.get('#personal_txtSINNo').clear().type(user.myInfo.SINnumber)
    cy.get('ul.radio_list').find('input[value = "' + user.myInfo.gender + '"]').click()
    cy.get('#personal_cmbMarital').select(user.myInfo.maritalStatus)
    cy.get('#personal_cmbNation').select(user.myInfo.nationality)
    cy.get('#personal_DOB').clear().type(user.myInfo.dob)
    cy.get('#personal_txtEmpNickName').clear().type(user.myInfo.nickName)
    cy.get('#personal_txtMilitarySer').clear().type(user.myInfo.militaryService)
    if (user.myInfo.Smoker == 1) {
        cy.get('#personal_chkSmokeFlag').check()
    } else {
        cy.get('#personal_chkSmokeFlag').uncheck()
    }
    cy.get('#btnSave').should('have.value', 'Save').click()
}
export function verifyPersonalDetails(user) {
    cy.get('#personal_txtEmpFirstName').should('have.value', user.myInfo.firstName)
    cy.get('#personal_txtEmpLastName').should('have.value', user.myInfo.lastName)
    cy.get('#personal_txtEmployeeId').should('have.value', user.myInfo.employeeId)
    cy.get('#personal_txtLicenNo').should('have.value', user.myInfo.drivingLicenseNumber)
    cy.get('#personal_txtLicExpDate').should('have.value', user.myInfo.licenseExpiryDate)
    cy.get('#personal_txtNICNo').should('have.value', user.myInfo.SSNnumber)
    cy.get('#personal_txtSINNo').should('have.value', user.myInfo.SINnumber)
    cy.get('ul.radio_list').find('input:checked').should('have.value', user.myInfo.gender)
    cy.get('#personal_cmbMarital').should('have.value', user.myInfo.maritalStatus)
    cy.get('#personal_cmbNation').contains(user.myInfo.nationality).should('be.selected')
    cy.get('#personal_DOB').should('have.value', user.myInfo.dob)
    cy.get('#personal_txtEmpNickName').should('have.value', user.myInfo.nickName)
    cy.get('#personal_txtMilitarySer').should('have.value', user.myInfo.militaryService)
}
export function updateBloodType(user) {
    cy.get('#btnEditCustom').should('have.value', 'Edit').click()
    cy.get('[name=custom1]').select(user.myInfo.bloodGroup)
    cy.get('#btnEditCustom').should('have.value', 'Save').click()
    cy.url().should('contain', '#custom')
}
export function verifyBloodType(user) {
    cy.get('[name=custom1]')
        .find('option:checked')
        .should('have.value', user.myInfo.bloodGroup)
}
export function uploadAttachment(user) {
    cy.get('#btnAddAttachment').should('have.value', 'Add').click()
    cy.get('#ufile').attachFile('minion.jpg')
    cy.get('#txtAttDesc').type(user.myInfo.comment)
    cy.get('#btnSaveAttachment').should('have.value', 'Upload').click()
    cy.url().should('contain', '#attachments')
}
export function verifyAttachment(user) {
    cy.get('#tblAttachments').contains('td', 'minion.jpg')
    cy.get('#tblAttachments').contains('td', user.myInfo.comment)
}
export function editAttachment(user) {
    cy
    .get('#tblAttachments')
    .contains('td', 'minion.jpg')
    .parent('tr')
    .contains('td', 'Edit')
    .click()
    cy
    .get('#saveHeading')
    .should('be.visible')
    .get('#ufile')
    .attachFile('minion.jpg')
    cy
    .get('#txtAttDesc')
    .clear()
    .type(user.myInfo.newComment)
    cy
    .get('#btnSaveAttachment')
    .should('have.value', 'Upload')
    .click()
    cy.url().should('contain', '#attachments')
}
export function verifyEditedAttachment(user) {
    cy.get('#tblAttachments').contains('td', 'minion.jpg')
    cy.get('#tblAttachments').contains('td', user.myInfo.newComment)
}
export function uploadProfilePhoto(){
    cy.get('.imageHolder').click()
    cy.url().should('contain','viewPhotograph')
    cy.get('.head').contains('h1','Photograph').should('be.visible')
    cy.get('#photofile').attachFile('minion.jpg')
    cy.get('#btnSave').should('have.value','Upload').click()
}