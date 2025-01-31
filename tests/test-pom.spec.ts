import { Expect, test } from "@playwright/test";
import { LoginPage } from "../page/login-page";
import { log } from "console";

test("Test-POM", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const username = "student";
  const password = "password";

  await test.step("Navigate to Login Page and Login", async () => {
    await loginPage.navigateToLoginPage();
    await loginPage.logIn(username, password);
    /*
    await loginPage.fillUsername(username);
    await loginPage.fillUsername(password);
    await loginPage.clickBtnLogin();
    */
  });
});
