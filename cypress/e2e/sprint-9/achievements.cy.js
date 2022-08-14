/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);
    debugger;
    return false;
});
//   <a class="edit-icon float-start" href="https://aarkln.s3.ap-southeast-1.amazonaws.com/dev/test report.pdf" target="_blank"><svg id="aap_max_achieve_https://aarkln.s3.ap-southeast-1.amazonaws.com/dev/test report.pdf"

describe('Child profile new design', () => {
    //Checking the achievements/certificates section 
    it('Achievement', function () {
        cy.visit('/')
        cy.get('input[name=email]').type('prachi@mailinator.com')
        cy.get('input[name=password]').type('LEBQuyKq')
        cy.get('.btn').click()
        cy.wait(5000)
        cy.url().should('include', 'child')
        cy.wait(1000)

        //Checking the cancel button section
        cy.get('#addOptionView_14').find('.btn.btn-border').contains('Add now').click({ force: true })
        cy.get('.btn.btn-blank').contains('Cancel').click()
        cy.wait(1000)

        //Input field
        cy.get('#addOptionView_14').find('.btn.btn-border').contains('Add now').click({ force: true })
        cy.get('.add-link').click()
        cy.get('#certi_type_0').type('Child class 1 report card')
        cy.get('.add-link').click()
        cy.get('#certi_type_1').type('Child class 2 report card')
        cy.get('#certi_del_1').click()
        cy.get('#certi_del_0').click()
        cy.get('.btn.btn-blue').contains('Save').click()
        cy.wait(2000)

        //validations for input field
        cy.get('#addOptionView_14').find('.btn.btn-border').contains('Add now').click({ force: true })
        cy.get('.add-link').click()
        cy.get('.btn.btn-blue').contains('Save').click()
        cy.wait(2000)
        cy.get('.btn.btn-blank').contains('Cancel').click()
        cy.wait(1000)

        //Uploading the files 
        cy.get('#addOptionView_14').find('.btn.btn-border').contains('Add now').click({ force: true })
        cy.get('#document').invoke('show')
        cy.get('#document').click().attachFile('default.jpeg')
        cy.wait(5000)
        cy.get('#document').click().attachFile('test report.pdf')
        cy.wait(5000)
        cy.get('#document').click()
            .attachFile('Important Document.docx') //Error message for file format 
        cy.wait(5000)                      //should be displayed
        cy.get('#document').click()
            .attachFile('pexels-cottonbro-5532765.mp4') //Error message for file format 
        cy.wait(5000)                           //should be displayed
        cy.get('#document').invoke('show')
        cy.get('#document').click().attachFile('images.jpg')
        cy.wait(5000)
        cy.get('.btn.btn-blue').contains('Save').click()
        cy.wait(2000)

        //Checking the validations 
        cy.get('#achivementsViewCard').find('#edit_achievement_btn').click({ force: true })
        cy.get('#document').invoke('show')
        cy.get('#document').click().attachFile('africa_animal_big.jpg')
        cy.wait(5000) //File size error message is displayed
        cy.get('#document').invoke('show')
        cy.get('#document').click().attachFile('istockphoto-1222550815-170667a.jpg')
        cy.wait(5000)
        cy.get('#document').invoke('show')
        cy.get('#document').click().attachFile('Paris-France.jpg')
        cy.wait(5000)
        cy.get('#document').invoke('show')
        cy.get('#document').click().attachFile('images (1).jpg')
        cy.wait(5000) //error message displayed-max. 5 file can be uploaded
        cy.get('.btn.btn-blue').contains('Save').click()
        cy.wait(2000)


        // Checking the delete icon functionality on pop-up
        cy.get('#achivementsViewCard').find('#edit_achievement_btn').click({ force: true })
        cy.get('#document').invoke('show')
        cy.get('#document').click().attachFile('default.jpeg')
        cy.wait(5000)
        cy.get('#delete-temp-file-0').click()
        cy.get('.btn.btn-blue').contains('Save').click()
        cy.wait(2000)

        //Downloading the uploaded file
        cy.get('#achivementsViewCard').find('.edit-icon.float-start').first().click({ force: true })
        cy.wait(2000) //pdf is downloaded

        //Removing the uploaded file from the card
        cy.get('#achivementsViewCard').find('.edit-icon.float-start.ms-3').first().click({ force: true })
        cy.wait(2000)
        cy.get('.react-confirm-alert-button-group').contains('No').click()
        cy.wait(1000)
        cy.get('#achivementsViewCard').find('.edit-icon.float-start.ms-3').first().click({ force: true })
        cy.wait(2000)
        cy.get('.react-confirm-alert-button-group').contains('Yes').click()
        cy.wait(1000)
    })
})