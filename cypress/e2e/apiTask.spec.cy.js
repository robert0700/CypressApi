import { faker } from "@faker-js/faker";

let requestBody = require("../fixtures/data.json")



describe('Create new user', () => {

  it('Create user with random name and email', () => {
    requestBody.name = faker.person.firstName('male') + " " + faker.person.lastName('male')
    requestBody.email = faker.internet.email()
    cy.createNewUser(requestBody)
  });

  
});



describe('Retrieve User Test', () => {

  before(() => {
    requestBody.name = faker.person.firstName('male') + " " + faker.person.lastName('male')
    requestBody.email = faker.internet.email()
    cy.createNewUser(requestBody)
  });

  it('Fetch the user by their ID', () => {
    cy.fetchUserById(requestBody)
  });
});


describe('Delete User Test', () => {

  before(() => {
    requestBody.name = faker.person.firstName('male') + " " + faker.person.lastName('male')
    requestBody.email = faker.internet.email()
    cy.createNewUser(requestBody)
    });

  it('Delete the user by their ID', () => {
    cy.deleteUser(requestBody)
  });
});

