# POC

## Description

This project is a test automation suite using Playwright and Allure for reporting. It follows the Page Object Model (POM) design pattern for better code maintainability and readability.

## Installation

Before you start, make sure you have Node.js and npm installed on your machine.

1. Clone the repository (git clone)
2. Navigate to the project directory. (cd)
3. Install the dependencies (npm install)
4. If you need to run without report (In playwright config comment out html report under report section, It willgenerate reportin html)
    npx playwright test
5. If you need allure report then run
    npx playwright test --reporter=allure-playwright
    allure generate allure-results -o allure-report --clean
    allure open allure-report
