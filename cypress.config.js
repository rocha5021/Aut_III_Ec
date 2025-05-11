const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    watchForFileChanges: true,
    defaultCommandTimeout: 8000,
    video: false,
    retries: 1,
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        launchOptions.args.push('--disable-web-security');
        return launchOptions;
      });
    },
  },
});
