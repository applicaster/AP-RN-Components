module.exports = variables => ({
  name: `@ap-rn-components/${variables.packageName}`,
  version: variables.version || "0.0.1",
  description: variables.packageDescription,
  main: `${variables.packageName}`,
  scripts: {
    fmt: "prettier --write '**/*.*'",
    "prettier:diff": "prettier --list-different '**/*.*'",
    lint: "eslint . && npm run prettier:diff",
    "test:android": "jest --config='./__tests__/android/jest.config.js'",
    "test:ios": "jest --config='./__tests__/ios/jest.config.js'",
    "test:web": "jest --config='./__tests__/web/jest.config.js'",
    "test:all":
      "yarn test:android --coverage & yarn test:ios --coverage & yarn test:web --coverage",
    "dextrose-stories": "dextrose generate-stories $(pwd)",
    "dextrose-clean": "dextrose clean-stories $(pwd)"
  },
  repository: {
    type: "git",
    url: "git+https://github.com/applicaster/ap-rn-components.git"
  },
  keywords: [
    "react-native-web",
    "react",
    "native",
    "web",
    variables.packageName,
    "component"
  ],
  license: "BSD-3-Clause",
  bugs: {
    url: "https://github.com/applicaster/ap-rn-components/issues"
  },
  homepage: "https://github.com/applicaster/ap-rn-components#readme",
  devDependencies: {
    "@storybook/react-native": "3.3.15",
    "@ap-rn-components/jest-configurator": "*",
    eslint: "4.9.0",
    jest: "21.2.1",
    prettier: "1.8.2",
    react: "16.2.0",
    "react-dom": "16.2.0",
    "react-native": "0.53.3",
    "react-test-renderer": "16.2.0"
  },
  dependencies: {
    "prop-types": "15.6.0"
  },
  peerDependencies: {
    react: ">=16",
    "react-dom": ">=16",
    "react-native": ">=0.50",
    "react-native-web": ">=0.1"
  },
  publishConfig: {
    access: "public"
  }
});
