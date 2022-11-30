class AboutUs
{

 getElementForAllPeople()
 {
    return cy.get('div.w-dyn-list > div > div')
 }   

 printOutAllKeyPeoples()
 {
    return cy.get('div.w-dyn-list').find('div.team-text').each(($e1, index, $list) =>{

        const desig = $e1.find('p').text()
        const name = $e1.find('h5').text()
        cy.log('Meet the ',desig,' of Actabl ',name)
        
        }) 
 }   

}

export default AboutUs;