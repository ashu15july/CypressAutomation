import HomePage from '../PageObjects/HomePage'
import AboutUs from '../PageObjects/AboutUs' 

describe('Validate Home Page', function()
{
    it('Print the name of key people in Actabl', function() {
        const homePage = new HomePage()
        const aboutUs = new AboutUs()
        cy.visit(Cypress.env('url'))
        homePage.acceptCookies()
        homePage.clickOnMeetActabl()
        aboutUs.getElementForAllPeople().should('have.length',11)
        aboutUs.printOutAllKeyPeoples()
    })


})
  