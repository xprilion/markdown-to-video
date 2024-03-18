const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const recorder = new PuppeteerScreenRecorder(page);
    await page.goto('https://www.w3schools.com/css/tryit.asp?filename=trycss3_animation5');
    await recorder.start('recordings/recording.mp4'); // Specify the path and file name for the recording.
    
    await new Promise(_func=> setTimeout(_func, 5000));
    
    await recorder.stop();
    await browser.close();
})();
