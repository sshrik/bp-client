import { exec } from 'child_process'
import puppeteer from 'puppeteer'

(async () => {
  const localProcess = exec('yarn dev');

  const browser = await puppeteer.launch({ headless: true });
  const page  = await browser.newPage();

  await page.setViewport({ width: 3840, height: 1620 });

  await page.goto('https://github.com/sshrik');
  await page.screenshot({ path: 'preview.png' });
  
  await browser.close();
  localProcess.kill();
})();