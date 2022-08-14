/// <reference types="cypress" />


Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

});

describe("Free Slot Page Visit", () => {
    it("Free Slot Page Visit", () => {

        cy.visit('/')

        cy.get(':nth-child(1) > .form-control')
            .type('admin@aarklearnings.com')

        cy.get(':nth-child(2) > .form-control')
            .type('Hi@aark')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')


        cy.url().should('include', '/admin/parents')
        cy.wait(2000)
        cy.get('.nav-content').trigger('mouseover')
        cy.wait(500)
        cy.get('.show > :nth-child(3) > a').should('have.text', 'Free Slot Management')
        cy.get('.show > :nth-child(3) > a').click({ force: true })
        cy.wait(2000)

        for (let i = 1; i < 14; i++) {
            cy.get(`tbody > :nth-child(${i}) > :nth-child(3)`)
                .invoke('text')                                  // name to pick particular child
                .then(name => {
                    if (name == 'karan karan') {
                        cy.get(`:nth-child(${i}) > .text-end > .btn`).click({force : true})
                        cy.get('select').select('Pending request')
                        cy.wait(3000)
                        for(let i = 1; i <= 8; i++){
                            cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(6)`).should('have.text', 'pending')
                            cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(5)`).should('have.text','-  -')
                        }
                        cy.get('select').select('Scheduled')
                        cy.wait(3000)
                        cy.get(':nth-child(3) > .col-12 > tbody > tr > :nth-child(6)').should('not.have.text', 'pending')
                        cy.get(':nth-child(3) > .col-12 > tbody > tr > :nth-child(6)').should('not.have.text','-  -')
                    }
                })
            }
        })
    })