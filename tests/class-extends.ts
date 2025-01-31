import { Page } from "@playwright/test";

class BasePage {
  //thuoc tinh
  page: Page;
  xpathDashboard = "#dashboard";

  //ham khoi tao
  constructor(page: Page) {
    this.page = page;
  }

  //method

  async navigateTo(url: string) {
    //code here
  }
}

class LoginPage extends BasePage {
  xpathDashboard = "#dashboard2";
  constructor(page: Page) {
    super(page);
  }
}
