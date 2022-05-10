Cypress.Commands.add('loginByAuth0Api', (providedUsername, providedPassword) => {
    Cypress.log({
      name: 'loginViaoAuth',
    });

    cy.request({
        method: 'POST',
        url: Cypress.env('oAuth_URL'),
        form: true, 
        body: { 
            "grant_type": "password",
            "username": providedUsername, 
            "password": providedPassword 
        },
        auth: {
            username: Cypress.env('client_id'),
            password: Cypress.env('client_secret')
        }
      }).then(response => {
        window.localStorage.setItem('oauth_response', JSON.stringify(response))
    });
});