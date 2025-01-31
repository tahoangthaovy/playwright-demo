import { expect, test } from "@playwright/test";
import { RegisterPage } from "./register-page";

let date = "2025-01-31";
let username = "Playwright Viet Nam";
let email = "playwrightvietnam@gmail.com";
let description = "This is Playwright class";

test("Exercise 1: Register Page", async ({ page }) => {
  let registerPage = new RegisterPage(page);

  await test.step("Truy cập Register Page", async () => {
    await registerPage.goToRegisterPage();
  });

  await test.step("Nhập đầy đủ thông tin, click vào button Register", async () => {
    //fill info
    await registerPage.fillUsername(username);
    await registerPage.fillEmail(email);
    await registerPage.checkGender("Female");
    await registerPage.checkHobbies("cooking");
    await registerPage.selectCountry("usa");
    await registerPage.chooseFile("chill.jpg");
    await registerPage.fillDateOfBirth(date);
    await registerPage.fillBiography(description);
    await registerPage.checkNewsletter();

    //click button register
    await registerPage.clickBtnRegister();
  });

  await test.step("Kiểm tra nội dung đã đăng ký ở bảng là đúng", async () => {
    const userInfo = await registerPage.getInfoNewestInTable();
    const actualUsername = userInfo.username;
    const actualEmail = userInfo.email;
    const actualInformation = userInfo.information;

    //verify username
    expect(actualUsername).toBe(username);

    //verify email
    expect(actualEmail).toBe(email);

    //verify Information
    expect(actualInformation).toContain("female");
    expect(actualInformation).toContain("cooking");
    expect(actualInformation).toContain("usa");
    expect(actualInformation).toContain(date);
    expect(actualInformation).toContain(description);
    expect(actualInformation).toContain("Yes");
  });
});
