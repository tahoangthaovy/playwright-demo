import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
  // khai bao thuoc tinh  (xpath) dac trung cua LoginPage
  xpathUsername = "#username";
  xpathPassword = "#password";
  xpathBtnLogin = "#login";

  constructor(page: Page) {
    super(page);
  }

  //method dac trung cua LoginPage
  async navigateToLoginPage() {
    await this.navigateTo("url_login_page");
  }

  async fillUsername(username: string) {
    await this.page.locator(this.xpathUsername).fill(username);
  }
  async fillPassword(password: string) {
    await this.page.locator(this.xpathPassword).fill(password);
  }
  async clickBtnLogin() {
    await this.page.locator(this.xpathBtnLogin).click;
  }

  async logIn(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickBtnLogin();
  }
}
