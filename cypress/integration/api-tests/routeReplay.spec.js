describe('Route Replay', () => {
    beforeEach(() => {
        cy.loginByAuth0Api()
    })

    it('should get a route replay for a vehicle, based on a to and from datetime', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/route?',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            },
            qs: {
                from: '2022-06-14T00:00:00Z',
                to: '2022-06-14T23:59:59Z',
                vehicle_id: '300004'
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.exist;
            expect(response.body[0].vehicleId).to.eq(300004);
            expect(response.body[0].events[0].address).to.exist;
            expect(response.body[0].events[0].direction).to.exist;
            expect(response.body[0].events[0].eventDateTime).to.exist;
            expect(response.body[0].events[0].eventName).to.exist;
            expect(response.body[0].events[0].geoLocation).to.exist;
            expect(response.body[0].events[0].heading).to.exist;
            expect(response.body[0].events[0].speedKph).to.exist;
        });
    }); 
});