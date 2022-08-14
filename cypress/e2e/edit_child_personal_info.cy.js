/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {

    console.log(`CYPRESS uncaught exception FLOW:::: ${err}`);

    debugger;

    return false;

  });
describe('Child Profile Page', () => {
    // it('Test POST Request', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'http://52.5.75.246:8000/graphql',
    //         form: true,
    //         retryOnStatusCodeFailure: true,
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: {
    //             query: "mutation Mutation($email: String, $password: String) {\n  login(email: $email, password: $password) {\n  id\n  first_name\n  last_name\n    email\n    phone\n    role\n    token\n    role\n    business_name\n    childCount\n  }\n}",
    //             variables: { "email": "admin@aarklearnings.com", "password": "Hi@aark" }
    //         },
    //     }).then(res => {
    //         cy.log(res);
    //     })
    // })
    it('Edit Profile', () => {

        cy.visit('/')

        cy.get('#loginForm > :nth-child(1) > :nth-child(1) > .form-control')
            .type('admin@aarklearnings.com')

        cy.get(':nth-child(2) > .row > .col-md-12 > .form-control')
            .type('Hi@aark')

        cy.get('.btn')
            .should('have.text', 'Login')
            .click().as('Login')



        cy.url().should('include', '/child')
        // ================================= personal info ===============================================
        cy.get('.edit-icon > #personalInfo').click({force: true})
        cy.wait(2000)
        cy.get('#first_name_input')
            .clear()
            .type('cypress')

        cy.get('#last_name_input')
            .clear()
            .type('testing')

        cy.get('#city_of_residence_input')
            .clear()
            .type('Indore, Madhya Pradesh, India')

        cy.get('#short_description_input')
            .clear()
            .type('Nothing to commit')

        cy.get('#G1')
            .check({ force: true })

        cy.get('#G2')
            .check({ force: true })

        cy.get('.btn-div > .btn-blue')
            .click({force: true})

        cy.get('.edit-icon > #personalInfo').click({force: true})
        cy.get('.btn-close').click({force: true})
        cy.get('.edit-icon > #personalInfo').click({force:true})
        cy.get('.btn-blank').click({force: true})
        //===================================== personal info end =====================================
        //====================================birth info =======================================

        // cy.wait(200)
        // cy.get('#birthInfoView > svg').click()
        // cy.get('.ant-picker-input > input').invoke('val').then((text) => {
        //     expect('2017-07-02').to.equal(text);
        // })
        // cy.get('.form-main > :nth-child(1) > :nth-child(2) > .col-12').invoke('val').then((text) => {
        //     expect('Bengaluru, Karnataka, India').to.equal(text)
        // })
        // cy.get('.form-main > :nth-child(1) > :nth-child(2) > .col-12').clear().type('Bengaluru, Karnataka, India')
        // cy.get('#name1').invoke('val').then((time) => {
        //     expect('02:10 AM').to.equal(time)
        // })
        // cy.get('.btn-div > .btn-blue').click()
        // // cy.wait(1000)
        // cy.get('#birthInfoView > svg').click()
        // cy.get('.btn-blank')
        //     .should('have.text', 'Cancel')
        //     .click()

        //     // cy.get('.ant-picker-clear > .anticon > svg > path').click({force: true})
        //     // cy.get('.ant-picker-input > input').clear()
        //     // cy.get('.ant-picker').click()

        //     // cy.get('.ant-picker-input > input').clear().type('2018-06-01')
        //=====================================birth info end ====================================
        //=====================================Academic Info Started ==============================
        // cy.wait(1000)
        // cy.get('#academicInfo > svg').click()
        // cy.get('.mb-1 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile').click()
        // cy.get('.mb-1 > .checkbox-group > :nth-child(2) > .checkbox-wrapper > .checkbox-tile').click()
        // cy.get(':nth-child(3) > .checkbox-wrapper > .checkbox-tile').click()
        // cy.get(':nth-child(4) > .checkbox-wrapper > .checkbox-tile').click()
        // cy.get(':nth-child(5) > .checkbox-wrapper > .checkbox-tile').click()
        // cy.get(':nth-child(3) > .checkbox-wrapper > .checkbox-tile').click()
        // cy.get('.css-ackcql').click().type('Aga Khan Academy{enter}')
        // cy.get('.form-control').select('ICSE')
        // cy.get('.form-control').select('CBSE')

        // cy.get('.percent-slider > .time-slider > #scale')
        //     .invoke("val", 83)
        //     .trigger("change")
        //     .click()

        // cy.get('.col-md-6.mb-0 > .col-12 > .checkbox-group > :nth-child(1) > .checkbox-wrapper > .checkbox-tile').click()
        // cy.get(':nth-child(6) > .row > :nth-child(1) > .form-control').select('February')
        // cy.get(':nth-child(6) > .row > :nth-child(2) > .form-control').select('2019')
        // cy.get(':nth-child(7) > .row > :nth-child(1) > .form-control').select('December')
        // cy.get(':nth-child(7) > .row > :nth-child(2) > .form-control').select('2019')

        // cy.get('.col-md-6.mb-0 > .col-12 > .checkbox-group > :nth-child(2) > .checkbox-wrapper > .checkbox-tile').click()
        // cy.get('.btn-div > .btn-blue').click()
        // cy.get('#academicInfo > svg').click()
        // cy.get('.btn-close').click()
        // cy.get('#academicInfo > svg').click()
        // cy.get('.btn-blank').click()

        //================================================Academic info end ==============================================

        //=======================================Subject Info Started ==============================================

        // cy.get('#edit-subject-int-btn').click()
        // cy.get('#refresh-subj-icon-1').click()
        // cy.get('#subject-rating-1 > :nth-child(4)').click()
        // cy.get(':nth-child(2) > [style="display: inline-block; position: absolute; overflow: hidden; top: 0px; left: 0px; width: 100%;"] > #English-star2 > path').click()
        // cy.get('#del-subj-icon-3').click()
        // cy.get('.card-xs > [type="button"] > .col-12').click()
        // cy.get('#subject-list-3 > .css-b62m3t-container > .css-1s2u09g-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click().type('EVS{enter}')
        // cy.get('#subject-rating-3 > :nth-child(4)').click()
        // cy.get('#del-subj-icon-4').click()
        // cy.get('.btn-div > .btn-blue').click()
        // cy.wait(200)
        // cy.get('#edit-subject-int-btn').click()
        // cy.get('.add-link').click()
        // cy.get('#del-subj-icon-4').click()
        // cy.get('.btn-blank').click()
        // cy.get('#edit-subject-int-btn').click()
        // cy.get('.btn-close').click()

        // cy.get('#arrow-right-subject').click()
        // cy.get('#arrow-right-subject').click()
        // cy.get('#arrow-left-subject').click()
        // cy.get('#arrow-left-subject').click()

        //====================================Subject Info end =======================================================
        //====================================Curriculum started ===================================================

        // cy.get('#edit_co-curr_btn').click()
        // cy.get('#subject-refresh-edit-icon-coc-3').click()
        // cy.get('#ratng-each-subject-coc-3 > :nth-child(3)').click()
        // cy.get('#add-last-text').click()
        // cy.get('#subject-each-name-coc-4 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        // .click()
        // .type('time management{enter}')
        // cy.get('#ratng-each-subject-coc-4 > :nth-child(3)').click()
        // cy.wait(200)
        // cy.get('#add-anchor-cocurricular').click()
        // cy.get('#subject-each-name-coc-5 > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        // .click()
        // .type('communication{enter}')
        // cy.get('#ratng-each-subject-coc-5 > :nth-child(3)').click()
        // cy.get('#subject-trash-icon-coc-5')

        // cy.get('#interest-sub-section-main > :nth-child(2) > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt')
        // .click()
        // .type('nature{enter}')

        // cy.get(':nth-child(5) > .icon > svg').click()

        // cy.get('#hobbies-sub-section-main > .css-b62m3t-container > .css-1s2u09g-control > .css-1d8n9bt > .css-ackcql')
        // .click()
        // .type('origami{enter}')
        // cy.get('#hobbies-sub-main-4 > .icon > #hobbies-section-close').click()

        // cy.get('#co-save-btn').click()
        // cy.wait(200)
        // cy.get('#edit_co-curr_btn').click()
        // cy.get('.btn-close')
        // cy.wait(200)
        // cy.get('#edit_co-curr_btn').click()
        // cy.get('#co-cancel-btn')
        // cy.wait(200)
        // cy.get('#arrow-right-skill').click()
        // cy.get('#arrow-left-curricular').click()

        // cy.get('#arrow-interest-right').click()
        // cy.get('#arrow-interest-left').click()

        // cy.get('#arrow-hobby-right').click()
        // cy.get('#arrow-hobby-left').click()

    })
    // context('child profile', () => {
    //     it('child profile', () => {
    //         cy.url().should('include', '/child')
    //     })
    //     // it('select child', ()=>{
    //     //     cy.get(':nth-child(1) > .nav-drop > #dropdown-autoclose-true').click()
    //     //     cy.get(':nth-child(2) > .col-12 > .row > .fw-bold').click()
    //     //     // error occurs during seletion.
    //     // })

    //     // it('edit banner', ()=>{
    //     //     cy.get('#editBanner').click()
    //     //     cy.get('.btn-blank').click()
    //     //     cy.get('#editBanner').click()
    //     //     cy.get('input[type="file"]').attachFile('banner.png')
    //     //     cy.get('.btn-div > .btn-blue').click()
    //     // })

    //     it('edit profile', () => {
    //         cy.get('.edit-icon > #personalInfo').click()
    //         cy.get('#first_name_input')
    //             .clear()
    //             .type('cypress')

    //         cy.get('#last_name_input')
    //             .clear()
    //             .type('testing')

    //         cy.get('#city_of_residence_input')
    //             .clear()
    //             .type('Indore, Madhya Pradesh, India')

    //         cy.get('#short_description_input')
    //             .clear()
    //             .type('Nothing to commit')

    //         cy.get('#gender_girl_label > .checkbox-tile')
    //             .check({ force: true })

    //     })
    // })
})