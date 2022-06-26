describe('Vehicle', () => {
    beforeEach(() => {
        cy.loginByAuth0Api()
    })

    it('should get all report types', () => {
        cy.request({
            method: 'GET',
            url: '/v2/api/reporting/available',
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

    it('should generate report', () => {
        cy.request({
            method: 'POST',
            url: '/v2/api/reporting/generate-report-sync',
            headers:{
                Authorization: 'Bearer ' + window.localStorage.getItem('access_token'),
            },
            body: {
                report_type: 'TRAVEL_REPORT',
                from: '2022-06-14',
                to: '2022-06-14',
                vehicle_id: '300004'
            }
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.exist;
            expect(response.body.success).to.eq(true);
            expect(response.body.link).to.exist;
            expect(response.body.errorMessage).to.be.null;
        });
    });
});