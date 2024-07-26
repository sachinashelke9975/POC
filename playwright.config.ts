import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './acceptance-test/tests/',
  retries: 1,
  workers: 1,
  reporter: [
    ['allure-playwright']
    // ['html']
  ],
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000"
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {  browserName: "chromium",
      trace: "on-first-retry",
      headless: false,
      screenshot: "only-on-failure",
      video: "retain-on-failure",
      //storageState: "acceptance-test/data/.auth/user.json",
      ...devices["Desktop Chrome"], },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
