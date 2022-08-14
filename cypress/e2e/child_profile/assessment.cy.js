/// <reference types="cypress" />

describe('Child profile new design',() => {

    //Checking the skills/interest/hobbies section
        it('Assessment',function()
        {
            cy.visit(Cypress.env('url9'))
            cy.get('input[name=email]').type('harish@mailinator.com')
            cy.get('input[name=password]').type('skOklnLP')
            cy.get('.btn').click()
                cy.wait(3000)
            cy.url().should('include','child')
                cy.wait(3000)

        //Checking the cancel button section
            cy.get('#addOptionView_20').find('.btn.btn-border').contains('Add now').click()
                cy.get('.btn.btn-blank').contains('Cancel').click()
                    cy.wait(1000)

        //Checking the validation on the section
            cy.get('#addOptionView_20').find('.btn.btn-border').contains('Add now').click()
                cy.get('.btn.btn-blue').contains('Save').click({force:true})
                    cy.wait(1000)
                cy.get('#psycologicalTest-Yes-lable-assessment').click()
                cy.get('.btn.btn-blue').contains('Save').click()
                    cy.wait(1000)
                    cy.get('.btn.btn-blank').contains('Cancel').click()


        //Uploading the files 
            cy.get('#addOptionView_20').find('.btn.btn-border').contains('Add now').click({force:true})
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
                                        cy.get('#psycologicalTest-No-lable-assessment').click()    
                                    cy.get('.btn.btn-blue').contains('Save').click()
                                        cy.wait(2000)

    //Checking the validations related to file upload
    cy.get('#assessment-card-view-main').find('#edit_report_btn').click({force:true})
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
            cy.get('#assessment-card-view-main').find('#edit_report_btn').click({force:true})
            cy.get('#document').invoke('show')
                cy.get('#document').click().attachFile('default.jpeg')
                    cy.wait(3000)    
                        cy.get('#delete-temp-file-0').click()                        
                            cy.get('.btn.btn-blue').contains('Save').click()
                                cy.wait(2000)


        //Downloading the uploaded file
            cy.get('#assessment-card-view-main').find('#assesment-paint-max-icon-1').click({force:true})
                cy.wait(2000)

            cy.get('#assessment-card-view-main').find('#assesment-paint-max-icon-3').click({force:true})
                cy.wait(2000)

        //Removing the uploaded file from the card
            cy.get('#assessment-card-view-main').find('#assessment-del-icon-1').click({force:true})
                    cy.wait(2000)
                    cy.get('.react-confirm-alert-button-group').contains('No').click()
                        cy.wait(1000)
                            cy.get('#assessment-card-view-main').find('#assessment-del-icon-1').click({force:true})
                                cy.wait(2000)
                                cy.get('.react-confirm-alert-button-group').contains('Yes').click()
                                    cy.wait(1000)    
                                    
            cy.get('#assessment-card-view-main').find('#edit_report_btn').click({force:true})
            cy.get('#psycologicalTest-Yes-lable-assessment').click()
                // cy.get('select[name=listLearningDisability]').invoke('text').select('Hearing impairment')
                //     .select('Mental retardation and Mental illness')
                //         .select('Loco motor impairment; Cerebral Palsy')
            cy.get('#dont_want_discuss').check({force:true}).should('be.checked') //checkbox functionality
            cy.get('#dont_want_discuss').uncheck({force:true}).should('not.be.checked')
            cy.get('#dont_want_discuss').check({force:true}).should('be.checked')
            cy.get('.btn.btn-blue').contains('Save').click()
                cy.wait(2000)
            cy.get('#assessment-card-view-main').find('#edit_report_btn').click({force:true})
                cy.get('#dont_want_discuss').check({force:true}).should('be.checked') //verifying here
                cy.get('select[name=listLearningDisability]').should('be.disabled')   //disability field should be disabled
                    cy.get('.btn-close').click()

                cy.get('#assessment-card-view-main').find('#assessment-arrowSquare-right-anchor').click() //arrow button functionality
                cy.get('#assessment-card-view-main').find('#assessment-arrowSquare-left-anchor').click()
        })
})
