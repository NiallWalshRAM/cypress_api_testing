Cypress.Commands.add('loginByAuth0Api', () => {
    Cypress.log({
      name: 'Logging in with oAuth',
    });

    cy.request({
        method: 'POST',
        url: Cypress.env('oAuth_URL'),
        form: true, 
        body: { 
            "grant_type": "password",
            "username": Cypress.env('username'), 
            "password": Cypress.env('password') 
        },
        auth: {
            username: Cypress.env('client_id'),
            password: Cypress.env('client_secret')
        }
      }).then(response => {
        window.localStorage.setItem('access_token', response.body.access_token)
        return response;
    });
});