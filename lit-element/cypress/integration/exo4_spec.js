describe('Exo 4 - Countdown', function () {

    it("should listen count attribute", function () {
        cy.visit('http://localhost:8080/#3');

        cy.get('main-app hello-countdown')
            .then(cb => cb.attr('count', '10'));

        cy.get('main-app hello-countdown input')
            .should('have.value', '10');
    });

    it(`should change state when running`, function () {
        cy.visit('http://localhost:8080/#3');

        cy.get('main-app hello-countdown')
            .then(cb => cb.attr('count', '2'));

        cy.get('main-app hello-countdown')
            .should(elt => {
                    const state = elt.context.state;
                    return expect(state).equals('idle');
                }
            );

        cy.get('main-app hello-countdown .idle button')
            .then(elt => elt.click());

        cy.get('main-app hello-countdown')
            .should(elt => {
                    const state = elt.context.state;
                    return expect(state).equals('run');
                }
            );

        cy.wait(2500);

        cy.get('main-app hello-countdown')
            .should(elt => {
                    const state = elt.context.state;
                    return expect(state).equals('done');
                }
            );
        //
        // cy.get('main-app hello-countdown .done button')
        //     .then(elt => elt.click());
        //
        // cy.get('main-app hello-countdown')
        //     .should(elt => {
        //             debugger;
        //             const state = elt.context.state;
        //             return expect(state).equals('idle');
        //         }
        //     );
    });

});