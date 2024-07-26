import { test as base } from "@playwright/test";
import AppPages from "./applicationPages";
import 'dotenv/config'


type MyFixtures = {
  appPages: AppPages
}

export const test = base.extend<MyFixtures>({
    appPages: async ({ page }, use) => {
      const allAppPages = new AppPages(page);
      await page.goto(process.env.BASE_URL!);
      use(allAppPages);
    }
  });