import { test } from "@playwright/test";

//Trang xu ly mouse: https://material.playwrightvn.com/018-mouse.html

test("Multiple tabs", async ({ page }) => {
  const xpathClickArea = "//div[@id='clickArea']";
  const urlMouse = "https://material.playwrightvn.com/018-mouse.html";
  await page.goto(urlMouse);
  await page.click(xpathClickArea);

  const page2 = await page.context().newPage();
  page2.goto(urlMouse);
  await page2.dblclick(xpathClickArea);
});
