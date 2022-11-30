class ContactUs
{

getFirstNameBox()
{
    return cy.get('input[name="firstname"]')
}    

getLastNameBox()
{
    return cy.get('input[name="lastname"]')
} 

getPhoneBox()
{
    return cy.get('input[name="phone"]')
} 

getEmailBox()
{
    return cy.get('input[name="email"]')
} 

getCompanyBox()
{
    return cy.get('input[name="company"]')
} 

getProfitCheckBox()
{
    return cy.get('input[value="ProfitSword"]')
} 

getMessageBox()
{
    return cy.get('textarea[name="message"]')
} 

getConsentBox()
{
    return cy.get('input[name=i_agree_storing_and_processing_my_personal_data_]')
} 

getSubmitBox()
{
    return cy.get('input[type="submit"]:nth-child(1)')
}
    
}

export default ContactUs;