describe('Postcode', () => {
    beforeEach(() => {
        cy.loginByAuth0Api()
    })

    it('should get geocode information based on a postcode', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/postcode/' + 'LS101DJ',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.exist;
            expect(response.body[0].id).to.exist;
            expect(response.body[0].reportCode).to.exist;
            expect(response.body[0].description).to.exist;
        });
    }); 
});