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
        cy.wait(7000)

        cy.get('#edit_co-curr_btn').click({force:true})
        cy.wait(2000)
        cy.get('#subject-refresh-edit-icon-coc-3').click()
        cy.get('#ratng-each-subject-coc-3 > :nth-child(3)').click()
        cy.get('#add-last-text').click()
        cy.get('#subject-each-name-coc-4 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        .click()
        .type('work management{enter}')
        cy.get('#ratng-each-subject-coc-4 > :nth-child(3)').click()
        cy.get('#add-anchor-cocurricular').click()
        cy.get('#subject-each-name-coc-5')
        .click()
        .type('personality{enter}')
        cy.get('#ratng-each-subject-coc-5 > :nth-child(3)').click()
        cy.get('#subject-trash-icon-coc-5').click()
        cy.get('#subject-trash-icon-coc-4').click()

        cy.get('#interest-sub-section-main > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        .click()
        .type('nature{enter}')

        cy.get(':nth-child(5) > .icon > svg').click()

        cy.get('#hobbies-sub-section-main > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        .click()
        .type('origami{enter}')
        cy.get('#hobbies-sub-main-4 > .icon > #hobbies-section-close').click()
        cy.get('#co-cancel-btn').click()
        cy.get('#edit_co-curr_btn').click({force:true})
        cy.get('.btn-close').click()
        cy.get('#edit_co-curr_btn').click({force:true})
        cy.get('#ratng-each-subject-coc-1 > :nth-child(4)').click()
        cy.get('#ratng-each-subject-coc-2 > :nth-child(4)').click()
        // cy.get('#ratng-each-subject-coc-3 > :nth-child(4)').click()
        // cy.get('#subject-trash-icon-coc-4').click()
        cy.get('#co-save-btn').click({force: true})
        cy.wait(3000)
        cy.get('#edit_co-curr_btn').click({force:true})
        cy.wait(9000)
        cy.get('#ratng-each-subject-coc-1 > :nth-child(3)').click()
        cy.get('#ratng-each-subject-coc-2 > :nth-child(3)').click()
        // cy.get('#ratng-each-subject-coc-3 > :nth-child(3)').click()
        cy.get('#co-save-btn').click({force: true})
        cy.wait(2000)
        cy.get('#arrow-right-skill').click({force:true})
        cy.get('#arrow-left-curricular').click({force: true})

        cy.get('#arrow-interest-right').click({force: true})
        cy.get('#arrow-interest-left').click({force: true})

        cy.get('#arrow-hobby-right').click({force: true})
        cy.get('#arrow-hobby-left').click({force: true})
    })
})