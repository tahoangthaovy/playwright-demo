import { test } from "@playwright/test";

test.describe("Suite 1", async () => {
  test("test 1", async ({ page }) => {
    await test.step("Step 1: Navigate to the website", async () => {});

    await test.step("Step 2: Click button", async () => {});
  });

  test("test 2", async ({ page }) => {
    await test.step("Step 1: Navigate to the website", async () => {});

    await test.step("Step 2: Click button", async () => {});
  });
});
