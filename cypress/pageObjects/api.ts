export const apiRequest = new class apiRequest {
    // GET method without params

    getMethod(url:string){
        cy.request(url).then((res) => {
            cy.wrap(res.status).as('status');
            cy.wrap(res.headers).as('headers');
            cy.wrap(res.body).as('body');
            cy.task("setStatus", res.status);
            cy.task("setBody", res.body);
        }).as('req');
            
    }
}