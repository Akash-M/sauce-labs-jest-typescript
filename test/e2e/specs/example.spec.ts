import {Builder, By, Key, until, WebDriver} from 'selenium-webdriver';

import { e2eConfig } from '../config';
import { default as browserList } from '../browserList';

describe('Example e2e test', () => {
  const customTimeout = 10000;
  const customWait = 2000;
  let driver: WebDriver;
  const baseUrl: string = 'https://github.com/';

  browserList.forEach(browser => {
    const browserDetails = `${browser.platform} | ${browser.browserName} | ${browser.version}`;
    describe(`on browser : ${browserDetails}`, () => {
      beforeAll(async (done) => {
        jest.setTimeout(customTimeout);
        if (e2eConfig.e2eEnv === 'test_e2e') {
          const server = `http://${e2eConfig.sauceLabsUsername}:${e2eConfig.sauceLabsKey}@ondemand.saucelabs.com:80/wd/hub`;
          driver = new Builder().withCapabilities(browser).usingServer(server).build();
        } else {
          driver = new Builder().withCapabilities(browser).build();
        }
        await driver.manage().window().maximize();
        done();
      });

      test(`load ${baseUrl}`, async () => {
        await driver.get(baseUrl);
        await driver.wait(
          until.titleIs('The world’s leading software development platform · GitHub'),
          customWait,
        );
        expect(await driver.findElement(By.css('h1')).getText())
          .toBe('Built for developers');
      });

      test('search for saucelabs/sample-app-web through the search bar', async () => {
        const searchBar = await driver.findElement(By.xpath("//input[@placeholder='Search GitHub']"));
        await searchBar.sendKeys('saucelabs/sample-app-web');
        await searchBar.sendKeys(Key.ENTER);
        await driver.sleep(customWait);
      });

      test('navigate to saucelabs/sample-app-web', async () => {
        await driver.findElement(By.xpath("//a[contains(@href,'/saucelabs/sample-app-web')]")).click();
        await driver.sleep(customWait);
        const repoDescription = await driver.findElement(By.css("span.text-gray-dark")).getText();
        expect(repoDescription)
          .toBe('This is the Sauce Labs Sample Application which is designed to be used from desktop web browsers');
      });

      afterAll(async (done) => {
        await driver.quit();
        done();
      });
    });
  });
});
