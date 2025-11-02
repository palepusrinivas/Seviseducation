const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sevisedu.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/commands.js',
    
    // Viewport settings
    viewportWidth: 1920,
    viewportHeight: 1080,
    
    // Timeouts
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Retry configuration
    retries: {
      runMode: 2,
      openMode: 0
    },
    
    // Video and screenshot settings
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    
    // Reporter
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportPageTitle: 'Sevis Global Education - Test Report',
      embeddedScreenshots: true,
      inlineAssets: true
    },
    
    // Environment variables
    env: {
      coverage: false,
      codeCoverage: {
        url: 'https://sevisedu.com/__coverage__'
      }
    },
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      // Code coverage (if needed)
      // require('@cypress/code-coverage/task')(on, config);
      
      // Lighthouse audit
      on('task', {
        lighthouse: require('cypress-audit/src/task').lighthouse,
        pa11y: require('cypress-audit/src/task').pa11y
      });
      
      return config;
    },
  },
  
  // Component testing (optional)
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.js'
  }
});

