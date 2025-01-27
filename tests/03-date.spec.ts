import { test } from "@playwright/test";

const registerPageUrl =
  "https://material.playwrightvn.com/01-xpath-register-page.html";

test("date picker, slider, color picker", async ({ page }) => {
  await page.goto(registerPageUrl);
  await page.locator("//input[@id='dob']").fill("2025-01-28");
  await page.locator("//input[@id='rating']").fill("3");
  await page.locator("//input[@id='favcolor']").fill("#d534b8");
});
