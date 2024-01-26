// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("createNewUser", (data) => {
    cy.request({
        method: 'POST',
        url: Cypress.config("baseUrl") +  '/users',
        headers: {
          Authorization: `Bearer ${Cypress.env("apiToken")}`
        },
        body: data
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(201);
        expect(response.body.name).to.eq(data.name);
        expect(response.body.email).to.eq(data.email);
        data.id = response.body.id
      });
})

Cypress.Commands.add("fetchUserById", (data) => {
    cy.request({
        method: 'GET',
        url: `${Cypress.config("baseUrl")}/users/${data.id}`,
        headers: {
            Authorization: `Bearer ${Cypress.env('apiToken')}`
          }
      }).then((response) => {
      
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(data.id);
        expect(response.body.name).to.eq(data.name);
        expect(response.body.email).to.eq(data.email);
      });
})

Cypress.Commands.add("deleteUser", (data) => {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.config('baseUrl')}/users/${data.id}`,
        headers: {
          Authorization: `Bearer ${Cypress.env('apiToken')}`
        }
      }).then((response) => {
       
        expect(response.status).to.eq(204);
      });
})