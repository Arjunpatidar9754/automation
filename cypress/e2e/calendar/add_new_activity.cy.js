/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });

describe('Add New Activity', () => {
    it('Edit Schedule and Add Schedule', () => {

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
        cy.get(':nth-child(3) > .link > svg').click({force:true})
        cy.url().should('include', '/calendar')
        cy.wait(10000)
        
        cy.get('.col-md-auto > .btn').click({force: true})
        cy.get('.btn-close').click()
        cy.get('.col-md-auto > .btn').click({force: true})
        cy.wait(1000)
        cy.get(':nth-child(1) > .form-check-label > svg > g > rect').click({force: true})
        cy.get(':nth-child(2) > .form-check-label > svg > g > rect').click({force: true})
        cy.get('.check-priority > .col-12 > .row > :nth-child(2) > :nth-child(3) > .form-check-label > svg > g > rect').click({force: true})

        // response is not shown in UI part of radio buttons ---problem

        cy.get('form > :nth-child(1) > :nth-child(2) > .form-control')
        .clear()
        .type('test')

        cy.get(':nth-child(3) > .ant-picker > .ant-picker-input > input').click()
        cy.wait(500)
        cy.get('[title="2022-08-02"]').click({force: true})
        // cy.wait(500)
        // cy.get(':nth-child(4) > .ant-picker > .ant-picker-input > input').click()
        // cy.wait(500)
        // cy.get('[title="2022-08-02"]').click({force: true})
        
        cy.wait(500)
        cy.get('#name1').click({force: true})
        cy.get('#hour1').clear().click().type("03")
        cy.get('#minute1').clear().click().type("33")
        cy.get('.picker-down.pe-2 > :nth-child(3) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get('.picker-down.pe-2 > :nth-child(3) > .cus-picker > .head > svg')
        .click()
        cy.get('#name2').click({force: true})
        cy.get('#hour2').clear().click().type("04")
        cy.get('#minute2').clear().click().type("33")
        cy.get('.picker-down.ps-2 > :nth-child(3) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get('.picker-down.ps-2 > :nth-child(3) > .cus-picker > .head > svg')
        .click()

        cy.get(':nth-child(7) > .valid-control > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        .click()
        cy.get('#react-select-2-option-0')
        .click()

        cy.get(':nth-child(8) > .valid-control > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        .click()
        cy.get('#react-select-3-option-1')
        .click()

        cy.get(':nth-child(9) > .valid-control > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        .click()
        cy.get('#react-select-4-option-2')
        .click()
        cy.wait(500)
        // cy.get(':nth-child(9) > .valid-control > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        // .click()
        // cy.get('#react-select-4-option-0')
        // .click()

        cy.get('.float-end > .btn-blue')
        .click()

    })
})