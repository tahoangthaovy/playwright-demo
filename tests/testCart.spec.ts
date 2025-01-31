import { expect, test } from "@playwright/test";
import { ProductPage } from "../page/product-page";
import exp from "constants";

test("Product Page", async ({ page }) => {
  let productPage = new ProductPage(page);
  const arrayProducts = [
    {
      name: "Product 1",
      price: 10,
      quantity: 2,
    },
    {
      name: "Product 2",
      price: 20,
      quantity: 3,
    },
    {
      name: "Product 3",
      price: 30,
      quantity: 1,
    },
  ];
  await test.step("Truy cập trang Product Page", async () => {
    await productPage.goToProductPage();
  });

  await test.step("Thêm sản phẩm vào giỏ hàng", async () => {
    for (let i = 0; i < arrayProducts.length; i++) {
      await productPage.addProductToCart(
        arrayProducts[i].name,
        arrayProducts[i].quantity
      );
    }
  });

  await test.step("Kiểm tra số lượng sản phẩm tại giỏ hàng", async () => {
    for (let i = 0; i < arrayProducts.length; i++) {
      const actualQuantityProduct = (
        await productPage.getInfoProductInCart(arrayProducts[i].name)
      ).quantity;
      const expectQuantityProduct = arrayProducts[i].quantity;
      expect(actualQuantityProduct).toEqual(expectQuantityProduct.toString());
    }
  });

  await test.step("Kiểm tra tổng tiền tại giỏ hàng", async () => {
    for (let i = 0; i < arrayProducts.length; i++) {
      const actualTotalProduct = (
        await productPage.getInfoProductInCart(arrayProducts[i].name)
      ).total;
      const total = arrayProducts[i].quantity * arrayProducts[i].price;
      const expectTotalProduct = "$" + total.toFixed(2); //cộng chuỗi. toFixed(2) thêm 2 số 0 thập phân phía sau
      expect(actualTotalProduct).toEqual(expectTotalProduct);
    }
  });
});
