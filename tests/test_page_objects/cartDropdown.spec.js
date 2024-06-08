import { expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { HEADING_TEXT, PLACE_ORDER_TEXT, BASKET_TEXT} from "../../helpers/testDataCartDropdown.js";
import PopupShoppingCartWndowPage from "../../page_objects/pop-upShoppingCartWndow.js";
import { test, productInCart } from "../../fixtures/base.js";


test.describe('cartDropdown.spec', () => {

    test('TC  08.01.1 Verify that the  pop-up window contains the name of the "Товара додано в кошик"', async ({ page,productInCart }) => {

        const madalWindowPage = new PopupShoppingCartWndowPage(page);
        await expect(madalWindowPage.locators.getheadingPopap()).toBeVisible();
        await expect(madalWindowPage.locators.getheadingPopap()).toHaveText(HEADING_TEXT);
        await expect(madalWindowPage.locators.getheadingPopap()).toHaveCSS('background-color', 'rgb(157, 157, 157)')
    });
    test('TC 08.01.2  Verify that the  popup contains a photo of the product', async ({ page,productInCart }) => {

        const madalWindowPage = new PopupShoppingCartWndowPage(page);
        await expect(madalWindowPage.locators.getPhotoProduct()).toBeVisible();
    });
    test('TC 08.01.3  Verify that the  is a close "X" button in the pop-up window', async ({ page,productInCart }) => {

        const madalWindowPage = new PopupShoppingCartWndowPage(page);
        await expect(madalWindowPage.locators. getCloseButton()).toBeVisible();
    });

    test('TC 08.01.4  Verify that the product info is displayed in the pop-up window', async ({ page,productInCart }) => {

        const madalWindowPage = new PopupShoppingCartWndowPage(page);
        await expect(madalWindowPage.locators.getInfoProduct()).toBeVisible();
    });

    test('TC 08.01.5  Verify that the the total price of the product is displayed in the pop-up window', async ({ page,productInCart }) => {

        const madalWindowPage = new PopupShoppingCartWndowPage(page);
        await expect(madalWindowPage.locators.getTotalPrice()).toBeVisible();
    });

    test('TC 08.01.6  Verify that the"Оформить замовлення" button is displayed in the pop-up window', async ({ page,productInCart }) => {

        const madalWindowPage = new PopupShoppingCartWndowPage(page);
        await expect(madalWindowPage.locators.getCheckoutButton()).toBeVisible();
        await expect(madalWindowPage.locators.getCheckoutButton()).toHaveCSS('cursor', 'pointer');
        await expect(madalWindowPage.locators.getCheckoutButton()).toHaveText(PLACE_ORDER_TEXT);
    });

    // test('TC 08.01.7  Verify that the "Кошик" button is displayed in the pop-up window', async ({ page,productInCart }) => {

    //     const madalWindowPage = new PopupShoppingCartWndowPage(page);
    //     await expect(madalWindowPage.locators.getBacketButton()).toBeVisible();
    //     await expect(madalWindowPage.locators.getBacketButton()).toHaveCSS('cursor', 'pointer');
    //     await expect(madalWindowPage.locators.getBacketButton()).toHaveCSS('color', 'rgb(255, 255, 255)')
    //     await expect(madalWindowPage.locators.getBacketButton()).toHaveText(BASKET_TEXT);
    // });


    test('TC 08.01.8  Verify that the  user can close the popup by clicking on the close button "X"', async ({ page,productInCart }) => {

        const madalWindowPage = new PopupShoppingCartWndowPage(page);
        await madalWindowPage.clickCloseButton()
        await expect(madalWindowPage.locators. getheadingPopap()).not.toBeVisible();
    });





})