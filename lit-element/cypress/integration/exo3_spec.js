describe('Exo 3 - Checkerboard', function () {
    it(`should display checkerboard`, function () {
        cy.visit('http://localhost:8080/#2');

        cy.get('main-app hello-checkerboard .checkerboard div:last-child')
            .should('have.text', '15');
    });

    it(`should be updated with size`, function () {
        cy.visit('http://localhost:8080/#2');

        cy.get('main-app hello-checkerboard')
            .then(cb => cb.attr('size', 2));

        cy.get('main-app hello-checkerboard .checkerboard div:last-child')
            .should('have.text', '3');
    });

    it(`should be updated with dark`, function () {
        cy.visit('http://localhost:8080/#2');

        cy.get('main-app hello-checkerboard')
            .then(cb => cb.attr('dark', '#663399')); // rebeccapurple

        cy.get('main-app hello-checkerboard .dark')
            .should(elt => {
                    const bg = getComputedStyle(elt.context).backgroundColor;
                    return expect(bg).equals('rgb(102, 51, 153)');
                }
            );
    });

    it(`should be updated with light`, function () {
        cy.visit('http://localhost:8080/#2');

        cy.get('main-app hello-checkerboard')
            .then(cb => cb.attr('light', '#663399')); // rebeccapurple

        cy.get('main-app hello-checkerboard .light')
            .should(elt => {
                    const bg = getComputedStyle(elt.context).backgroundColor;
                    return expect(bg).equals('rgb(102, 51, 153)');
                }
            );
    });
});