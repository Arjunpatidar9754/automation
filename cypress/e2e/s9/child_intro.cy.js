/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);
    debugger;
    return false;
  });

describe('Child profile new design',() => {

    //Checking the introduction videos section 
    it('Child intro',function()
    {
        cy.visit('/')
        cy.get('input[name=email]').type('prachi@mailinator.com')
        cy.get('input[name=password]').type('LEBQuyKq')
        cy.get('.btn').click()
            cy.wait(3000)
        cy.url().should('include','child')
            cy.wait(1000)
    //Checking the cancel button section
            cy.get('#add_now_10').click({force: true})
            cy.get('.btn.btn-blank').contains('Cancel').click()
            cy.wait(1000)

    //Uploading the videos
        cy.get('#addOptionView_10').find('.btn.btn-border').contains('Add now').click({force: true})
            cy.get('#document').invoke('show')
            cy.get('#document').click().attachFile('pexels-thirdman-5538137.mp4')
                cy.wait(10000)
                cy.get('#document').click().attachFile('pexels-cottonbro-5532765.mp4')
                cy.wait(10000)    
                    cy.get('#document').click().attachFile('pexels-cottonbro-5532774.mp4') 
                    cy.wait(10000)   
                        cy.get('#document').click().attachFile('sample-mp4-file-small.mp4') 
                        cy.wait(10000)      
                            cy.get('#document').click().attachFile('sample-mp4-file.mp4')
                            cy.wait(10000)
                        cy.get('.btn.btn-blue').contains('Save').click()
                            cy.wait(10000)

    //Checking the video on the card
        cy.get('#introViewCard').should('have.id','#dis_vid_1')
            .and('have.id','#dis_vid_3')
                .and('have.id','#dis_vid_0')    
                    .and('have.id','#dis_vid_4')
                        .and('have.id','#dis_vid_2')
                            cy.wait(2000)

    //Removing the uploaded videos  
        cy.get('#introViewCard').find('#dis_vid_0').find('#del_icon_show_0').click({force:true})
            cy.get('.react-confirm-alert-button-group').contains('No').click()
                cy.get('#introViewCard').find('#dis_vid_0').find('#del_icon_show_0').click({force:true})
                    cy.get('.react-confirm-alert-button-group').contains('Yes').click()
                        cy.wait(2000)

    //Checking the remove icon functionality
        cy.get('#introViewCard').find('#edit_intro').click()
        cy.get('#document').invoke('show')
            cy.get('#document').click().attachFile('pexels-thirdman-5538137.mp4')
                cy.wait(5000)
            cy.get('#del_icon_0').click()//need id of the delete icon here
            cy.get('.btn.btn-blank').contains('Cancel').click()
            cy.wait(1000)

    })
})