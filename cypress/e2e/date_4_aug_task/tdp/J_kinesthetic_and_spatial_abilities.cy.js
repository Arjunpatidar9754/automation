/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

});

describe('TDP test', () => {
    it('Kinesthetic and Spatial Abilities test', () => {

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

        cy.get('.list-unstyled > :nth-child(2) > a > svg').click({ force: true })
        cy.wait(2000)

        cy.get('.foot > .btn').click({force:true})
        cy.get('label').click({force:true})
        cy.get('.foot > .btn').click({force:true})
        // Parent test assertion
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
            .should('not.be.visible')

        cy.get(':nth-child(1) > .card > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '150')
        cy.get(':nth-child(1) > .card > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')

        // Emotional activity assertion
        cy.get('.card-yellow')
            .should('be.visible')
        cy.get('.card-yellow > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
        cy.get('.card-yellow > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '80')
        cy.get('.card-yellow > .show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        // Aptitude test assertion
        cy.get('.card-blue')
            .should('be.visible')
        cy.get('.card-blue > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
        cy.get('.card-blue > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '80')
        cy.get('.card-blue > .show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        // Logical test assertion
        cy.get('.card-pink')
            .should('be.visible')
        cy.get('.card-pink > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
        cy.get('.card-pink > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '80')
        cy.get('.card-pink > .show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        // Applied Knowledge test assertion
        cy.get('.card-lightBlue')
            .should('be.visible')
        cy.get('.card-lightBlue > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
        cy.get('.card-lightBlue > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '80')
        cy.get('.card-lightBlue > .show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        // Creativity test assertion
        cy.get('.card-jellyBean')
            .should('be.visible')
        cy.get('.card-jellyBean > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
        cy.get('.card-jellyBean > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '80')
        cy.get('.card-jellyBean > .show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        // Accountability test assertion
        cy.get('.card-orange')
            .should('be.visible')
        cy.get('.card-orange > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
        cy.get('.card-orange > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '80')
        cy.get('.card-orange > .show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        // Linguistics test assertion
        cy.get('.card-purple')
            .should('be.visible')
        cy.get('.card-purple > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
        cy.get('.card-purple > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '80')
        cy.get('.card-purple > .show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')

        // assertions for test status
        cy.get('.card-skinTone > :nth-child(1) > .justify-content-between > .col > .row > .col-auto > .status-tag')
            .should('have.text', 'Not Started')
        cy.get('.card-skinTone > :nth-child(1) > .justify-content-between > .col > .row > .col-auto > .status-tag')
            .should('not.have.text', 'In Progress')

        //status of start/continue button
        cy.get('.card-skinTone > :nth-child(1) > .justify-content-between > .col-md-auto > .btn')
            .should('have.text', 'Start now')
        cy.get('.card-skinTone > :nth-child(1) > .justify-content-between > .col-md-auto > .btn')
            .should('not.have.text', 'Continue')

        // Start test
        cy.get('.card-skinTone > :nth-child(1) > .justify-content-between > .col-md-auto > .btn')
            .click({ force: true })
        cy.wait(2000)

        //continue button first time visible
        cy.get('.col-12 > .btn')
        .should('have.text','Continue')
        .click({force: true})
        cy.wait(2000)

        for (let i = 0; i < 5; i++) {
            cy.wait(2000)
            cy.get(':nth-child(3) > input')
                .click({ force: true })
            cy.wait(1500)
            cy.get('.foot > .btn')
                .should('have.text', 'Save')
                .click({ force: true })
            cy.wait(3500)
            cy.get('.foot > .btn')
                .should('have.text', 'Confirm')
                .click({ force: true })
        }
        cy.wait(7000)
        
        // Kinesthetic and Spatial Abilities test assertion
        cy.get('.card-skinTone')
            .should('be.visible')
        cy.get('.card-skinTone > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > p.mb-0')
            .should('have.text', 'Earned')
        cy.get('.card-skinTone > .show-coin > .justify-content-between > .col-md-auto > .col-12 > .row > .ps-1 > .text-black')
            .should('contain.text', '80')
        cy.get('.card-skinTone > .show-coin > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
            .should('have.text', 'Completed')
        cy.wait(5000)
        cy.url().should('include','/report')
    })
})