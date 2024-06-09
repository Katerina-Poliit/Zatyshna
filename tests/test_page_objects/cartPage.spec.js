import { expect } from "@playwright/test";
import { CART_BREADCRUMBS_TEXT, CART_URL, LIST_HEADERS, PRODUCT_NAME_TEXT, PRODUCT_SIZE_TEXT, PRODUCT_COLOR_TEXT, PRODUCT_PRICE_TEXT, MESSAGE_TEXT, MESSAGE_LINK_TEXT, CATALOG_PAGE_BREADCRUMBS_TEXT, CATALOG_URL, CLEAN_CART_LINK_TEXT, TOTAL_PURCHASE_AMOUNT_TEXT, RAZOM_HEADER_TEXT, TOTAL_PURCHASE_AMOUNT_X2_TEXT, DELIVERY_COST_TEXT, AT_CARRIER_RATES_TEXT, PLACE_AN_ORDER_BUTTON_TEXT, ORDER_URL, ORDER_PAGE_BREADCRUMBS, CONTINUE_SHOPPING_BUTTON_TEXT, CATALOG_BREADCRUMBS_TEXT, PRODUCT_URL, BREADCRUMBS_TEXT, BASE_URL } from "../../helpers/testDataCartPage.js";
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

	test('ТС 05.01.29 Verify that the information block contains "Вартість доставки" section', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getDeliveryCost()).toBeVisible();
		await expect(cartPage.locators.getDeliveryCost()).toHaveText(DELIVERY_COST_TEXT);
  
	});

	test('ТС 05.01.30 Verify that the information block contains "За тарифами перевізника" section', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getAtCarrierRates()).toBeVisible();
		await expect(cartPage.locators.getAtCarrierRates()).toHaveText(AT_CARRIER_RATES_TEXT);
  
	});

	test('ТС 05.01.31 Verify that the cart page contains the "Оформити замовлення" button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getPlaceAnOrderBtn()).toBeVisible();
		await expect(cartPage.locators.getPlaceAnOrderBtn()).toHaveText(PLACE_AN_ORDER_BUTTON_TEXT);
  
	});

	test('ТС 05.01.32 Verify that the "Оформити замовлення" button has a pointer cursor', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getPlaceAnOrderBtn()).toBeVisible();
		await expect(cartPage.locators.getPlaceAnOrderBtn()).toHaveCSS('cursor', 'pointer');
  
	});

	test('ТС 05.01.33 Verify that the "Оформити замовлення" button is colored black', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getPlaceAnOrderBtn()).toBeVisible();
		await expect(cartPage.locators.getPlaceAnOrderBtn()).toHaveCSS('background-color', 'rgb(22, 11, 3)');
  
	});

	test('ТС 05.01.34 Verify that the user taken to the checkout page after clicking on the "Оформити замовлення" button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		const orderPage = await cartPage.clickPlaceAnOrderBtn();

		await expect(page).toHaveURL(ORDER_URL);
		await expect(orderPage.locators.getOrderPageBreadcrumbs()).toBeVisible();
		await expect(orderPage.locators.getOrderPageBreadcrumbs()).toHaveText(ORDER_PAGE_BREADCRUMBS);
  
	});

	test('ТС 05.01.35 Verify that the cart page contains the "Продовжити покупки" button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getContinueShoppingBtn()).toBeVisible();
		await expect(cartPage.locators.getContinueShoppingBtn()).toHaveText(CONTINUE_SHOPPING_BUTTON_TEXT);
  
	});

	test('ТС 05.01.36 Verify that the "Продовжити покупки" button has a pointer cursor', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getContinueShoppingBtn()).toBeVisible();
		await expect(cartPage.locators.getContinueShoppingBtn()).toHaveCSS('cursor', 'pointer');
  
	});

	test('ТС 05.01.37 Verify that the "Продовжити покупки" button is colored white', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getContinueShoppingBtn()).toBeVisible();
		await expect(cartPage.locators.getContinueShoppingBtn()).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  
	});

	test('ТС 05.01.38 Verify that the user redirects to catalog page after clicking on "Продовжити покупки" button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		const catalogPage = await cartPage.clickContinueShoppingBtn();

		await expect(page).toHaveURL(CATALOG_URL);

		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toBeVisible();
		await expect(catalogPage.locators.getCatalogBreadcrumbs()).toHaveText(CATALOG_BREADCRUMBS_TEXT);

	});

	test('ТС 05.01.39 Verify that the cart page contains scroll with a large number of products in the cart', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		const homePage = await cartPage.clickGolovnaBtn();

		const productPage2 = await homePage.clickComfortSuitItem();

		await productPage2.clickComfortSuitItemSizeBtn();
		await productPage2.clickAddToCartBtn();
		await productPage2.clickCartBtn();

		await expect(cartPage.locators.getScroll()).toBeVisible();

	});

	test('ТС 05.01.40 Verify that the product list scrolls down', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		const homePage = await cartPage.clickGolovnaBtn();

		const productPage2 = await homePage.clickComfortSuitItem();

		await productPage2.clickComfortSuitItemSizeBtn();
		await productPage2.clickAddToCartBtn();
		await productPage2.clickGolovnaBtn();
		await homePage.clickNextBtn();

		const productPage3 = await homePage.clickKnittedSuitWithHoodieItem();
		await productPage3.clickComfortSuitItemSizeBtn();
		await productPage3.clickAddToCartBtn();
		await productPage3.clickCartBtn();

		const scrollbar = page.locator('.sc-hbaYYk');

		await scrollbar.evaluate((productList) => {
			productList.scrollTop = productList.scrollHeight;
		});

		await page.waitForTimeout(1000);

		const isScrolledDown = await scrollbar.evaluate((productList) => {
			return productList.scrollTop > 0;
		});

		expect(isScrolledDown).toBe(true);

	});

	test('ТС 05.01.41 Verify that the product list scrolls up', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		const homePage = await cartPage.clickGolovnaBtn();

		const productPage2 = await homePage.clickComfortSuitItem();

		await productPage2.clickComfortSuitItemSizeBtn();
		await productPage2.clickAddToCartBtn();
		await productPage2.clickGolovnaBtn();
		await homePage.clickNextBtn();

		const productPage3 = await homePage.clickKnittedSuitWithHoodieItem();
		await productPage3.clickComfortSuitItemSizeBtn();
		await productPage3.clickAddToCartBtn();
		await productPage3.clickCartBtn();

		const scrollbar = page.locator('.sc-hbaYYk');

		await scrollbar.evaluate((productList) => {
			productList.scrollTop = productList.scrollHeight;
		});

		await page.waitForTimeout(1000);

		const isScrolledDown = await scrollbar.evaluate((productList) => {
			return productList.scrollTop > 0;
		});

		expect(isScrolledDown).toBe(true);

		await scrollbar.evaluate((productList) => {
			productList.scrollTop = 0;
		});

		await page.waitForTimeout(1000);

		const isScrolledUp = await scrollbar.evaluate((productList) => {
			return productList.scrollTop === 0;
		});
		expect(isScrolledUp).toBe(true);

	});

	test('ТС 05.01.42 Verify that the minimum quantity of goods is 1 pc.', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getQuantityBtn()).toBeVisible();
		await expect(cartPage.locators.getQuantityBtn()).toHaveText('1');

		await cartPage.clickQuantityDecrBtn();

		await expect(cartPage.locators.getQuantityBtn()).toBeVisible();
		await expect(cartPage.locators.getQuantityBtn()).toHaveText('1');

	});

	test('ТС 05.01.43 Verify that the all product names in the cart are hyperlinks to the product card', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getProductName()).toBeVisible();
		await expect(cartPage.locators.getProductName()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 05.01.44 Verify that the user is redirected to the product page after clicking on the hyperlinks', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		const productPage = await cartPage.clickProductName();

		await expect(page).toHaveURL(PRODUCT_URL);
		await expect(productPage.locators.getProductName()).toBeVisible();

	});

	test('ТС 05.01.45 Verify that the card page contains the breadcrumbs', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getBreadcrumbs()).toBeVisible();
		await expect(cartPage.locators.getBreadcrumbs()).toHaveText(BREADCRUMBS_TEXT);
	});

	test('ТС 05.01.46 Verify that the user can navigeate by breadcrumbs', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getBreadcrumbsGolovna()).toBeVisible();

		const homePage = await cartPage.clickBreadcrumbsGolovna();

		await expect(page).toHaveURL(BASE_URL);
		await expect(homePage.locators.getMainPageImg()).toBeVisible();

	});

	test('ТС 05.01.47 Verify that the card page contains the "Scroll to top" button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getScrollToTopBtn()).toBeVisible();
		
	});

	test('ТС 05.01.48 Verify that the "Scroll to top" has a pointer cursor', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getScrollToTopBtn()).toBeVisible();
		await expect(cartPage.locators.getScrollToTopBtn()).toHaveCSS('cursor', 'pointer');
		
	});

	test('ТС 05.01.49 Verify that the "Scroll to top" contains the icon', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		await expect(cartPage.locators.getScrollToTopBtnIcon()).toBeVisible();
		
	});

	test('ТС 05.01.50 Verify that the card page scrolls to the top after clicking the "Scroll to top" button', async ({ page, productInTheShoppingCart }) => {
		const cartPage = new CartPage(page);

		const homePage = await cartPage.clickGolovnaBtn();

		const productPage2 = await homePage.clickComfortSuitItem();

		await productPage2.clickComfortSuitItemSizeBtn();
		await productPage2.clickAddToCartBtn();
		await productPage2.clickGolovnaBtn();
		await homePage.clickNextBtn();

		const productPage3 = await homePage.clickKnittedSuitWithHoodieItem();
		await productPage3.clickComfortSuitItemSizeBtn();
		await productPage3.clickAddToCartBtn();
		await productPage3.clickCartBtn();

		// Плавная прокрутка страницы вниз
		await page.evaluate(() => {
			window.scrollTo({
				top: document.body.scrollHeight,
				behavior: 'smooth'
			});
		});

		await page.waitForTimeout(2000);

		await cartPage.clickScrollToTopBtn();

		await page.waitForTimeout(2000);

		await expect(cartPage.locators.getBreadcrumbs()).toBeVisible();
		
	});

})