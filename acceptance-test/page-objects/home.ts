import { Page } from "@playwright/test";
import { Locators } from "./locatorTypes";

export default class HomePage {
  locators: Locators;
  constructor(public readonly page: Page) {
    this.locators = {
      loginBtn: this.page.locator('[data-qa-id="login-select"]'),
      hudlBtn: this.page.locator('//span[text()="Hudl"]'),
      
    };
  }
  async goto() {
    await this.page.goto("/");

  }
}