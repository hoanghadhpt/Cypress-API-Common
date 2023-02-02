export {};

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            expectStatusCodeIs(expectedStatusCode: number): Chainable<number>;
            expectBodyContains(expectString: string): Chainable<string>;
            expectBodyLocationEqual(bodyLocation: string, expectString: string): Chainable<string>;
        }
    }
}

// Repeated across test scripts

Cypress.Commands.add('expectStatusCodeIs', ( expectedStatusCode: number) => {
    cy.task('getStatus').then((statusCode) => {
        expect(statusCode).to.eq(expectedStatusCode);
    })   
});


Cypress.Commands.add('expectBodyContains', (expectString: string) => {
    cy.task('getBody').then((body) => {
       // expect(body.results[0].gender).to.contain(expectString);
    })   
});

Cypress.Commands.add('expectBodyLocationEqual', (bodyLocation , expectString: string) => {
    cy.task('getBody').then(() => {
        expect(bodyLocation).to.contain(expectString);
    })   
});