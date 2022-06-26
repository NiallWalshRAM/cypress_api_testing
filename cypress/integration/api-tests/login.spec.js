describe('Login', () => {
    it('should authenticate with the Mobile API', () => {
      cy.loginByAuth0Api()
        .then((resp) => {
            expect(resp.status).to.eq(200);
            expect(resp.body.access_token).to.exist;
            expect(resp.body.token_type).to.eq("bearer");
            expect(resp.body.refresh_token).to.exist;
            expect(resp.body.scope).to.exist;
            expect(resp.body.salesforceId).to.exist;
        })
    });
  });