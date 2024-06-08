import { test as base } from "@playwright/test";
import CatalogPage from "../page_objects/catalogPage";
import PopupShoppingCartWndowPage from "../page_objects/pop-upShoppingCartWndow";
import QuiltedJacketPage from "../page_objects/guiltedJacket";
import HomePage from "../page_objects/homePage";


export const test = base.extend({
    addProductCard: [
        async ({ page }, use) => {


            const homePage = new HomePage(page);

            await homePage.open();
            await homePage.clickCatalogBlackBtn();

            const catalogPage = new CatalogPage(page);
            await catalogPage.clickJacketBasic();
            await page.waitForTimeout(2000);
            const jacketPage = new QuiltedJacketPage(page);
            await jacketPage.clickSizeLButton();
            await jacketPage.clickCartButton();
            const madalWindowPage = new PopupShoppingCartWndowPage(page)
            await madalWindowPage.clickCheckoutButton();
            await page.waitForTimeout(2000);

            await use("");
        },
        { scope: "test" },
    ],

    openProductCart: [
        async ({ page }, use) => {


            const homePage = new HomePage(page);
            await homePage.open();
            await homePage.clickOpenProductCart();

            await use("");
        },
        { scope: "test" },
    ],

    productInCart: [
        async ({ page }, use) => {


            const homePage = new HomePage(page);
            await homePage.open();
            await homePage.clickCatalogBlackBtn();

            const catalogPage = new CatalogPage(page);
            await catalogPage.clickNewJacket();
            await page.waitForTimeout(2000);
            const jacketPage = new QuiltedJacketPage(page);
            await jacketPage.clickSizeLButton();
            await jacketPage.clickCartButton();

            await use("");
        },
        { scope: "test" },
    ],

	 productInTheShoppingCart: [
		async ({ page }, use) => {


			 const homePage = new HomePage(page);
			 await homePage.open();
			 const productPage = await homePage.clickOpenProductCart();
			 await productPage.clickSizeSelectionBlockBtn();
			 await productPage.clickAddToCartBtn();
			 await productPage.clickCartBtn();


			 await use("");
		},
		{ scope: "test" },
  ],

})
