describe('Exo 1 - Hello World', function () {
    it(`should display 'Hello World!'`, function () {
        cy.visit('http://localhost:8080/#0');

        cy.get('main-app hello-world div')
            .should('have.text', 'Hello World!');
    });
});