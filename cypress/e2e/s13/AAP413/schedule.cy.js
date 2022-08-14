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
                    if (name == 'cypress test') {
                        cy.get(`tbody > :nth-child(${i}) > :nth-child(8)`)
                            .invoke('text')                                  // no of demo request
                            .then(demoReq => {
                                if (demoReq == 8) {
                                    cy.get(`tbody > :nth-child(${i}) > :nth-child(7)`)
                                        .invoke('text')
                                        .then(counselling => {
                                            cy.log(counselling)
                                            cy.get(`tbody > :nth-child(${i}) > :nth-child(8)`).should('have.text', '8')
                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).should('be.visible')
                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).should('have.text', 'View/Schedule')
                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).click({ force: true })
                                            cy.wait(1000)
                                            for (let i = 1; i <= parseInt(demoReq) + parseInt(counselling); i++) {
                                                cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).scrollIntoView()
                                                cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).should('be.visible')
                                                cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).should('not.have.text', '')
                                                // Check counselling
                                                cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`)
                                                    .invoke('text')
                                                    .then(text => {
                                                        if (text == 'Counselling Session') {
                                                            cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).should('have.text', 'Counselling Session')
                                                        }
                                                        if (text !== 'Counselling Session') {
                                                            cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).should('not.have.text', 'Counselling Session')
                                                        }
                                                    })
                                            }
                                            cy.get('.btn-close').click({ force: true })
                                            cy.wait(2000)
                                        })
                                        //check counselling
                                    cy.get(`tbody > :nth-child(${i}) > :nth-child(7)`)
                                        .invoke('text')
                                        .then(counselling => {
                                            cy.log(counselling)
                                            cy.get(`tbody > :nth-child(${i}) > :nth-child(9)`)
                                                .invoke('text')
                                                .then(counsellingBooked => {
                                                    cy.log(counsellingBooked)
                                                    cy.get(`tbody > :nth-child(${i}) > :nth-child(8)`).should('have.text', '8')
                                                    cy.get(`:nth-child(${i}) > .text-end > .btn`).should('be.visible')
                                                    cy.get(`:nth-child(${i}) > .text-end > .btn`).should('have.text', 'View/Schedule')
                                                    cy.get(`:nth-child(${i}) > .text-end > .btn`).click({ force: true })
                                                    cy.wait(1000)
                                                    for (let i = 1; i <= parseInt(demoReq) + parseInt(counselling); i++) {
                                                        cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).scrollIntoView()
                                                        cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).should('be.visible')
                                                        cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).should('not.have.text', '')
                                                        // Check counsellingbooked
                                                        cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`)
                                                            .invoke('text')
                                                            .then(text => {
                                                                if (text == 'Counselling Session') {
                                                                    cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).should('have.text', 'Counselling Session')

                                                                    cy.log(counsellingBooked)
                                                                    if (counsellingBooked == 1) {
                                                                        cy.get(`:nth-child(${i}) > :nth-child(7) > .btn`).should('have.text', 'Edit')
                                                                    }
                                                                    if (counsellingBooked == 0) {
                                                                        cy.get(`:nth-child(${i}) > :nth-child(7) > .btn`).should('have.text', 'Schedule')
                                                                    }

                                                                }
                                                                if (text !== 'Counselling Session') {
                                                                    cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(2)`).should('not.have.text', 'Counselling Session')
                                                                }
                                                            })
                                                    }
                                                    cy.get('.btn-close').click({ force: true })
                                                    cy.wait(2000)
                                                })
                                                // demo booked
                                            cy.get(`tbody > :nth-child(${i}) > :nth-child(10)`)
                                                .invoke('text')
                                                .then(demoBooked => {
                                                    cy.log(demoBooked)
                                                    cy.get(`tbody > :nth-child(${i}) > :nth-child(9)`)
                                                        .invoke('text')
                                                        .then(counsellingBooked => {
                                                            cy.log(counsellingBooked)
                                                            cy.get(`tbody > :nth-child(${i}) > :nth-child(8)`).should('have.text', '8')
                                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).should('be.visible')
                                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).should('have.text', 'View/Schedule')
                                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).click({ force: true })
                                                            cy.wait(1000)
                                                            let pendings = [];
                                                            let req = parseInt(demoReq) + parseInt(counselling);
                                                            for (let i=1; i< parseInt(demoReq) + parseInt(counselling); i++){
                                                                
                                                                cy.get(`:nth-child(3) > .col-12 > tbody > :nth-child(${i}) > :nth-child(6)`)
                                                                .invoke('text')
                                                                .then(status => {
                                                                    if(status == 'pending') {
                                                                        cy.get(`:nth-child(${i}) > :nth-child(7) > .btn`).should('have.text', 'Schedule')
                                                                        pendings.push(i);
                                                                        cy.log(i)
                                                                        cy.log(pendings)
                                                                    }
                                                                    if(status !== 'pending'){
                                                                        cy.get(`:nth-child(${i}) > :nth-child(7) > .btn`).should('have.text', 'Edit')
                                                                    }
                                                                })
                                                            }
                                                            cy.wait(2000)
                                                            if(pendings.length > 0){
                                                                expect(pendings.length).to.equal(req)
                                                            }

                                                            cy.get('.btn-close').click({ force: true })
                                                            cy.wait(2000)
                                                        })
                                                    })
                                                    // free slot checking
                                                    cy.get(`tbody > :nth-child(${i}) > :nth-child(4)`)
                                                        .invoke('text')
                                                        .then(freeSlot => {
                                                            cy.log(freeSlot)
                                                            cy.get(`tbody > :nth-child(${i}) > :nth-child(8)`).should('have.text', '8')
                                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).should('be.visible')
                                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).should('have.text', 'View/Schedule')
                                                            cy.get(`:nth-child(${i}) > .text-end > .btn`).click({ force: true })
                                                            cy.wait(1000)
                                                            for (let i = 1; i <= freeSlot; i++) {
                                                                cy.get(`.col-6 > tbody > :nth-child(${i}) > :nth-child(1)`).should('be.visible')
                                                                cy.get(`.col-6 > tbody > :nth-child(${i}) > :nth-child(1)`).should('not.have.text', '')
                                                            }
                                                            cy.get('.btn-close').click({ force: true })
                                                            cy.wait(2000)
                                                        })
                                                })
                                        }
                            })
                    }
                })
        }

    })
})