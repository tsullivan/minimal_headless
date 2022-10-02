import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: './headless_shell-linux_x64/headless_shell',
    userDataDir: 'userdata',
    args: [],
  });

  const page = await browser.newPage();

  page.on('console', (msg) => {
    const [text, type] = [msg.text(), msg.type()];
    console.log(`console-${type}`, text);
  });

  await page.goto('https://webglsamples.org/aquarium/aquarium.html', {
    waitUntil: 'load',
  });

  await page.screenshot({ path: 'aquarium.png' });

  await browser.close();
})();
