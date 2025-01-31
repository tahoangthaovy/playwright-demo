import { test } from "@playwright/test";

test.describe("Hooks", async () => {
  test.beforeAll(async () => {
    console.log("Before all");
  });
  test.afterAll(async () => {
    console.log("After all");
  });
  test.beforeEach(async () => {
    console.log("Before each");
  });
  test.afterEach(async () => {
    console.log("After each");
  });

  test("Test 1", async ({}) => {
    console.log("Test 1");
  });

  test("Test 2", async ({}) => {
    console.log("Test 2");
  });
});
