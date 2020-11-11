exports.config = {
    services: ['appium'],
    appium: { command: 'appium' },
    runner: 'local',
    port: 4723,
    specs: [
        './test/*.js'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        acceptInsecureCerts: true,
        platformName: 'Android',
        platformVersion: '7.1.1',
        // deviceName: 'Nexus 5X API 25',
        app: '../android/app/build/outputs/apk/prod/debug/app-prod-debug.apk',
        automationName: 'UiAutomator2'
    }],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    // services: ['chromedriver', 'appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
