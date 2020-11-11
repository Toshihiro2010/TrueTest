var expect = require('chai').expect;

const delay = (ms) => new Promise(res => setTimeout(() => { res() }, ms))

describe('Simple App testing', async () => {

    beforeEach(() => {
        $("~app-root").waitForDisplayed(11000, false)
    });

    it('Valid Login Test', async => {
        $("~login").click();
        let a = 1
        expect(1).to.equal(a);
    });

    it('Invalid Login Test', async => {

        const btnLogin = $("~login");
        btnLogin.click()

        const textStatus = $("~loginstatus");
        textStatus.waitForDisplayed(11000);

        const status = textStatus.getText();

        expect(status).to.equal('success');
    });
});