describe('Vehicle', () => {
    beforeEach(() => {
        cy.loginByAuth0Api()
    })

    it('should get all vehicles for the account', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/vehicle',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.exist;
            expect(response.body[0].id).to.exist;
            expect(response.body[0].registration).to.exist;
            expect(response.body[0].vehicleType).to.exist;
            expect(response.body[0].label).to.exist;
            expect(response.body[0].iconColour).to.exist;
            expect(response.body[0].ignitionOn).to.exist;
            expect(response.body[0].idleStatus).to.exist;
            expect(response.body[0].driver).to.exist;
            expect(response.body[0].lastEvent).to.exist;
        });
    });

    it('should get vehicle based on ID', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/vehicle/' + '300000',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.exist;
            expect(response.body.id).to.exist;
            expect(response.body.registration).to.exist;
            expect(response.body.vehicleType).to.exist;
            expect(response.body.label).to.exist;
            expect(response.body.iconColour).to.exist;
            expect(response.body.ignitionOn).to.exist;
            expect(response.body.idleStatus).to.exist;
            expect(response.body.driver).to.exist;
            expect(response.body.lastEvent).to.exist;
        });
    });
});