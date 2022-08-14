/// <reference types="cypress" />

describe('Child profile new design',() => {

    //Checking the skills/interest/hobbies section
        it('Likings',function()
        {
            cy.visit(Cypress.env('url9'))
            cy.get('input[name=email]').type('harish@mailinator.com')
            cy.get('input[name=password]').type('skOklnLP')
            cy.get('.btn').click()
                cy.wait(3000)
            cy.url().should('include','child')
                cy.wait(3000)
            // cy.get('#dropdown-autoclose-true').click()
                // cy.get('.dropdown-menu > :nth-child(3) > .col-12 > .row').click()

        //Checking the cancel button section
            cy.get('#addOptionView_8').find('.btn.btn-border').contains('Add now').click()
                cy.get('.btn.btn-blank').contains('Cancel').click()
                cy.wait(1000)

        //Checking the validation on the section
            cy.get('#addOptionView_8').find('.btn.btn-border').contains('Add now').click()
                cy.get('.btn.btn-blue').contains('Save').click()
                    cy.wait(1000)
                
            cy.get('#child-edit-favourite-sports-input-main').find('.css-b62m3t-container').type('football{enter}')
            cy.get('.btn.btn-blue').contains('Save').click()
                    cy.wait(1000) //validation for atleast 3 sports is displayed
            
        //Adding the details
            cy.get('#child-edit-favourite-sports-input-main').find('.css-b62m3t-container').type('rowing{enter}')
            cy.get('#child-edit-favourite-sports-input-main').find('.css-b62m3t-container').type('cricket{enter}')
            cy.get('#child-edit-favourite-sports-input-main').find('.css-b62m3t-container').type('rafting{enter}')
            cy.get('.btn.btn-blue').contains('Save').click()
                cy.wait(1000) //sports should get saved and displayed on card.

        //Adding details on other sections 
        cy.get('#childLikingViewCard').find('#edit-icon-child-liking-head').click()   
        cy.get('#child-edit-favourite-food-input-main').find('.css-b62m3t-container').type('italian{enter}')
            cy.get('.btn.btn-blue').contains('Save').click()
                cy.wait(1000) //validation is not displayed if one options is selected and click save
            cy.get('#childLikingViewCard').find('#edit-icon-child-liking-head').click()
            cy.get('#child-edit-favourite-food-input-main').find('.css-b62m3t-container').type('thai{enter}')
            cy.get('#child-edit-favourite-food-input-main').find('.css-b62m3t-container').type('chinese{enter}') //food added

            cy.get('#child-edit-favourite-music-input-main').find('.css-b62m3t-container').type('classical{enter}')
            cy.get('#child-edit-favourite-music-input-main').find('.css-b62m3t-container').type('jazz{enter}')
            cy.get('#child-edit-favourite-music-input-main').find('.css-b62m3t-container').type('pop{enter}')//music added

            cy.get('#child-edit-favourite-movie').find('.css-b62m3t-container').type('jurassic park{enter}')
            cy.get('#child-edit-favourite-movie').find('.css-b62m3t-container').type('cricket{enter}')
            cy.get('#child-edit-favourite-movie').find('.css-b62m3t-container').type('jumanji{enter}')//movie added
            cy.get('.btn.btn-blue').contains('Save').click()
                cy.wait(2000)

            cy.get('#childLikingViewCard').find('#child-liking-card-main').find('#child-liking-left-arrow').click().click()
            cy.get('#childLikingViewCard').find('#child-liking-card-main').find('#child-liking-left-arrow').click().click() //buttons functionality on sports section

            cy.get('#childLikingViewCard').find('#child-liking-food-main-card').find('#child-food-anchor-right-arrow').click().click()
            cy.get('#childLikingViewCard').find('#child-liking-food-main-card').find('#child-food-anchor-left-arrow').click().click() //buttons functionality on food section

            cy.get('#childLikingViewCard').find('#child-liking-music-main-card').find('#child-music-anchor-right-arrow').click().click()
            cy.get('#childLikingViewCard').find('#child-liking-music-main-card').find('#child-music-anchor-left-arrow').click().click() //buttons functionality on music section

            cy.get('#childLikingViewCard').find('#child-movie-card-main').find('#child-movie-arrow-anchor-right').click().click()
            cy.get('#childLikingViewCard').find('#child-movie-card-main').find('#child-movie-arrow-anchor-left').click().click() //buttons functionality on movie section


        //Checking cross icon 
        cy.get('#childLikingViewCard').find('#edit-icon-child-liking-head').click()  
            cy.get('#child-edit-favourite-sports-close-2').click()
                cy.get('#child-edit-favourite-food-close-1').click()
                    cy.get('#child-edit-favourite-music-close-0').click()
                        cy.get('#child-edit-favourite-movie-close-1').click()
                    cy.get('.btn.btn-blank').contains('Cancel').click()
                cy.wait(1000)
                    
    })
})