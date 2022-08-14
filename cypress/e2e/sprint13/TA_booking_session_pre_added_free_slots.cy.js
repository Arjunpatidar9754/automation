describe('Talent Analysis test', () => {
    it('Session Booking when free slot are already added', () => {
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
        cy.get(':nth-child(1) > .nav-drop > #dropdown-autoclose-true').click({ force: true })
        cy.wait(500)
        cy.get('.dropdown-menu > :nth-child(4)').click({ force: true })
        cy.wait(2000)

        // visit report page
        cy.get('.list-unstyled > :nth-child(3) > a > svg').click({ force: true })
        cy.wait(2000)

        //assertion to check page
        cy.url().should('include', '/report')
        cy.get('.col-md-auto > .mb-0').contains('Discover & Identify')

        //Session booking
        cy.get('.col-md-auto > .btn').should('have.text', 'Book a Session with Joonify Talent Advisor')
        cy.get('.col-md-auto > .btn').contains('Book a Session with Joonify Talent Advisor').click({ force: true })
        cy.wait(1000)
        cy.get('.col-md-auto > .btn').should('have.text', 'Session booked')
    })
})