describe('Exo 6 - Slot', function () {

    it(`should display title`, function () {
        cy.visit('http://localhost:8080/#5');

        cy.get('main-app hello-users hello-card')
            .should(elt => {
                const title = elt.context.querySelector('[slot=title]').textContent;
                expect(title).equal('Luke Skywalker')
            });
    });

    it(`should display content`, function () {
        cy.visit('http://localhost:8080/#5');

        cy.get('main-app hello-users hello-card:nth-child(2)')
            .should(elt => {
                const title = elt.context.querySelector('[slot=content]').textContent;
                expect(title).match(/^Duis eleifend,/)
            });
    });

    it(`should display subtitle`, function () {
        cy.visit('http://localhost:8080/#5');

        cy.get('main-app hello-users hello-card:last-child')
            .should(elt => {
                const title = elt.context.querySelector('[slot=subtitle]').textContent;
                expect(title).equal('Alderaan')
            });
    });
});