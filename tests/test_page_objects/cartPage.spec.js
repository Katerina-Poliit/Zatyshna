import { expect } from "@playwright/test";
import { CART_BREADCRUMBS_TEXT, CART_URL, LIST_HEADERS, PRODUCT_NAME_TEXT, PRODUCT_SIZE_TEXT, PRODUCT_COLOR_TEXT, PRODUCT_PRICE_TEXT, MESSAGE_TEXT, MESSAGE_LINK_TEXT, CATALOG_PAGE_BREADCRUMBS_TEXT, CATALOG_URL, CLEAN_CART_LINK_TEXT, TOTAL_PURCHASE_AMOUNT_TEXT, RAZOM_HEADER_TEXT, TOTAL_PURCHASE_AMOUNT_X2_TEXT } from "../../helpers/testDataCartPage.js";
import { test, productInTheShoppingCart } from "../../fixtures/base.js";
import CartPage from "../../page_objects/cartPage.js";


test.describe('cartPage.spec', () => {

	test('ТС 05.01.1 Verify that the user is redirected to the cart page after clicking on the "Кошик" button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(page).toHaveURL(CART_URL);

		await expect(cartPage.locators.getBreadcrumbsCart()).toBeVisible();
		await expect(cartPage.locators.getBreadcrumbsCart()).toHaveText(CART_BREADCRUMBS_TEXT);

	});

	test('ТС 05.01.2 Verify the cart page shows the selected product block', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getSelectedProductBlock()).toBeVisible();

	});

	test('ТС 05.01.3 Verify that the cart page contains the "Товар, Кількість, Ціна" headers', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		for (const header of LIST_HEADERS) {
			const headerLocator = cartPage.locators.getHeaders(header);
			
			await expect(headerLocator).toBeVisible();

			await expect(headerLocator).toContainText(header);
		 }

	});

	test('ТС 05.01.4 Verify that the selected product block contains the name of the product', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getProductName()).toBeVisible();
		
		await expect(cartPage.locators.getProductName()).toHaveText(PRODUCT_NAME_TEXT);

	});

	test('ТС 05.01.5 Verify that the selected product block contains the size of the product', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getProductSize()).toBeVisible();
		
		await expect(cartPage.locators.getProductSize()).toHaveText(PRODUCT_SIZE_TEXT);

	});

	test('ТС 05.01.6 Verify that the selected product block contains the color of the product', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getProductColor()).toBeVisible();
		
		await expect(cartPage.locators.getProductColor()).toHaveText(PRODUCT_COLOR_TEXT);

	});

	test('ТС 05.01.7 Verify that the selected product block contains the quantity button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getQuantityBtn()).toBeVisible();
		
	});

	test('ТС 05.01.8 Verify that the quantity button displays the correct number of selected products', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getQuantityCart()).toBeVisible();
		await expect(cartPage.locators.getQuantityCart()).toHaveText('1');

		await expect(cartPage.locators.getQuantityBtn()).toBeVisible();
		await expect(cartPage.locators.getQuantityBtn()).toHaveText('1');
		
	});

	test('ТС 05.01.9 Verify that the quantity button includes the " + " button for adding products', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getQuantityAddBtn()).toBeVisible();
		
	});

	test('ТС 05.01.10 Verify that the " + " button for adding products has a pointer cursor', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getQuantityAddBtn()).toBeVisible();
		await expect(cartPage.locators.getQuantityAddBtn()).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 05.01.11 Verify that the number of products increases after clicking the " + "button for adding products', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await cartPage.clickQuantityAddBtn();

		await expect(cartPage.locators.getQuantityBtn2()).toBeVisible();
		await expect(cartPage.locators.getQuantityBtn2()).toHaveText('2');
		
	});

	test('ТС 05.01.12 Verify that the quantity button includes the " - " button for decreasing products', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getQuantityDecrBtn()).toBeVisible();
		
	});

	test('ТС 05.01.13 Verify that the " - " button for decreasing products has a pointer cursor', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getQuantityDecrBtn()).toBeVisible();
		await expect(cartPage.locators.getQuantityDecrBtn()).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 05.01.14 Verify that the number of products decreases after clicking the " - " button for decreasing products', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await cartPage.clickQuantityAddBtn();

		await expect(cartPage.locators.getQuantityBtn2()).toBeVisible();
		await expect(cartPage.locators.getQuantityBtn2()).toHaveText('2');

		await cartPage.clickQuantityDecrBtn();

		await expect(cartPage.locators.getQuantityBtn()).toBeVisible();
		await expect(cartPage.locators.getQuantityBtn()).toHaveText('1');

	});

	test('ТС 05.01.15 Verify that the selected product block displays the unit price of the product', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getProductPrice()).toBeVisible();
		await expect(cartPage.locators.getProductPrice()).toHaveText(PRODUCT_PRICE_TEXT);
	});

	test('ТС 05.01.16 Verify that the selected product block contains the "X" close button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getCloseXBtn()).toBeVisible();

	});

	test('ТС 05.01.17 Verify that the "X" close button has a pointer cursor', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getCloseXBtn()).toBeVisible();
		await expect(cartPage.locators.getCloseXBtn()).toHaveCSS('cursor', 'pointer');
	});

	test('ТС 05.01.18 Verify that the selected product block closes after clicking on the "X" close button and the "Ваш кошик порожній. Повернутися до покупок" message appears', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getSelectedProductBlock()).toBeVisible();

		await cartPage.clickCloseXBtn();

		await expect(cartPage.locators.getSelectedProductBlock()).not.toBeVisible();

		await expect(cartPage.locators.getMessage()).toBeVisible();
		await expect(cartPage.locators.getMessage()).toHaveText(MESSAGE_TEXT);
	});

	test('ТС 05.01.19 Verify that the "Ваш кошик порожній. Повернутися до покупок" message containe a "Повернутися до покупок" links', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await cartPage.clickCloseXBtn();

		await expect(cartPage.locators.getMessageLink()).toBeVisible();
		await expect(cartPage.locators.getMessageLink()).toHaveText(MESSAGE_LINK_TEXT);
	});

	test('ТС 05.01.20 Verify that "Повернутися до покупок" link has a pointer cursor', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await cartPage.clickCloseXBtn();

		await expect(cartPage.locators.getMessageLink()).toBeVisible();
		await expect(cartPage.locators.getMessageLink()).toHaveCSS('cursor', 'pointer');
	});

	test('ТС 05.01.21 Verify that the user redirects to catalog page after clicking on the "Повернутися до покупок" link', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await cartPage.clickCloseXBtn();

		await expect(page).toHaveURL(CART_URL);

		const catalogPage = await cartPage.clickMessageLink();

		await expect(page).toHaveURL(CATALOG_URL);

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_PAGE_BREADCRUMBS_TEXT);

	});

	test('ТС 05.01.22 Verify that the cart page contains the "Очистити кошик" link', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getCleanCartLink()).toBeVisible();
		
		await expect(cartPage.locators.getCleanCartLink()).toHaveText(CLEAN_CART_LINK_TEXT);

	});

	test('ТС 05.01.23 Verify that the "Очистити кошик" link has a pointer cursor', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getCleanCartLink()).toBeVisible();
		
		await expect(cartPage.locators.getCleanCartLink()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 05.01.24 Verify that the selected product block closes after clicking on the "Очистити кошик" link and the "Ваш кошик порожній. Повернутися до покупок" message appears', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await cartPage.clickCleanCartLink();

		await expect(cartPage.locators.getMessage()).toBeVisible();
		await expect(cartPage.locators.getMessage()).toHaveText(MESSAGE_TEXT);
		
	});

	test('ТС 05.01.25 Verify that the cart page contains the information block', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getInformationBlock()).toBeVisible();
		
	});

	test('ТС 05.01.26 Verify that the information block contains "Разом" line', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getRazomLine()).toBeVisible();
		await expect(cartPage.locators.getRazomLineHeader()).toBeVisible();
		await expect(cartPage.locators.getRazomLineHeader()).toHaveText(RAZOM_HEADER_TEXT);
		
	});

	test('ТС 05.01.27 Verify that the "Разом" line contains total purchase amount', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getRazomTotalPurchaseAmount()).toBeVisible();
		await expect(cartPage.locators.getRazomTotalPurchaseAmount()).toHaveText(TOTAL_PURCHASE_AMOUNT_TEXT);
		
	});

	test('ТС 05.01.28 Verify that the total purchase amount is calculated correctly (quantity * unit price)', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getRazomTotalPurchaseAmount()).toBeVisible();
	
		await cartPage.clickQuantityAddBtn();

		await expect(cartPage.locators.getRazomTotalPurchaseAmountX2()).toBeVisible();
		await expect(cartPage.locators.getRazomTotalPurchaseAmountX2()).toHaveText(TOTAL_PURCHASE_AMOUNT_X2_TEXT);
  
	});

})