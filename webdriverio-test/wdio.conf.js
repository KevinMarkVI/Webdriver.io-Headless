exports.config = {

    runner: 'local',
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    headless: true,
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 10,

    capabilities: [{browserName: 'chrome', platformName: 'Linux', browserVersion: 'latest', 'sauce:options': {'seleniumVersion': '3.14.0'}},],
    logLevel: 'silent',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ['sauce'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
