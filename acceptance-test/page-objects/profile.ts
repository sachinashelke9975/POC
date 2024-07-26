import { Page } from "@playwright/test";
import { Locators } from "./locatorTypes";

export default class ProfilePage {
  locators: Locators;
  constructor(public readonly page: Page) {
    this.locators = {
      username: this.page.locator("#email"),
      password: this.page.locator("#password"),
      logInButton: this.page.locator('#logIn').first(),
    };
  }
  async hoverProfile() {
    await this.page.hover('.hui-globaluseritem');
    await this.page.waitForSelector('.hui-globaluseritem__email');
  }

  async getDisplayedEmail() {
    return await this.page.$eval('.hui-globaluseritem__email', el => el.textContent);
  }
}