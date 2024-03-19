const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');

const Config = {
    followNewTab: true,
    fps: 60,
    videoFrame: {
      width: 1920,
      height: 1080,
    },
    videoCrf: 18,
    videoCodec: 'libx264',
    videoPreset: 'ultrafast',
    videoBitrate: 1000,
    aspectRatio: '16:9',
  };

(async () => {

    const browser = await puppeteer.launch({
        headless: true,
      });

    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    });

    const recorder = new PuppeteerScreenRecorder(page, Config);
    await page.goto('https://xprilion.com');
    await recorder.start('recordings/recording.webm');
    
    await new Promise(_func=> setTimeout(_func, 5000));
    
    await recorder.stop();
    await page.close();
    await browser.close();
})();
