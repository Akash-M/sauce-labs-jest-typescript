import { e2eConfig } from './config';

export interface BrowserType {
  browserName: string;
  platform?: string;
  version?: string;
  screenResolution?: string;
}

let browserList: BrowserType[];

if (e2eConfig.e2eEnv !== 'test_e2e') {
  browserList = [{
    browserName: 'firefox',
    platform: 'xyz',
    version: 'x.y.z'
  }, {
    browserName: 'chrome',
    platform: 'xyz',
    version: 'x.y.z'
  }];
} else {
  browserList = [{
    browserName: 'firefox',
    platform: 'Windows 10',
    version: '66.0',
    screenResolution: '1920x1080'
  }, {
    browserName: 'firefox',
    platform: 'macOS 10.14',
    version: '66.0',
    screenResolution: '1920x1440'
  }, {
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '71.0',
    screenResolution: '1920x1080'
  }, {
    browserName: 'chrome',
    platform: 'macOS 10.14',
    version: '71.0',
    screenResolution: '1920x1440'
  }, {
    browserName: 'safari',
    platform: 'macOS 10.14',
    version: '12.0',
    screenResolution: '1920x1440'
  }];
}

export default browserList;
