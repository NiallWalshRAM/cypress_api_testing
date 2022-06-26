describe('Location', () => {
    beforeEach(() => {
        cy.loginByAuth0Api()
    })

    it('should get all locations for a user', () => {
        cy.request({
            method: 'GET',
            url: 'v2/api/location',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.exist;
            expect(response.body[0].id).to.exist;
            expect(response.body[0].name).to.exist;
            expect(response.body[0].colour).to.exist;
            expect(response.body[0].coordinates).to.exist;
            expect(response.body[0].radius).to.exist;
        });
    });

    it('should get a location from a location ID', () => {
        cy.request({
            method: 'GET',
            url: 'v2/api/location/' + '1',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.exist;
            expect(response.body.id).to.exist;
            expect(response.body.name).to.exist;
            expect(response.body.colour).to.exist;
            expect(response.body.coordinates).to.exist;
            expect(response.body.radius).to.exist;
        });
    });

    it('should create a location', () => {
        cy.request({
            method: 'POST',
            url: 'v2/api/location/',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            },
            body: {
                name: 'Test By Cypress',
                category: null,
                colour: 'Dark Gray',
                coordinates: {
                    longitude: '1.01',
                    latitude: '-1.02'
                }
            }
          }).then(response => {
            expect(response.status).to.eq(201);
        });
    });
  });