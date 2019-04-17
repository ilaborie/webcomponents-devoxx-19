describe('Exo 5 - Shadow DOM', function () {

    it(`should have a sunny background`, function () {
        cy.visit('http://localhost:8080/#4');

        cy.get('main-app hello-sun blockquote')
            .should(elt => {
                    const bg = getComputedStyle(elt.context).backgroundImage;
                    return expect(bg).equals(`url("http://localhost:8080/assets/sun.jpg")`);
                }
            );
    });
});