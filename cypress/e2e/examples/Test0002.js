import HomePage from '../PageObjects/HomePage'
import ContactUs from '../PageObjects/ContactUs'

describe('Validate Contact us page', function()

{
    before(function(){
        cy.fixture('contactUs').then(function(data)
        {
            this.data=data
        })
    })

    it('Check all the fields on Contact Us page', function() {
        const homePage = new HomePage()
        const contactUs = new ContactUs()
        cy.visit(Cypress.env('url'))
        homePage.acceptCookies()
        homePage.clickOnRequestInfo()
        contactUs.getFirstNameBox().type(this.data.firstname)
        contactUs.getLastNameBox().type(this.data.lastname)
        contactUs.getPhoneBox().type(this.data.phonenumber)
        contactUs.getEmailBox().type(this.data.email)
        contactUs.getCompanyBox().type(this.data.company)
        contactUs.getProfitCheckBox().click()
        contactUs.getMessageBox().type(this.data.message)
        contactUs.getConsentBox().click()
        contactUs.getSubmitBox().should('have.value', 'Submit')
        
    })


})
  