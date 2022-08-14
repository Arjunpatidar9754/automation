/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });

describe('Calendar Validation', () => {
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
        cy.get('.active > .btn').click({force:true})
        cy.wait(10000)
        cy.get('#name1').click({force: true})
        cy.get('#hour1').clear().click().type("03")
        cy.get('#minute1').clear().click().type("33")
        cy.get(':nth-child(1) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get(':nth-child(1) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(2) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get(':nth-child(1) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .head > svg')
        .click()
        cy.get('#name2').click({force: true})
        cy.get('#hour2').clear().click().type("04")
        cy.get('#minute2').clear().click().type("33")
        cy.get(':nth-child(1) > .row.justify-content-between > .picker-end > :nth-child(2) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get(':nth-child(1) > .row.justify-content-between > .picker-end > :nth-child(2) > .cus-picker > .head > svg')
        .click()
        
        cy.get(':nth-child(1) > .row.justify-content-between > .blank-slc').click()
        cy.get('#react-select-2-option-0').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .row.justify-content-between > .blank-slc').click()
        cy.get('#react-select-2-option-1').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .row.justify-content-between > .blank-slc').click()
        cy.get('#react-select-2-option-2').click()
        cy.wait(1000)
        cy.get(':nth-child(1) > .row.justify-content-between > .blank-slc').click()
        cy.get('#react-select-2-option-3').click()

        cy.get('[for="weekday-mon-1"]').click()
        cy.get('[for="weekday-wed-1"]').click()
        cy.get('[for="weekday-fri-1"]').click()
        cy.get('[for="weekday-sat-1"]').click()

        cy.get('.modal-footer > .btn-blue').click()
        // after validation check now its time to correct

        cy.get('#name1').click({force: true})
        cy.get('#hour1').click().clear().type("03")
        cy.get('#minute1').click().clear().type("33")
        cy.get(':nth-child(1) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get(':nth-child(1) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .head > svg')
        .click()
        cy.get('.modal-footer > .btn-blue').click()

        // Add new schedule
        cy.wait(10000)
        cy.get('.active > .btn').click({force:true})
        cy.wait(10000)
        cy.get('#name5').click({force: true})
        cy.get('#hour5').click().clear().type("03")
        cy.get('#minute5').click().clear().type("33")
        cy.get(':nth-child(3) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get(':nth-child(3) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(2) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get(':nth-child(3) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .head > svg')
        .click()
        cy.get('#name6').click({force: true})
        cy.get('#hour6').click().clear().type("04")
        cy.get('#minute6').click().clear().type("33")
        cy.get(':nth-child(3) > .row.justify-content-between > .picker-end > :nth-child(2) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get(':nth-child(3) > .row.justify-content-between > .picker-end > :nth-child(2) > .cus-picker > .head > svg')
        .click()
        
        cy.get(':nth-child(3) > .row.justify-content-between > .blank-slc').click()
        cy.get('#react-select-11-option-0').click()
        cy.wait(1000)

        cy.get('.modal-footer > .btn-blue').click()
        // after validation check now its time to correct

        cy.get('#name5').click({force: true})
        cy.get('#hour5').click().clear().type("03")
        cy.get('#minute5').click().clear().type("33")
        cy.get(':nth-child(3) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .body > .col-12 > .row > .ps-0 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile')
        .click()
        cy.get(':nth-child(3) > .row.justify-content-between > :nth-child(2) > :nth-child(2) > .cus-picker > .head > svg')
        .click()
        cy.get('.modal-footer > .btn-blue').click()
        cy.wait(1000)
        // cy.get('[style="top: 14.7917%; width: 100%; height: 4.16667%; left: 0%;"] > .rbc-event-content > p > .custom-event-title')
        cy.get(':nth-child(4) > .rbc-events-container > [style="top: 14.7917%; width: 100%; height: 4.16667%; left: 0%;"] > .rbc-event-content > p > .custom-event-title')
        .should('have.text', 'Study time')

    })
})