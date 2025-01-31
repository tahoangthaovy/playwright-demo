import { Page } from "@playwright/test";
import { MaterialBasePage } from "./material-page";

export class RegisterPage extends MaterialBasePage {
  xpathUsername = "//input[@id='username']";
  xpathEmail = "//input[@id='email']";
  xpathGenderMale = "//input[@id='male']";
  xpathGenderFemale = "//input[@id='female']";
  getXpathOptionHobby(hobby: "reading" | "traveling" | "cooking") {
    return `//input[@id='${hobby}']`;
  }
  xpathSelectInterest = "//select[@id='interests']";
  xpathSelectCountry = "//select [@id= 'country']";
  xpathDateOfBirth = " //input[@id='dob']";
  xpathProfilePicture = "//input[@id='profile']";
  xpathBiography = "//textarea[@id='bio']";
  xpathNewsletter = "//input[@id='newsletter']";
  xpathBtnRegister = "//button[contains(text(), 'Register')]";

  constructor(page: Page) {
    super(page);
  }

  async goToRegisterPage() {
    await this.openMaterialPage();
    await this.gotoPage("Register Page");
  }

  async fillUsername(username: string) {
    await this.page.locator(this.xpathUsername).fill(username);
  }

  async fillEmail(email: string) {
    await this.page.locator(this.xpathEmail).fill(email);
  }

  async checkGender(gender: "Male" | "Female") {
    if (gender == "Male") {
      await this.page.locator(this.xpathGenderMale).check();
    }
    if (gender == "Female") {
      await this.page.locator(this.xpathGenderFemale).check();
    }
  }
  async checkHobbies(hobby: "reading" | "traveling" | "cooking") {
    await this.page.locator(this.getXpathOptionHobby(hobby)).check();
  }

  async selectInterests(interestsValue: "technology" | "science" | "art") {
    await this.page.selectOption(this.xpathSelectInterest, interestsValue);
  }

  async selectCountry(countryValue: "usa" | "canada" | "uk" | "australia") {
    await this.page.selectOption(this.xpathSelectCountry, countryValue);
  }

  async fillDateOfBirth(date: string) {
    await this.page.locator(this.xpathDateOfBirth).fill(date);
  }
  async chooseFile(filePath: string) {
    await this.page.locator(this.xpathProfilePicture).setInputFiles(filePath);
  }

  async fillBiography(bio: string) {
    await this.page.locator(this.xpathBiography).fill(bio);
  }

  async checkNewsletter() {
    await this.page.locator(this.xpathNewsletter).check();
  }
  async clickBtnRegister() {
    await this.page.locator(this.xpathBtnRegister).click();
  }

  async fillFormRegister(information: {
    username: string;
    email: string;
    gender: "Male" | "Female";
    hobby: "reading" | "traveling" | "cooking";
    interestValue: "technology" | "science" | "art";
    countryValue: "usa" | "canada" | "uk" | "australia";
    date: string;
    filePath: string;
    bio: string;
  }) {
    await this.fillUsername(information.username);
    await this.fillEmail(information.email);
    await this.checkGender(information.gender);
    await this.checkHobbies(information.hobby);
    await this.selectInterests(information.interestValue);
    await this.selectCountry(information.countryValue);
    await this.fillDateOfBirth(information.date);
    await this.chooseFile(information.filePath);
    await this.fillBiography(information.bio);
    await this.clickBtnRegister();
  }

  async getInfoNewestInTable() {
    const numberOfRows = await this.page.locator("//tbody/tr").count(); //đếm
    //lấy info dòng mới nhất
    let userInfor = {
      username: await this.page
        .locator(`//tbody/tr[${numberOfRows}]/td[2]`)
        .textContent(),
      email: await this.page
        .locator(`//tbody/tr[${numberOfRows}]/td[3]`)
        .textContent(),
      information: await this.page
        .locator(`//tbody/tr[${numberOfRows}]/td[4]`)
        .textContent(),
    };
    return userInfor;
  }
}
