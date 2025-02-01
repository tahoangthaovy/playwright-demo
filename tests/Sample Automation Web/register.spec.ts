import { test } from "@playwright/test";

//chỉ là cú pháp, chưa phải xpath thực tế
test("Register", async ({ page }) => {
  //navigate to the Register page
  await page.goto("url");
  // fill username, email
  await page.locator("xpath username").fill("playwright");
  await page.locator("xpath email").fill("vy@gmail.com");

  //check gender, hobbies
  await page.locator("xpath gender").check();
  await page.locator("xpath hobbies").check();
  await page.locator("xpath gender").uncheck();

  //select country
  await page.selectOption("xpath select", "chosenValue");

  //date
  await page.locator("xpath date").fill("2025-01-02");

  //select file
  await page.locator("").setInputFiles("file path");

  //fill bio
  await page.locator("xpath bio").fill("bio text");

  //click button Register
  await page.locator("xpath button").click();
});

test("Verify Click", async ({ page }) => {
  await page.goto("url");
  //click 1 lan
  await page.locator("xpath").click();
  //db click
  await page.locator("xpath").dblclick();
  //shift click
  await page.locator("xpath").click({
    modifiers: ["Shift"],
  });
});
