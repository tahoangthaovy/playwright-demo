import { test } from "@playwright/test";

test("Basic function", async ({ page }) => {
  await page.goto("https://www.opencolleges.edu.au/");

  //single click
  //await page.locator("//div[@class='hero-banner__button__wrapper']").click();

  //double click
  //await page.locator("//div[@class='hero-banner__button__wrapper']").dblclick();

  //right click: click chuột phải
  /*await page.locator("//div[@class='hero-banner__button__wrapper']").click({
    button: "right",
  });
  */
  //right click and do sth more: click chuột phải kèm bấm phím khác
  await page.locator("//div[@class='hero-banner__button__wrapper']").click({
    modifiers: ["Shift"],
  });
});

test("Basic Input", async ({ page }) => {
  await page.goto("https://www.opencolleges.edu.au/pages/contact");

  //await page.locator("//input[@id='ContactForm-first_name'] ").fill("Vy Test");
  //xpath //*[@id="ContactForm-first_name"]
  //fill = paste
  //pressSequentially = gõ từ từ
  await page
    .locator("//input[@id='ContactForm-first_name'] ")
    .pressSequentially("Vy Test");
});

test("Check Box", async ({ page }) => {
  /*
  //Check radio (1 trong n)
  await page.locator("").check();
*/
  //Check checkbox (multiple choices)
  await page.goto(
    "https://www.opencolleges.edu.au/collections/health-community"
  );
  await page.locator("//input[@id='Filter-filter.p.product_type-1']").check();
  //*[@id="Filter-filter.p.product_type-1"]
  await page
    .locator("//input[@id='Filter-filter.p.m.custom.course_qualification-1']")
    .check();
  //*[@id="Filter-filter.p.m.custom.course_qualification-1"]
  //Uncheck  checkbox
  await page
    .locator("//input[@id='Filter-filter.p.m.custom.course_qualification-1']")
    .uncheck();
  //Get check status?
  const isCheck = await page
    .locator("//input[@id='Filter-filter.p.product_type-1']")
    .isChecked();
});
//*[@id="ContactForm-select"]

//Select one from dropdown
test("Select", async ({ page }) => {
  await page.goto("https://www.opencolleges.edu.au/pages/contact");
  await page
    .locator("//select[@id='ContactForm-select']")
    .selectOption("0-3 months");
});

/*
//Select multples from dropdown
await page
  .locator("//select[@id='ContactForm-select']")
  .selectOption(["0-3 months","Now"]);
*/

//Select Date picker
test("date", async ({ page }) => {
  await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
  ////*[@id="datepicker"]
  await page.locator("//input[@id='datepicker']").fill("2024-02-12");
});
