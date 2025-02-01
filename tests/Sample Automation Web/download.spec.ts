import { test } from "@playwright/test";

test("download simple", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/021-import-export.html");
  const downloadPromise = page.waitForEvent("download");
  await page.getByText("Export CSV").click();
  const download = await downloadPromise;
  await download.saveAs(
    "tests/Sample Automation Web/" + download.suggestedFilename()
  );
});

test("download trigger randomly", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/021-import-export.html");
  await page.on("download", (download) => {
    download.saveAs("tests/Sample Automation Web/file_random.csv");
  });
  await page.getByText("Random Export").click();
  await page.waitForTimeout(1000); //10 giây
});
