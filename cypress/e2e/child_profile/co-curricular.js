/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);
    debugger;
    return false;
  });


describe('Child profile new design',() => {

    //Checking the skills/interest/hobbies section
        it('Co-curricular',function()
        {
            cy.visit(Cypress.env('url9'))
            cy.get('input[name=email]').type('harish@mailinator.com')
            cy.get('input[name=password]').type('skOklnLP')
            cy.get('.btn').click()
                cy.wait(3000)
            cy.url().should('include','child')
                cy.wait(1000)

        //Checking the cancel button section
            cy.get('#addOptionView_7').find('.btn.btn-border').contains('Add now').click()
                cy.get('.btn.btn-blank').contains('Cancel').click()
                cy.wait(1000)

        //Validations for selecting atleast3 skills/interest/hobbies should be displayed
        //and adding them 
            cy.get('#addOptionView_7').find('.btn.btn-border').contains('Add now').click()
                cy.get('.btn.btn-blue').contains('Save').click()
                    cy.wait(1000)
                    cy.get('.col-12.card.card-border.card-xxs.text-center.mb-0').click()
                    cy.get('#subject-each-name-coc-1').type('laundry{enter}')
                    cy.get('#subject-sub-rating-coc-1').click() 
                        cy.get('.btn.btn-blue').contains('Save').click() //Validations for 3 skills
                    
                    cy.get('.col-12.card.card-border.card-xxs.text-center.mb-0').click()    
                        cy.get('#subject-each-name-coc-2').type('PERSONALITY{enter}')
                            cy.get('#subject-sub-rating-coc-2').click()
                    cy.get('.col-12.card.card-border.card-xxs.text-center.mb-0').click()
                        cy.get('#subject-each-name-coc-3').type('Confidence{enter}')
                            cy.get('#subject-sub-rating-coc-3').click()
                            cy.get('.btn.btn-blue').contains('Save').click() //Validations for 3 interests
                                cy.wait(1000) 

                    cy.get('#interest-sub-section-main').find('.css-1s2u09g-control').type('arts{enter}')
                    cy.get('#interest-sub-section-main').find('.css-1s2u09g-control').type('ENVIRONMRNT{enter}')
                    cy.get('#interest-sub-section-main').find('.css-1s2u09g-control').type('Wildlife{enter}')
                        cy.get('.btn.btn-blue').contains('Save').click() //Validations for 3 hobbies
                        
                    cy.get('#hobbies-sub-section-main').find('.css-1s2u09g-control').type('dancing{enter}')
                    cy.get('#hobbies-sub-section-main').find('.css-1s2u09g-control').type('PAINTING{enter}')
                    cy.get('#hobbies-sub-section-main').find('.css-1s2u09g-control').type('Sports{enter}')
                        cy.get('.btn.btn-blue').contains('Save').click()
                            cy.wait(1000)                                                                                                                                                                                                                                                                                                                                                               

        //Checking the buttons functionality
            cy.get('#head-co-curricular').find('#edit_co-curr_btn_anchor').click()
            cy.get('#subject-refresh-edit-icon-coc-1').click()
            cy.get('#subject-trash-icon-coc-2').click()
            // cy.get('#subject-each-row-coc-4').should('be.visible')
            // cy.get('').should('be.visible')
            cy.get('.btn.btn-blank').contains('Cancel').click()

        //Checking the arrow buttons functionality on the card
            cy.get('#head-co-curricular').find('#co-curricular-skill-section-card')
                .find('#arrow-left-curricular').click()
                    cy.get('#head-co-curricular').find('#co-curricular-skill-section-card')
                        .find('#arrow-right-skill').click()
            cy.get('#head-co-curricular').find('#co-curri-interest-card')
                .find('#arrow-interest-right').click()
                    cy.get('#head-co-curricular').find('#co-curri-interest-card')
                        .find('#arrow-interest-left').click()
            cy.get('#head-co-curricular').find('#co-curri-hobby-card')
                .find('#arrow-hobby-right-anchor').click()
                    cy.get('#head-co-curricular').find('#co-curri-hobby-card')
                        .find('#arrow-hobby-left').click()

            cy.get('#co-curricular-skill-section-card').eq(0).should('have.data','Laundry')
            cy.get('#co-curricular-skill-section-card').eq(0).should('have.data','Personality')
            cy.get('#co-curricular-skill-section-card').eq(0).should('have.data','Confidence') //Verify the added subjects on the card

            cy.get('#co-curri-interest-card').eq(0).should('have.data','Arts')
            cy.get('#co-curri-interest-card').eq(0).should('have.data','Environment')
            cy.get('#co-curri-interest-card').eq(0).should('have.data','Wildlife') //Verify the added subjects on the card

            cy.get('#co-curri-hobby-card').eq(0).should('have.data','Dancing')
            cy.get('#co-curri-hobby-card').eq(0).should('have.data','Painting')
            cy.get('#co-curri-hobby-card').eq(0).should('have.data','Sports') //Verify the added subjects on the card
            
        })
    })