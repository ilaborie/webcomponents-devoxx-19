describe('Exo 2 - Timer', function () {
    it(`should elapsed time`, function () {
        cy.visit('http://localhost:8080/#1');

        cy.get('main-app hello-timer div')
            .should('have.text', '0');

        cy.wait(1500);

        cy.get('main-app hello-timer div')
            .should('have.text', '1');
    });
});