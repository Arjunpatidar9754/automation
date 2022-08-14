/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });
describe('Child Profile Page', () => {
    it('Edit Profile', () => {

        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
            .type('admin@aarklearnings.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
            .type('Hi@aark')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')



        cy.url().should('include', '/child')
        
        cy.get('#birthInfoView > svg').click({force:true})
        cy.get('.ant-picker-input > input').invoke('val').then((text) => {
            expect('2017-07-02').to.equal(text);
        })
        cy.get('.form-main > :nth-child(1) > :nth-child(2) > .col-12').invoke('val').then((text) => {
            expect('Bengaluru, Karnataka, India').to.equal(text)
        })
        cy.get('.form-main > :nth-child(1) > :nth-child(2) > .col-12').clear().type('Bengaluru, Karnataka, India')
        cy.get('#name1').invoke('val').then((time) => {
            expect('02:10 AM').to.equal(time)
        })
        cy.get('.btn-div > .btn-blue').click()
        // cy.wait(1000)
        cy.get('#birthInfoView > svg').click({force:true})
        cy.get('.btn-blank')
            .should('have.text', 'Cancel')
            .click()

            // cy.get('.ant-picker-clear > .anticon > svg > path').click({force: true})
            // cy.get('.ant-picker-input > input').clear()
            // cy.get('.ant-picker').click()

            // cy.get('.ant-picker-input > input').clear().type('2018-06-01')
    })
})