/// <reference types="cypress" />

describe('feedback',() => {

    //Checking the skills/interest/hobbies section
    it('Feedback option',function()
    {
        
        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
            .type('admin@aarklearnings.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
            .type('Hi@aark')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')



        cy.url().should('include', '/child')
        cy.wait(2000)

        cy.get('.feedback-box').contains('Feedback').click()
        cy.get('.btn-close').click() //modal will close here

        cy.get('.feedback-box').contains('Feedback').click()
        cy.get('.btn.btn-blue').contains('Submit').click()
        cy.wait(1000) //validation for category field is displayed here
        cy.get('.css-b62m3t-container > .css-1s2u09g-control').click()
            cy.get('#react-select-3-option-1').contains('Schedule Management').click()
        cy.get('.btn.btn-blue').contains('Submit').click() //Validation for ratings field
        cy.get('.btn.btn-blank').contains('Cancel').click()

        cy.get('.feedback-box').contains('Feedback').click()
        cy.get('.css-b62m3t-container > .css-1s2u09g-control').click()
            cy.get('.css-11unzgr').contains('Discover & Identify').click()
            cy.get('.form-main > .row > :nth-child(2) > .rating > [style="display: inline-block; direction: ltr;"] > :nth-child(4)')
            .click({force:true})
            cy.get('.form-main > .row > :nth-child(2) > .rating > [style="display: inline-block; direction: ltr;"] > :nth-child(1)')
            .click()
            cy.get('.btn.btn-blue').contains('Submit').click() //No validation should display for input field
                cy.wait(2000) //Message displayed for submitting feedback

    //No validation should display for again submitting the feedback for the same stage multiple times
        cy.get('.feedback-box').contains('Feedback').click()  
        cy.get('.css-b62m3t-container > .css-1s2u09g-control').click()
        cy.get('.css-11unzgr').contains('Discover & Identify').click()
        cy.get('.form-main > .row > :nth-child(2) > .rating > [style="display: inline-block; direction: ltr;"] > :nth-child(5)')
        .click()
        cy.get('.form-control').type('This is for Test.')
            cy.get('.btn.btn-blue').contains('Submit').click()
                cy.wait(2000)

    })
})