/// <reference types="cypress" />

describe('Child profile new design',() => {

    //Checking the learning path section
        it('learning path',function()
        {
            cy.visit(Cypress.env('url9'))
            cy.get('input[name=email]').type('harish@mailinator.com')
            cy.get('input[name=password]').type('skOklnLP')
            cy.get('.btn').click()
                cy.wait(3000)
            cy.url().should('include','child')
                cy.wait(3000)
            cy.get('#dropdown-autoclose-true').click()
                cy.get('.dropdown-menu > :nth-child(3) > .col-12 > .row').click()
            
        //Checking the cancel button section
            cy.get('#addOptionView_12').find('#add_now_12').contains('Add now').click()
            cy.get('.btn.btn-blank').contains('Cancel').click()
            cy.wait(1000)

        //Checking the validation on the section
            cy.get('#addOptionView_12').find('#add_now_12').contains('Add now').click()
                cy.get('.btn.btn-blue').contains('Save').click()
                    cy.wait(1000) //validation for tution
                        cy.get(':nth-child(1) > .checkbox-wrapper > .checkbox-tile').click()
                            cy.get(':nth-child(3) > .head > .row > :nth-child(3) > .add-link').click()
                                cy.get('.btn.btn-blue').contains('Save').click() //validation for subject
                                    cy.get('.btn.btn-blank').contains('Cancel').click()
                                        cy.wait(1000)
        //Adding the details
            cy.get('#addOptionView_12').find('#add_now_12').contains('Add now').click()
                    cy.get(':nth-child(1) > .checkbox-wrapper > .checkbox-tile').click()
                        cy.get(':nth-child(3) > .body > .card-xs > a > .col-12').click()
                        cy.wait(1000)
                            cy.get('#subject-learning-input-div-1').find('.css-1s2u09g-control').type('maths{enter}')
                            cy.get('#subject-learning-input-div-1 > .row > .col-md > .toggle-button > label').click().click()    
            cy.get(':nth-child(1) > .body > .card-xs > a > .col-12').click()
                cy.wait(1000)
                    cy.get('#courses-learning-input-div-1').find('.css-1s2u09g-control').type('yoga{enter}')
                        cy.get('#courses-learning-input-div-1 > .row > .col-md > .toggle-button > label').click()
                            cy.get(':nth-child(1) > .body > .card-xs > a > .col-12').click()
                                cy.wait(1000)
                            cy.get('#courses-learning-input-div-2').find('.css-1s2u09g-control').type('classical{enter}')
                                    cy.get('#courses-learning-input-div-2 > .row > .col-md > .toggle-button > label').click().click()
                            cy.get('.btn.btn-blue').contains('Save').click()
                                    cy.wait(2000)

        //Checking the delete button
            cy.get('#learning-path-view-card').find('#edit-icon-learningPath').click()
                cy.get('#courses-learning-input-div-1').find('.edit-icon.float-start.ms-3').click() // course deleted
                cy.get('#subject-learning-input-div-1').find('.edit-icon.float-start.ms-3').click() //subject deleted
                cy.get('.btn.btn-blank').contains('Cancel').click()
                    cy.wait(1000)    
        }) 
    })