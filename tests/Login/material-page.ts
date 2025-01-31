import { Locator, Page } from "@playwright/test";

export class MaterialBasePage {
  page: Page;
  xpathRegisterPage: string;
  cssTodoPage: string;
  personalNote: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async openMaterialPage() {
    await this.page.goto("https://material.playwrightvn.com/");
  }

  async gotoPage(pageName: string) {
    await this.page.locator(`//a[contains(text(), '${pageName}')]`).click();
  }
}
