/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);
    debugger;
    return false;
  });


describe('Child profile new design',() => {
    
    it('Academic',function()
    {
        cy.visit('/')
        cy.get('input[name=email]').type('prachi@mailinator.com')
        cy.get('input[name=password]').type('LEBQuyKq')
        cy.get('.btn').click()
            cy.wait(3000)
        cy.url().should('include','child')
            cy.wait(3000)
        cy.get('#dropdown-autoclose-true').click()
            cy.get('.dropdown-menu > :nth-child(3) > .col-12 > .row').click()


    //Check for the validations on the academic info section 
     
        cy.get('#academicInfo').click({force:true})   
        cy.get('.btn.btn-blue').contains('Save').click()
        cy.get('.col-12 > .css-b62m3t-container > .css-1s2u09g-control').type('Delhi{enter}') 
        cy.get('.btn.btn-blue').contains('Save').click()
        cy.get('.col-12 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        .type('State Board{enter}') 
        cy.get('.btn.btn-blue').contains('Save').click() 
        cy.get('.no-label > .form-control').type('MP Board')
        cy.get('.btn.btn-blue').contains('Save').click()
            cy.get('.col-md-6.mb-0 > .col-12 > .checkbox-group > :nth-child(1)').click()
            cy.get('.btn.btn-blue').contains('Save').click()
            cy.get('.percent-slider > .time-slider > #scale > .handel').invoke('val','90%').trigger('change {force: true}')
            cy.get('.btn.btn-blank').contains('Cancel').click()
            
        //Filling the details on the form
            cy.get('#academicInfo').click({force:true})
            cy.get('#grade-1').click({force: true})
            cy.get(':nth-child(3) > .checkbox-wrapper > .checkbox-tile').click({force: true})
            cy.get(':nth-child(5) > .checkbox-wrapper > .checkbox-tile').click({force: true})
            cy.get(':nth-child(4) > .checkbox-wrapper > .checkbox-tile').click({force: true})
            cy.get('.mb-1 > .checkbox-group > :nth-child(2) > .checkbox-wrapper > .checkbox-tile').click({force: true})
            cy.get('.col-md-12 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql').type('Delhi{enter}')
            
            cy.get('.col-12 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
            .type('CBSE{enter}') 
                cy.get('.col-md-6.mb-0 > .col-12 > .checkbox-group > :nth-child(1)').click()

                    cy.get(':nth-child(6) > .row > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
                    .type('2019{enter}')
                    cy.get(':nth-child(7) > .row > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
                    .type('2020{enter}')
                    cy.get('.percent-slider > .time-slider > #scale > .handel')
                        .invoke('val', '90%').trigger('change {force: true}')
                            cy.get('.btn.btn-blue').contains('Save').click()
                            cy.wait(2000)
        
        //Verifying the details on the card
            cy.get('#academicInfo').find('#currentGradecard').should('have.data','First')
            cy.get('#academicInfo').find('#preschoolCard').should('have.data','Delhi Public School')
            cy.get('#academicInfo').find('#educationBoardCard').should('have.data','CBSE')
            cy.get('#academicInfo').find('#LYPcard').should('have.data','57-67')
            cy.get('#academicInfo').find('#Bcard').should('have.data','2019 - 2020')
                
    })
})