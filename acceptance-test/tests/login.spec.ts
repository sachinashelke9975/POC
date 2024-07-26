import { test } from "../setup";
import dotenv from "dotenv";
import { expect } from "@playwright/test";
dotenv.config();

test.describe("Successfully Logged In Verification ", async () => {
  test("Login", async ({ appPages }) => {
    const email = process.env.INITIAL_USER;
    const password = process.env.INITIAL_USER_PASSWORD;

    await appPages.homePage.locators.loginBtn.click();
    await appPages.homePage.locators.hudlBtn.click();

    if (!email || !password) {
      throw new Error("Email and password must be provided in .env file");
    }
    await appPages.loginPage.logIn(email, password!);
    await appPages.profilePage.hoverProfile();
    const displayedEmail = await appPages.profilePage.getDisplayedEmail();
    expect(displayedEmail).toBe(email);
  });
});
