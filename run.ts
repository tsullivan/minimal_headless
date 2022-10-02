import * as puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: './headless_shell-linux_x64/headless_shell',
    userDataDir: 'userdata',
    args: [
      '--ozone-platform=drm',
    ],
  });

  const page = await browser.newPage();

  page.on('console', (msg) => {
    const [text, type] = [msg.text(), msg.type()];
    console.log(`console-${type}`, text);
  });

  page.on('error', (err) => {
    console.error(err);
  });

  await page.goto('https://webglsamples.org/aquarium/aquarium.html', {
    waitUntil: 'load',
  });

  // try to avoid capturing too soon
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // capture the page
  await page.screenshot({ path: 'aquarium.png' });

  await browser.close();
})();
