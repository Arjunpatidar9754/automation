/// <reference types="cypress" />

describe('Child profile new design',() => {

    //Checking the skills/interest/hobbies section
        it('Expectation',function()
        {
            cy.visit(Cypress.env('url9'))
            cy.get('input[name=email]').type('harish@mailinator.com')
            cy.get('input[name=password]').type('skOklnLP')
            cy.get('.btn').click()
                cy.wait(3000)
            cy.url().should('include','child')
                cy.wait(1000)

        //Checking the cancel button section
            cy.get('#addOptionView_11').find('.btn.btn-border').contains('Add now').click()
                cy.get('.btn.btn-blank').contains('Cancel').click()
                cy.wait(1000)

        //Checking the validation on the section
            cy.get('#addOptionView_11').find('.btn.btn-border').contains('Add now').click()
                cy.get('.btn.btn-blue').contains('Save').click()
                    cy.wait(1000) //validation displayed for concern field
                    cy.get('.btn.btn-blank').contains('Cancel').click()
            
        //Adding the details on concern field
            cy.get('#addOptionView_11').find('.btn.btn-border').contains('Add now').click()
                cy.get('#parent-edit-concern-drop').find('.css-b62m3t-container').type('kindness{enter}')
                cy.get('#parent-edit-concern-drop').find('.css-b62m3t-container').type('technology{enter}')
                cy.get('#parent-edit-concern-drop').find('.css-b62m3t-container').type('learning{enter}')
                cy.get('.btn.btn-blue').contains('Save').click()
                    cy.wait(1000) 
        //Adding details on other sections 
            cy.get('#main-parent-expect').find('#main-parent-expect-main-edit').click()
                cy.get('#parent-edit-expect-drop').find('.css-b62m3t-container').type('IAS{enter}')
                cy.get('#parent-edit-expect-drop').find('.css-b62m3t-container').type('Doctor{enter}')
                    cy.get('#parent-edit-fear-main').find('.css-b62m3t-container').type('peer pressure{enter}')
                    cy.get('#parent-edit-fear-main').find('.css-b62m3t-container').type('lying{enter}')
                        cy.get('.btn.btn-blue').contains('Save').click()
                            cy.wait(1000) 

        //Adding the details in the input field
            cy.get('#main-parent-expect').find('#main-parent-expect-main-edit').click()
                cy.get('#parent-edit-parent-textarea').type('This is for test')
                cy.get('.btn.btn-blue').contains('Save').click()
                    cy.wait(1000) 

        //Checking cross icon 
            cy.get('#main-parent-expect').find('#main-parent-expect-main-edit').click()  
                cy.get(':nth-child(2) > #parent-edit-expect-anchor-del').click()
                    cy.get(':nth-child(1) > #parent-edit-fear-anchor-del > #parent-edit-fear-close-del').click()
                        cy.get('#parent-edit-concern-close').click()
                            cy.get('#parent-edit-parent-textarea').clear()
                                cy.get('.btn.btn-blue').contains('Save').click()
                                     cy.wait(1000) //Updated details should display
                        
    })
})