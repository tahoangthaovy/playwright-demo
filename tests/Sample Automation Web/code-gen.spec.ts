import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.getByRole("link", { name: "Bài học 2: Product page" }).click();
  await page.getByRole("button", { name: "Add to Cart" }).first().click();
  await page.getByRole("button", { name: "Add to Cart" }).nth(1).click();
  await page.getByRole("button", { name: "Add to Cart" }).nth(2).click();
  await page
    .getByRole("row", { name: "Product 2 $20.00 1 $20.00" })
    .getByRole("button")
    .click();
});
