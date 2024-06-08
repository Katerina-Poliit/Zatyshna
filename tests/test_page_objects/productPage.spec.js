import { expect } from "@playwright/test";
import { PRODUCT_NAME_TEXT, PRODUCT_PRICE_TEXT, PRODUCT_DESCRIPTION_TEXT, COLOR_SELECTION_BLOCK_HEADER_TEXT, SIZE_SELECTION_BLOCK_HEADER_TEXT, DIMANTION_GRID_LINK_TEXT, DIMANTION_GRID_POP_UP_HEADER_TEXT, POP_UP_FIELDS, SIZES, СHEST_SIZES, WAIST_SIZES, HIP_SIZES, DIMANTION_GRID_LOGO_TEXT, YOU_MAY_LIKE_BLOCK_HEADER_TEXT, PRODUCT_CHARACTERISTICS_DROPDOWN_TEXT, DROPDOWN_INFORMATION_TEXT, RULES_OF_CARE_DROPDOWN_TEXT, ADD_TO_CART_BUTTON_TEXT, ERROR_MESSAGE_TEXT, SUCCESSFUL_MESSAGE_TEXT } from "../../helpers/testDataProductPage.js";
import { NOT_AVAILABLE_ITEM_TEXT } from "../../helpers/testDataCatalogPage.js"
import { test, openProductCart } from "../../fixtures/base.js";
import ProductPage from "../../page_objects/productPage.js";


