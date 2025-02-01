/*
import { test } from "@playwright/test";

test.describe("Handle dialog", async () => {
  test("Interact with dialog", async ({ page }) => {
    await test.step("Vào material playwright", async () => {
      await page.goto(
        "https://material.playwrightvn.com/03-xpath-todo-list.html"
      );
    });

    await test.step("Thêm mới todo item", async () => {
      await page.locator(xpath().newTaskField).fill(`Todo 1`);
      await page.locator(xpath().buttonAddTask).click();

      await test.step("Xoá todo item", async () => {
        page.once("dialog", async (dialog) => {
          await page.waitForTimeout(1000);
          await dialog.accept();
        });
        await page.locator(xpath(1).buttonDeleteTask).click();
      });
    });
  });

  test("Interact with random dialog", async ({ page }) => {
    await test.step("Vào material playwright", async () => {
      await page.goto(
        "https://material.playwrightvn.com/025-page-with-random-dialog.html"
      );
    });

    //page.on từ giờ trở đi khi dialog được khai báo thì bất kỳ dialog nào xuất hiện, đều accept
    //multiple dialogs
    await test.step("Accept Dialog", async () => {
      page.on(`dialog`, async (dialog) => {
        await dialog.accept();
      });
      await expect(page.locator(xpath().greetingMessage)).toBeVisible();
    });
  });
});
*/
