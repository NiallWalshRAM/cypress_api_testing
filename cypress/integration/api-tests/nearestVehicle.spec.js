describe('Nearest Vehicle', () => {
    beforeEach(() => {
        cy.loginByAuth0Api()
    })

    it('should get nearest vehicle to a geopoint', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/vehicle/nearest/point?',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            },
            qs: {
                'latitude': '53.123456',
                'longitude': '-1.12345'
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.exist;
            expect(response.body[0].distanceKm).to.exist;
            expect(response.body[0].vehicle).to.exist;
        });
    });

    it('should get nearest vehicle to a postcode', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/vehicle/nearest/postcode?',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            },
            qs: {
                'countryiso': 'GB',
                'postcode': 'LS101DJ'
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.exist;
            expect(response.body[0].distanceKm).to.exist;
            expect(response.body[0].vehicle).to.exist;
        });
    });

    it('should get nearest vehicle to another vehicle', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/vehicle/nearest/vehicle?',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            },
            qs: {
                'vehicleId': '300000'
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.exist;
            expect(response.body[0].distanceKm).to.exist;
            expect(response.body[0].vehicle).to.exist;
        });
    });
  });