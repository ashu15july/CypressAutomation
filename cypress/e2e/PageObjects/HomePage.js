class HomePage
{

acceptCookies(){
    return cy.get('#CybotCookiebotDialogBodyButtonAccept').click()
}

clickOnMeetActabl(){
    return cy.get('.secondary-button').click()
}

clickOnRequestInfo()
{
    return cy.get('a.primary-button.margin-right').click()
}




}

export default HomePage;