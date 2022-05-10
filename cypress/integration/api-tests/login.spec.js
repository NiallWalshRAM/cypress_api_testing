describe('login', () => {
    it('should successfully log into our app', () => {
      cy.loginByAuth0Api(Cypress.env('username'), Cypress.env('password'))
        .then((resp) => {
            expect(resp.status).to.eq(200);
          return resp.body;
        })
        .then((body) => {
          console.log(body);
        })
    });
  });