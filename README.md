## E2E testing with SauceLabs + Jest + Typescript + selenium-webdriver

## Prerequisites
- Working `node.js` installation on your local machine.
- Account with [SauceLabs](https://saucelabs.com/) for for E2E testing along with [selenum-webdriver](https://www.seleniumhq.org/).

## Installation
- `npm i` in the root folder to install the dependencies in `node_modules`.

## Application Structure
- The test specs are present in `test/e2e/specs`.
- The list of browsers for testing on SauceLabs and testing locally is present in `test/browserList.ts`.
- Create a `.env` file in the root path based on the `.env.example` file and update the environment variables accordingly.
- To run the tests locally, we set the `E2E_TEST_ENV` to any value other than `test_e2e`. The browser list can be
    modified for local run by adjusting the `browserListLocal` constant in `browserList.ts` file. Additionally, we need
    to ensure the corresponding browser drivers are downloaded and set as part of the environment variables. For now,
    we test locally on Chrome and Firefox. (For chrome, it is the [chrome-driver](http://chromedriver.chromium.org/downloads)
    and for firefox it is the [geckodriver](https://github.com/mozilla/geckodriver/releases)).
    -  To run the tests on SauceLabs, we set the `E2E_TEST_ENV` to `test_e2e`. The browser list can be modified  
    by adjusting the `browserListSauceLabs` constant in `browserList.ts` file and by setting the corresponding properties.
    The browser config can be fetched from [here](https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/). Choose API as `Selenium`.
- Run the test specs by running the script `npm run test`
- Pass the `--runInBand` parameter for `jest` ensures the tests are run sequentially as it ensures the steps of the e2e tests are run in order.
