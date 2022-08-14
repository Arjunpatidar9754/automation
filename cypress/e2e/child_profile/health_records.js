/// <reference types="cypress" />LEBQuyKq
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);
    debugger;
    return false;
  });


describe('Child profile new design',() => {
 //Checking the health records section 
 it('Health records',function()
 {
     cy.visit(Cypress.env('url9'))
     cy.get('input[name=email]').type('prachi@mailinator.com')
     cy.get('input[name=password]').type('')
     cy.get('.btn').click()
         cy.wait(3000)
     cy.url().should('include','child')
         cy.wait(1000)

    //Checking the cancel button section
         cy.get('#addOptionView_15').find('.btn.btn-border').contains('Add now').click()
             cy.get('.btn.btn-blank').contains('Cancel').click()
                 cy.wait(1000)

     //Validation for the blood group
         cy.get('#addOptionView_15').find('.btn.btn-border').contains('Add now').click()
         cy.get('.btn.btn-blue').contains('Save').click()
             cy.wait(2000)

     //Adding the blood group
         cy.get('#addOptionView_15').find('.btn.btn-border').contains('Add now').click()
         cy.get('#bg-lable-2').click()
             cy.get('#bg-lable-5').click()
                 cy.get('#bg-lable-8').click()
                     cy.get('#bg-lable-1').click()
                         cy.get('#bg-lable-7').click()
                             cy.get('#bg-lable-3').click()
                                 cy.get('#bg-lable-4').click()
                                     cy.get('#bg-lable-6').click()
                                 cy.get('.btn.btn-blue').contains('Save').click()
                                     cy.wait(2000)

     //Input field
         cy.get('#addOptionView_15').find('.btn.btn-border').contains('Add now').click()
             cy.get('.add-link').click()
                 cy.get('#').type('Child class 1 report card')
                     cy.get('#').type('Child class 2 report card')
                         cy.get('#delete-temp-file-0').click()                        
                         cy.get('.btn.btn-blue').contains('Save').click()
                             cy.wait(2000)

     //validations for input field
         cy.get('').find('.btn.btn-border').contains('Add now').click()
             cy.get('.add-link').click()
                 cy.get('.btn.btn-blue').contains('Save').click()
                     cy.wait(2000)

    //Uploading the files 
         cy.get('').click({force:true})
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
         cy.get('').click({force:true})
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
         cy.get('#health-card-main').find('#health_edit_btn').click({force:true})
         cy.get('#document').invoke('show')
             cy.get('#document').click().attachFile('default.jpeg')
                 cy.wait(3000)    
                     cy.get('#added_file_0').click()                        
                         cy.get('.btn.btn-blue').contains('Save').click()
                             cy.wait(2000)


    //  //Downloading the uploaded file
    //      cy.get('#health-card-main').find('#')
    //          .click({force:true})
    //              cy.wait(2000)  //image is downoaded

    //      cy.get('#health-card-main').find('#')
    //          .find('.edit-icon.float-start').invoke('show').click({force:true})
    //              cy.wait(2000) //pdf is downoaded

    //  //Removing the uploaded file from the card
    //      cy.get('#health-card-main').find('')
    //          .find('.edit-icon float-start ms-3').invoke('show').click({force:true})
    //              cy.wait(2000)
    //              cy.get('.react-confirm-alert-button-group').contains('No').click()
    //                  cy.wait(1000)
    //                      cy.get('#health-card-main').find('')
    //                      .find('.edit-icon float-start ms-3').invoke('show').click({force:true})
    //                          cy.wait(2000)
    //                          cy.get('.react-confirm-alert-button-group').contains('Yes').click()
    //                              cy.wait(1000)        
 })
})
