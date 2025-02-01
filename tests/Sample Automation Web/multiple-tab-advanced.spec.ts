import { test } from "@playwright/test";

test.describe("Multiple tab", async () => {
  test("Handle multiple tab showed randomly", async ({ page }) => {
    //go to url
    await page.goto(
      "https://material.playwrightvn.com/021-page-random-open-new-page.html"
    );
    //wait page is opened
    const newPage = await page.waitForEvent("popup");
    await newPage.click("//*[@id='registerBtn']");
  });

  test("Handle multiple tab showed when click button ", async ({ page }) => {
    await test.step("Open the main tab", async () => {
      // go to url
      await page.goto("https://material.playwrightvn.com/023-target-page.html");
      // wait page is opened
      // Promise All trả về khi cả 2 event đều trả về True
      const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click(`//button[text()='Go to register page']`),
      ]);
      // click to the buttn Register on the new page
    });
  });
});
