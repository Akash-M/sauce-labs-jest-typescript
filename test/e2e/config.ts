import { cleanEnv, str, url } from 'envalid';

const validators = {
  E2E_TEST_ENV: str(),
  E2E_TEST_URL: url(),
  SAUCELABS_USERNAME: str(),
  SAUCELABS_KEY: str(),
};
const options = { strict: true };

const env = cleanEnv(process.env, validators, options);

export const e2eConfig = {
  e2eEnv: env.E2E_TEST_ENV,
  testUrl: env.E2E_TEST_URL,
  sauceLabsUsername: env.SAUCELABS_USERNAME,
  sauceLabsKey: env.SAUCELABS_KEY,
};
