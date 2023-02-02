import { apiRequest } from '../pageObjects/api';


describe('template spec', () => {
  it('Create a request to server', () => {
    apiRequest.getMethod(Cypress.env('endpointURL'));
  })

  it('Expect Status code should be 200',()=>{
    cy.expectStatusCodeIs(200);
  })

  it('Expect body contain id',()=>{
    cy.expectBodyContains('male');
  })

  it('Expect body location is ',()=>{
    cy.expectBodyContains('male');
  })

})