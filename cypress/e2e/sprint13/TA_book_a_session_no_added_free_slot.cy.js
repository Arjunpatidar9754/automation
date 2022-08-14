describe('Talent Analysis test', () => {
    it('Session Booking when free slot is not added', () => {
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
        cy.get('.dropdown-menu > :nth-child(3)').click({ force: true })
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

        //Add free slot popup open
        cy.get('.card-xs > a > .col-12').click({ force: true })
        cy.get('.css-ackcql').type('Everyday{enter}')

        cy.get('#name0').click({ force: true })
        cy.get('#hour0').clear().click().type("03")
        cy.get('#minute0').clear().click().type("33")
        cy.get(':nth-child(1) > .checkbox-wrapper > .checkbox-tile').click()
        cy.get('.head > svg')
            .click()
        cy.get('.btn-div > .btn-blue').click()
        cy.wait(1000)
        //now again book session
        cy.get('.col-md-auto > .btn').contains('Book a Session with Joonify Talent Advisor').click({ force: true })
        cy.wait(1000)
        cy.get('.col-md-auto > .btn').should('have.text', 'Session booked')
    })
})