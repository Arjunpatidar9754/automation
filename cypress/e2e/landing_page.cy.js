describe('Lading Page Loading', () => {
    it('Visit Page', () => {
        cy.visit('/')

        cy.get('h1')
            .should('have.text', 'Welcome to Joonify')

        cy.get('.fw-normal')
            .should('contain', `India’s 1st Intelligent Platform for Kid’s Learning & Growth`)

        cy.get('.left > h3')
            .should('contain', 'Login now to discover the true talent and potential of your child and explore the smart way of learning')

        cy.get('.card-head > .text-blue')
        .should('contain.text', 'Welcome back to Joonify.Good to see you back!')

        cy.get('.card-head > .mb-4')
        .should('contain', 'Please use your registered email address to login.If you are not a member, please register')

    })
    // we have to make new automation for this page.
    // it('go to register', ()=>{
    //     cy.get('.card-head > .mb-4 > .link')
    //     .should('contain.text', 'register')
    //     .invoke('removeAttr', 'target') 
    //     .click()
    // })
    it('Login request', () =>{
        // cy.visit('http://demo.joonify.com:4000/')

        // cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
        // .type('kapil@qualwebs.com')

        // cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
        // .type('eUFZHOwN')

        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
        .type('admin@aarklearnings.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
        .type('Hi@aark')

        cy.get('.btn')
        .should('have.text', 'Login')
        .click()
    })
})