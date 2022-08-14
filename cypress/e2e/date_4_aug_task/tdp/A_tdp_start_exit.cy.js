/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });

describe('Child Free Slots', () => {
    it('Edit Schedule and Add Schedule', () => {

        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
            .type('joonify@mailinator.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
            .type('enxCAEIh')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')



        cy.url().should('include', '/child')
        cy.wait(2000)

        cy.get('.list-unstyled > :nth-child(3) > a > svg').click({force:true})
        cy.wait(1000)

        // checking status of parent test
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
        .should('have.text','Not Started')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
        .should('not.have.text','In Progress')

        //status of start/continue button
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
        .should('have.text', 'Start now')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
        .should('not.have.text', 'Continue')
        
        // continue or start test
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
        .click({force: true})

        //continue after reading instructions
        cy.get('.col-12 > .btn').click({force:true})
        cy.wait(1500)
        // exit test
        cy.get('.col-md-2 > .btn')
        .should('have.text','Exit test')
        .click({force:true})
        cy.wait(1500)

        //stay back
        cy.get('.py-md-5 > .btn')
        .should('have.text','I will stay back!')
        .click({force: true})
        cy.wait(1000)

        //again exit
        cy.get('.col-md-2 > .btn')
        .should('have.text','Exit test')
        .click({force:true})
        cy.wait(1500)
        cy.get('.col-12 > .link')
        .should('have.text','Nah! I will come back later')
        .click({force: true})
        cy.wait(1000)
        cy.contains('Further Later').click({force: true})
        cy.wait(4000)

        // checking status of parent test
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
        .should('not.have.text','Not Started')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .col-md > .row > .col-auto > .status-tag')
        .should('have.text','In Progress')

        //status of start/continue button
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
        .should('not.have.text', 'Start Now')
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
        .should('have.text', 'Continue')
        
        //continue or start test
        cy.get(':nth-child(1) > .card > :nth-child(1) > .justify-content-between > .ps-0 > .btn')
        .click({force: true})
        
    })
})