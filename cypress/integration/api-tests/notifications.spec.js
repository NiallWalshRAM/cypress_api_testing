describe('Notifications', () => {
    beforeEach(() => {
        cy.loginByAuth0Api()
    })

    it('should get all notifications for the account', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/notification',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body[0]).to.exist;
            expect(response.body[0].id).to.exist;
            expect(response.body[0].important).to.exist;
            expect(response.body[0].subject).to.exist;
            expect(response.body[0].body).to.exist;
            expect(response.body[0].validTo).to.exist;
            expect(response.body[0].createdAt).to.exist;
        });
    }); 
});