test.describe('productPage.spec', () => {

	test('ТС 03.01.1 Verify that the product name is displayed in the product card', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductName()).toBeVisible();
		await expect(productPage.locators.getProductName()).toHaveText(PRODUCT_NAME_TEXT);

	});

	test('ТС 03.01.2 Verify that the product card contains the price of product', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductPrice()).toBeVisible();
		await expect(productPage.locators.getProductPrice()).toHaveText(PRODUCT_PRICE_TEXT);

	});

	test('ТС 03.01.3 Verify that the product card contains the product description text', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductDescription()).toBeVisible();
		await expect(productPage.locators.getProductDescription()).toContainText(PRODUCT_DESCRIPTION_TEXT);

	});

	test('ТС 03.01.4 Verify that the product card contains a color selection block', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getColorSelectionBlock()).toBeVisible();

	});

	test('ТС 03.01.5 Verify that the color selection block contains a header', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getColorSelectionBlockHeader()).toBeVisible();
		await expect(productPage.locators.getColorSelectionBlockHeader()).toHaveText(COLOR_SELECTION_BLOCK_HEADER_TEXT);

	});

	test('ТС 03.01.6 Verify that the color selection block contains buttons for different colors', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getColorSelectionBtns()).toBeVisible();

	});

	test('ТС 03.01.7 Verify that the color button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getColorSelectionBtn()).toBeVisible();
		await expect(productPage.locators.getColorSelectionBtn()).toHaveCSS('cursor', 'pointer');
		await expect(productPage.locators.getColorSelectionBtn()).toHaveCSS('background', 'rgb(255, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box');

	});

	test('ТС 03.01.8 Verify that the product card contains a size selection block', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getSizeSelectionBlock()).toBeVisible();

	});

	test('ТС 03.01.9 Verify that the size selection block contains a header', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getSizeSelectionBlockHeader()).toBeVisible();
		await expect(productPage.locators.getSizeSelectionBlockHeader()).toHaveText(SIZE_SELECTION_BLOCK_HEADER_TEXT);

	});

	test('ТС 03.01.10 Verify that the size selection block contains buttons for different sizes', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getSizeSelectionBlockBtns()).toBeVisible();

	});

	test('ТС 03.01.11 Verify that the size button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getSizeSelectionBlockBtn()).toBeVisible();
		await expect(productPage.locators.getSizeSelectionBlockBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.01.12 Verify that the size selection block contains the "Розмiрна сiтка" link', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getDimensionalGridLink()).toBeVisible();
		await expect(productPage.locators.getDimensionalGridLink()).toHaveText(DIMANTION_GRID_LINK_TEXT);

	});

	test('ТС 03.01.13 Verify that the "Розмiрна сiтка" pop up opens after clicking on the "Розмiрна сiтка" link', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		await expect(productPage.locators.getDimensionalGridPopUp()).toBeVisible();

	});

	test('ТС 03.01.14 Verify that the "Розмiрна сiтка" pop up contains the close "X" button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		await expect(productPage.locators.getDimensionalGridPopUpCloseBtn()).toBeVisible();

	});

	test('ТС 03.01.15 Verify that the close "X" button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		await expect(productPage.locators.getDimensionalGridPopUpCloseBtn()).toBeVisible();
		await expect(productPage.locators.getDimensionalGridPopUpCloseBtn()).toHaveCSS('cursor', 'pointer');
	});

	test('ТС 03.01.16 Verify that the "Розмiрна сiтка" pop up closes after clicking on the the close "X" button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();
		await productPage.clickDimensionalGridPopUpCloseBtn();

		await expect(productPage.locators.getDimensionalGridPopUp()).not.toBeVisible();

	});

	test('ТС 03.01.17 Verify that the "Розмiрна сiтка" pop up contains the header', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		await expect(productPage.locators.getDimensionalGridPopUpHeader()).toBeVisible();
		await expect(productPage.locators.getDimensionalGridPopUpHeader()).toHaveText(DIMANTION_GRID_POP_UP_HEADER_TEXT);

	});

	test('ТС 03.01.18 Verify that the "Розмiрна сiтка" pop up contains the "Розмір, Обхват грудей, Обхвати талії, Обхвати бедер" fields', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		for (const field of POP_UP_FIELDS) {
			const fieldLocator = productPage.locators.getDimensionalGridPopUpFields(field);
			
			await expect(fieldLocator).toBeVisible();

			await expect(fieldLocator).toContainText(field);
		 }

	});

	test('ТС 03.01.19 Verify that the "Розмір" column contains different size', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		for (const field of SIZES) {
			const fieldLocator = productPage.locators.getDimensionalGridPopUpSizes(field);
			
			await expect(fieldLocator).toBeVisible();

			await expect(fieldLocator).toContainText(field);
		 }

	});

	test('ТС 03.01.20 Verify that the "Обхват грудей" column contains a range of sizes', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		for (const field of СHEST_SIZES) {
			const fieldLocator = productPage.locators.getDimensionalGridChestSizes(field);
			
			await expect(fieldLocator).toBeVisible();

			await expect(fieldLocator).toContainText(field);
		 }

	});

	test('ТС 03.01.21 Verify that the "Обхвати талії" column contains a range of sizes', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		for (const field of WAIST_SIZES) {
			const fieldLocator = productPage.locators.getDimensionalGridWaistSizes(field);
			
			await expect(fieldLocator).toBeVisible();

			await expect(fieldLocator).toContainText(field);
		 }

	});

	test('ТС 03.01.22 Verify that the "Обхвати бедер" column contains a range of sizes', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		for (const field of HIP_SIZES) {
			const fieldLocator = productPage.locators.getDimensionalGridHipSizes(field);
			
			await expect(fieldLocator).toBeVisible();

			await expect(fieldLocator).toContainText(field);
		 }

	});

	test('ТС 03.01.23 Verify that the "Розмiрна сiтка" pop up contains the background logo', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickDimensionalGridLink();

		await expect(productPage.locators.getDimensionalGridLogo()).toBeVisible();
		await expect(productPage.locators.getDimensionalGridLogo()).toHaveText(DIMANTION_GRID_LOGO_TEXT);

	});

	test('ТС 03.01.24 Verify that the product card contains the "Вам може сподобатись" selection block', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getYouMayLikeBlock()).toBeVisible();
		await expect(productPage.locators.getYouMayLikeBlockHeader()).toBeVisible();
		await expect(productPage.locators.getYouMayLikeBlockHeader()).toHaveText(YOU_MAY_LIKE_BLOCK_HEADER_TEXT);

	});

	test('ТС 03.01.25 Verify that the "Вам може сподобатись" selection block contains the carts of products', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getYouMayLikeProductImg()).toBeVisible();

	});

	test('ТС 03.01.26 Verify that the product card contains the "Характеристика товару" dropdown', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductCharacteristicsDropdown()).toBeVisible();
		await expect(productPage.locators.getProductCharacteristicsDropdown()).toHaveText(PRODUCT_CHARACTERISTICS_DROPDOWN_TEXT);

	});

	test('ТС 03.01.27 Verify that the "Характеристика товару" dropdown contains the select button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductCharacteristicsDropdownSelectBtn()).toBeVisible();

	});

	test('ТС 03.01.28 Verify that the select button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductCharacteristicsDropdownSelectBtn()).toBeVisible();
		await expect(productPage.locators.getProductCharacteristicsDropdownSelectBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.01.29 Verify that the "Характеристика товару" dropdown opens after clicking on the select button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickProductCharacteristicsDropdownSelectBtn();

		await expect(productPage.locators.getProductCharacteristicsDropdownInformation()).toBeVisible();

	});

	test('ТС 03.01.30 Verify that the "Характеристика товару" dropdown contains the information text', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickProductCharacteristicsDropdownSelectBtn();

		await expect(productPage.locators.getProductCharacteristicsDropdownInformation()).toBeVisible();
		await expect(productPage.locators.getProductCharacteristicsDropdownInformation()).toHaveText(DROPDOWN_INFORMATION_TEXT);

	});

	test('ТС 03.01.31 Verify that the product card contains the "Правила догляду" dropdown', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getRulesOfCareDropdown()).toBeVisible();
		await expect(productPage.locators.getRulesOfCareDropdown()).toHaveText(RULES_OF_CARE_DROPDOWN_TEXT);

	});

	test('ТС 03.01.32 Verify that the "Правила догляду" dropdown contains the select button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getRulesOfCareDropdownSelectBtn()).toBeVisible();

	});

	test('ТС 03.01.33 Verify that the select button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getRulesOfCareDropdownSelectBtn()).toBeVisible();
		await expect(productPage.locators.getRulesOfCareDropdownSelectBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.01.34 Verify that the "Правила догляду" dropdown opens after clicking on the select button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickRulesOfCareDropdownSelectBtn();

		await expect(productPage.locators.getRulesOfCareDropdownInformation()).toBeVisible();

	});

	test('ТС 03.01.35 Verify that the "Правила догляду" dropdown contains the information text', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickRulesOfCareDropdownSelectBtn();

		await expect(productPage.locators.getRulesOfCareDropdownInformation()).toBeVisible();
		await expect(productPage.locators.getRulesOfCareDropdownInformation()).toHaveText(DROPDOWN_INFORMATION_TEXT);

	});

	test('ТС 03.01.36 Verify that the product card contains a photo of the pruduct', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductImg()).toBeVisible();

	});

	test('ТС 03.01.37 Verify that the product card contains product photos from different angles', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getProductImgs()).toBeVisible();

	});

	test('ТС 03.01.38 Verify that the product card contains "Додати в корзину" button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getAddToCartBtn()).toBeVisible();
		await expect(productPage.locators.getAddToCartBtn()).toHaveText(ADD_TO_CART_BUTTON_TEXT);

	});

	test('ТС 03.01.39 Verify that the "Додати в корзину" button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getAddToCartBtn()).toBeVisible();
		await expect(productPage.locators.getAddToCartBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.01.40 Verify that the "Оберіть розмір, щоб додати в кошик" message appears after clicking on the "Додати в корзину" button without size selection', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickAddToCartBtn();

		await expect(productPage.locators.getErrorMessage()).toBeVisible();
		await expect(productPage.locators.getErrorMessage()).toHaveText(ERROR_MESSAGE_TEXT);

	});

	test('ТС 03.01.41 Verify that the user can add product to cart after clicking on the "Додати в корзину" button with size selection', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickSizeSelectionBlockBtn();
		await productPage.clickAddToCartBtn();

		await expect(productPage.locators.getDropdownCart()).toBeVisible();
		await expect(productPage.locators.getSuccessfulMessage()).toBeVisible();
		await expect(productPage.locators.getSuccessfulMessage()).toHaveText(SUCCESSFUL_MESSAGE_TEXT);

	});

	test('ТС 03.01.42 Verify that the product card contains the counter button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getCounterBtn()).toBeVisible();
		await expect(productPage.locators.getCounterBtn()).toHaveText('1');

	});

	test('ТС 03.01.43 Verify that the counter button contains the " + " button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getAddBtn()).toBeVisible();

	});

	test('ТС 03.01.44 Verify that the " + " button has a pointer cursor', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getAddBtn()).toBeVisible();
		await expect(productPage.locators.getAddBtn()).toHaveCSS('cursor', 'pointer');

	});

	test('ТС 03.01.47 Verify that value increases by 1 after clicking on the " + " button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickAddBtn();

		await expect(productPage.locators.getCounterBtn()).toBeVisible();
		await expect(productPage.locators.getCounterBtn()).toHaveText('2');

	});

	test('ТС 03.01.49 Verify that three items are displayed in the cart after adding three items by the " + " button', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await productPage.clickSizeSelectionBlockBtn();
		await productPage.clickAddBtn();
		await productPage.clickAddBtn();
		await productPage.clickAddToCartBtn();

		await expect(productPage.locators.getCounterBtn()).toHaveText('3');
		await expect(productPage.locators.getCartIcon()).toBeVisible();
		await expect(productPage.locators.getDropdownCartItems()).toBeVisible();

	});

	test('ТС 03.01.50 Verify that the “Out of stock” status is present if the product is not available', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		const catalogPage = await productPage.clickCatalogPage();
		await catalogPage.clickTshirtsBtn();
		await catalogPage.clickINSPOTshirtsItem();

		await expect(catalogPage.locators.getNotAvailableItemText()).toBeVisible();
		await expect(catalogPage.locators.getNotAvailableItemText()).toHaveText(NOT_AVAILABLE_ITEM_TEXT);

	});

	test('ТС 03.01.51 Verify that the "Додати в кошик" button is not active (hasn\'t a cursor pointer)', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		const catalogPage = await productPage.clickCatalogPage();
		await catalogPage.clickTshirtsBtn();
		await catalogPage.clickINSPOTshirtsItem();

		await expect(catalogPage.locators.getAddToCartBtn()).toBeVisible();
		await expect(catalogPage.locators.getAddToCartBtn()).not.toHaveCSS('cursor', 'pointer');
	});

	test('ТС 03.01.52 Verify that the product card contains the breadcrumbs', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getBreadcrumbs()).toBeVisible();

	});

	test('ТС 03.01.53 Verify that the user can navigate by breadcrumbs', async ({ page, openProductCart }) => {
		const productPage = new ProductPage(page);

		await expect(productPage.locators.getCatalogBreadcrumbs()).toBeVisible();

		const catalogPage = await productPage.clickCatalogBreadcrumbs();

		await expect(catalogPage.locators.getGolovnaBreadcrumbs()).toBeVisible();

		const homePage = await catalogPage.clickGolovnaBreadcrumbs();

		await expect(homePage.locators.getMainPageImg()).toBeVisible();

	});


})