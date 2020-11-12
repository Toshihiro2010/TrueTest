import wd from 'wd';


jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: "Android",
    // app: "../android/app/build/outputs/apk/prod/debug/app-prod-debug.apk"
    app: "/Users/patipanongarj/Bent/TrueTest/android/app/build/outputs/apk/prod/debug/app-prod-debug.apk"
};
const driver = wd.promiseChainRemote("localhost", PORT);


describe('Simple App testing', () => {
    beforeAll(async () => {
        await driver.init(config);
        await driver.sleep(3000);
    }) // Sometime for the app to load

    it("my first appium test", async () => {

        expect(await driver.hasElementByAccessibilityId('login')).toBe(true);
        const element = await driver.elementByAccessibilityId('login');
        await element.click()
        await driver.sleep(100);
        await expect(await driver.hasElementByAccessibilityId('loginstatus')).toBe(true);
        const textStauts = await driver.elementByAccessibilityId('loginstatus');
        const status = await textStauts.text();
        expect(status).toEqual('success');
    });
})



