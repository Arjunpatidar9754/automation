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

        cy.get('#edit-subject-int-btn').click({force: true})
        cy.get('#refresh-subj-icon-1').click()
        cy.get('#subject-rating-1 > :nth-child(4)').click()
        cy.get(':nth-child(2) > [style="display: inline-block; position: absolute; overflow: hidden; top: 0px; left: 0px; width: 100%;"] > #English-star2 > path').click()
        cy.get('.add-link').click({force: true})
        cy.get('#subject-list-4 > .css-b62m3t-container > .css-1s2u09g-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click().type('EVS{enter}')
        cy.get('#subject-rating-4 > :nth-child(4)').click({force: true})
        cy.get('#del-subj-icon-4').click()
        cy.get('.btn-div > .btn-blue').click()
        cy.get('#edit-subject-int-btn').click({force: true})
        cy.get('.btn-blank').click({force: true})
        cy.get('#edit-subject-int-btn').click({force: true})
        cy.get('.btn-close').click({force: true})

        //Add one more subject
        cy.get('#edit-subject-int-btn').click({force: true})
        cy.wait(1000)
        cy.get('.add-link').click({force: true})
        cy.get('#subject-list-4 > .css-b62m3t-container > .css-1s2u09g-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click().type('EVS{enter}')
        cy.get('#subject-rating-4 > :nth-child(4)').click({force: true})
        cy.get('.btn-div > .btn-blue').click()
        cy.get('#subject-list-4 > .row > .col > .mb-0')
        .should('have.text', 'EVS')

        cy.get('#arrow-right-subject').click({force: true})
        cy.get('#arrow-right-subject').click({force: true})
        cy.get('#arrow-left-subject').click({force: true})
        cy.get('#arrow-left-subject').click({force: true})
    })
})