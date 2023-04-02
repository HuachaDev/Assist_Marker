
const express = require('express');
const router = express.Router();
const puppeteer = require('puppeteer');
const user = "luis.huachallanqui";
const password = "luis.huachallanqui";
const entrace = "ENTRADA";
const exit="SALIDA"; 

router.get('/entrance', async (req, res) => {
    await attendance(entrace);
    res.send('Checked entry');
    //process.exit(1);
});


router.get('/exit', async (req, res) => {
    await attendance(exit);
    res.send('Exit marked');
    //process.exit(1);
});


async function attendance(text){
    //Windows
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage();

    await page.goto('http://time.ibusplus.com/');
    await page.type('#username',user);
    await page.type('#password',password);
    
    const btnLogin = await page.waitForSelector('#btnLogin');
    await btnLogin.click(); 

    const btnActionWorkSession = await page.waitForSelector('#actionWorkSession');
    await btnActionWorkSession.click();
    
    await page.type('#descriptionSession',text);
    const btnSi = await page.waitForSelector('#btnsi');
    await btnSi.click(); 
    await browser.close();

    /*Linux
    const browser = await puppeteer.launch({  headless: false,
        executablePath : '/usr/bin/google-chrome' ,
    args: [
        '--no-sandbox',
        '--start-maximized'
    ],
    ignoreHTTPSErrors: true});
    //"puppeteer": "^17.1.3"
    */
}

module.exports = router;