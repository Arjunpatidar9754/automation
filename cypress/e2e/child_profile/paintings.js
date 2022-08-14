/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);
    debugger;
    return false;
  });


describe('Child profile new design',() => {
    //Checking the paintings section 
    it('Paintings',function()
    {
        cy.visit(Cypress.env('url9'))
        cy.get('input[name=email]').type('prachi@mailinator.com')
        cy.get('input[name=password]').type('LEBQuyKq')
        cy.get('.btn').click()
            cy.wait(3000)
        cy.url().should('include','child')
            cy.wait(1000)

    //Checking the cancel button section
        cy.get('#addOptionView_17').find('.btn.btn-border').contains('Add now').click()
            cy.get('.btn.btn-blank').contains('Cancel').click()
                    cy.wait(1000)

        //Uploading the files 
            cy.get('#addOptionView_17').find('.btn.btn-border').contains('Add now').click({force:true})
            cy.get('#document').invoke('show')
                cy.get('#document').click().attachFile('default.jpeg')
                cy.wait(3000)
                    cy.get('#document').click().attachFile('test report.pdf')
                    cy.wait(3000)
                        cy.get('#document').click() 
                            .attachFile('Important Document.docx') //Error message for file format 
                                cy.wait(3000)                      //should be displayed
                                cy.get('#document').click() 
                                    .attachFile('pexels-cottonbro-5532765.mp4') //Error message for file format 
                                        cy.wait(3000)                           //should be displayed
                                        cy.get('#document').invoke('show')
                                            cy.get('#document').click().attachFile('images.jpg')
                                            cy.wait(3000)
                        cy.get('.btn.btn-blue').contains('Save').click()
                            cy.wait(2000)

        //Checking the validations 
        cy.get('#paintingViewCard').find('#paint-edit-btn').click({force:true})
        cy.get('#document').invoke('show')
            cy.get('#document').click().attachFile('africa_animal_big.jpg')
            cy.wait(3000) //File size error message is displayed
                cy.get('#document').invoke('show')
                    cy.get('#document').click().attachFile('istockphoto-1222550815-170667a.jpg')
                    cy.wait(3000)
                        cy.get('#document').invoke('show')
                            cy.get('#document').click().attachFile('Paris-France.jpg')
                            cy.wait(3000)
                                cy.get('#document').invoke('show')
                                    cy.get('#document').click().attachFile('images (1).jpg')
                                    cy.wait(3000) //error message displayed-max. 5 file can be uploaded
                    

        //Checking the delete icon functionality on pop-up
            cy.get('#paintingViewCard').find('#paint-edit-btn').click({force:true})
            cy.get('#document').invoke('show')
                cy.get('#document').click().attachFile('earth-tree.jpg')
                    cy.wait(3000)    
                        cy.get('#delete-temp-file-0').click()                        
                            cy.get('.btn.btn-blue').contains('Save').click()
                                cy.wait(2000)


        //Downloading the uploaded file
            cy.get('#paintingViewCard').find('#noapp-paint-max-icon-1').click({force:true})
                cy.wait(2000) //image is downoaded

            cy.get('#paintingViewCard').find('#noapp-paint-max-icon-2').click({force:true})
                cy.wait(2000) //pdf is downoaded

        //Removing the uploaded file from the card
            cy.get('#paintingViewCard').find('#paint-del-icon-2').click({force:true})
                    cy.wait(2000)
                    cy.get('.react-confirm-alert-button-group').contains('No').click()
                        cy.wait(1000)
                            cy.get('#paintingViewCard').find('#paint-del-icon-2').click({force:true})
                                cy.wait(2000)
                                cy.get('.react-confirm-alert-button-group').contains('Yes').click()
                                    cy.wait(1000)        
    })
})