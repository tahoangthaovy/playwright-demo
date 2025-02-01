import { test, expect } from "@playwright/test";

test("Visual test", async ({ page }) => {
  const adBlock = page.locator("//div[@id='ads-here']");
  await page.goto("https://material.playwrightvn.com/");
  await expect(page).toHaveScreenshot("homepage-with-mask.png", {
    mask: [adBlock],
    //dùng mask để che đi phần trên web để không so sánh
  });
});

//terminal
//npx playwright test -g "Visual test" --update-snapshots
