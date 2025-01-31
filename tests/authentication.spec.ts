import { test, expect } from "@playwright/test";

test.describe("AUTH - Authentication", async () => {
  let xpathUsername = "//input[id='user_login']";
  let xpathPassword = "//input[id='user_pass']";
  let xpathBtnLogIn = "//input[id='wp-submit']";
  let xpathErrorMsg = "//div[@id='login_error]";
  let xpathHeadingDashboard = "//h1[text()= 'Dashboard'";
  let xpathHeadingAtAGlance = "//h1[text()= 'At a Glance'";
  let xpathHeadingActivity = "//h1[text()= 'Activity'";
  const username = "k8-ruby";
  const password = "zi%$zl1IlK2zGhcQ2*A)2wKC";
  const passwordInvalid = "123456";

  test.beforeEach(async ({ page }) => {
    await test.step("Go to Login Page", async () => {
      await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin");
    });
  });
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("@AUTH_001 - Login Fail", async ({ page }) => {
    await test.step("Fill user name and password invalid", async () => {
      await page.locator(xpathUsername).fill(username);
      await page.locator(xpathPassword).fill(password);

      const actualUsername = await page.inputValue(xpathUsername);
      const actualPassword = await page.inputValue(xpathPassword);

      //verify Value
      expect(actualUsername).toBe(username);
      expect(actualPassword).toBe(passwordInvalid);
    });

    await test.step("Click btn Login", async () => {
      await page.click(xpathBtnLogIn);
      const isMsgVisible = await page.locator(xpathErrorMsg).isVisible();
    });
  });
});
