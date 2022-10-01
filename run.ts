import * as puppeteer from 'puppeteer';

// Minimal puppeteer example

(async () => {
  const browser = await puppeteer.launch({
    executablePath: './headless_shell-linux_x64/headless_shell',
    userDataDir: 'userdata',
    args: [],
  });

  const page = await browser.newPage();
  await page.goto('https://webglsamples.org/aquarium/aquarium.html', { waitUntil: 'load' });

  // get gpu configuration
  await page.screenshot({ path: 'aquarium.png' });

  await browser.close();
})();
