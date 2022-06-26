const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:5001/',
        integrationFolder: 'cypress/integration/api-tests',
        video: false,
        testFiles: [
            'login.spec.js',
            'location.spec.js',
            'nearestVehicle.spec.js',
            'vehicle.spec.js',
            'reports.spec.js',
            'postcode.spec.js',
            'notifications.spec.js',
            'routeReplay.spec.js'
    ],

    env: {
        oAuth_URL: 'http://localhost:5001/oauth/token',
        client_id: 'mobile',
        client_secret: 'ram-mobile-api-2017',
        username: 'admin',
        password: '1234',


        diagnostic_imei: 101,
        dignostic_api_key: 'api_key=gibberish'
    }
  }
})