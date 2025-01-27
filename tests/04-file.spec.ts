import { test } from "@playwright/test";

const registerPageUrl =
  "https://material.playwrightvn.com/01-xpath-register-page.html";

test("file, hover", async ({ page }) => {
  await page.goto(registerPageUrl);
  await page.locator("//input[@id='profile']").setInputFiles("chill.jpg");

  await page.locator("//div[@class='tooltip']").hover();
});
