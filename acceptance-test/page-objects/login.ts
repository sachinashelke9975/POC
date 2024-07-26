import { Page } from "@playwright/test";
import { Locators } from "./locatorTypes";

export default class LoginPage {
  locators: Locators;
  constructor(public readonly page: Page) {
    this.locators = {
      username: this.page.locator("#email"),
      password: this.page.locator("#password"),
      logInButton: this.page.locator('#logIn').first(),
    };
  }
  async goto() {
    await this.page.goto("/");
  }

  async logIn(username: string, password: string) {
    await this.locators.username.fill(username);
    await this.locators.password.fill(password);
    await this.locators.logInButton.click();
  }
}