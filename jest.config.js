module.exports = {
  moduleFileExtensions: ['js', 'ts'],
  testMatch: [
    '<rootDir>/test/e2e/specs/**/*.spec.ts',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^#/(.*)$': '<rootDir>/test/e2e/$1',
  },
};
