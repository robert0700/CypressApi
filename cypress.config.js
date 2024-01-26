const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://gorest.co.in/public/v2',
  },
    env: {
      apiToken: "acfa17fd9769179b52da8ae552a0140f612d2d4787160dff5c8816992474ae44"
    },
    numTestsKeptInMemory: 10,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  
});
