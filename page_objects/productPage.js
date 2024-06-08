import CatalogPage from "./catalogPage";
import CartPage from "./cartPage";

class ProductPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getProductName: () => this.page.getByRole('heading', { name: 'Футболка Obsessed with fashion' }),
		getProductPrice: () => this.page.getByText('650 UAH'),
		getProductDescription: () => this.page.getByText('Однотонна базова футболка з написом спереду. Модель приталеного крою з круглою горловиною та короткими рукавами'),
		getColorSelectionBlock: () => this.page.locator('div').filter({ hasText: /^Колір$/ }),
		getColorSelectionBlockHeader: () => this.page.getByText('Колір'),
		getColorSelectionBtns: () => this.page.locator('div').filter({ hasText: /^Колір$/ }).getByRole('list'),
		getColorSelectionBtn: () => this.page.locator('.sc-iJrDDk').first(),
		getSizeSelectionBlock: () => this.page.getByText('РозмірXSSMLРозмірна сітка'),
		getSizeSelectionBlockHeader: () => this.page.getByText('Розмір', { exact: true }),
		getSizeSelectionBlockBtns: () => this.page.getByText('XSSML'),
		getSizeSelectionBlockBtn: () => this.page.getByRole('button', { name: 'XS' }),
		getDimensionalGridLink: () => this.page.getByRole('button', { name: 'Розмірна сітка' }),
		getDimensionalGridPopUp: () => this.page.locator('div').filter({ hasText: 'Розмірна сіткаРозмірXSSMLXL' }).nth(2),
		getDimensionalGridPopUpCloseBtn: () => this.page.locator('#modal-root').getByRole('button'),
		getDimensionalGridPopUpHeader: () => this.page.getByRole('heading', { name: 'Розмірна сітка' }),
		getDimensionalGridPopUpFields: (fieldName) => this.page.getByRole('cell', { name: fieldName }),
		getDimensionalGridPopUpSizes: (fieldName) => this.page.getByRole('cell', { name: fieldName, exact: true }),
		getDimensionalGridChestSizes: (fieldName) => this.page.getByRole('cell', { name: fieldName, exact: true }),
		getDimensionalGridWaistSizes: (fieldName) => this.page.getByRole('cell', { name: fieldName, exact: true }),
		getDimensionalGridHipSizes: (fieldName) => this.page.getByRole('cell', { name: fieldName, exact: true }),
		getDimensionalGridLogo: () => this.page.getByText('ZATYSHNA', { exact: true }),
		getProductImg: () => this.page.getByRole('img', { name: 'RED' }).first(),
		getYouMayLikeBlock: () => this.page.getByText('Вам може сподобатисьМайка'),
		getYouMayLikeBlockHeader: () => this.page.getByRole('heading', { name: 'Вам може сподобатись' }),
		getYouMayLikeProductImg: () => this.page.getByRole('link', { name: 'Майка Texture' }).first(),
		getProductCharacteristicsDropdown: () => this.page.locator('div').filter({ hasText: /^Характеристика товару$/ }).nth(1),
		getProductCharacteristicsDropdownSelectBtn: () => this.page.locator('button[name="characteristic"]'),
		getProductCharacteristicsDropdownInformation: () => this.page.getByText('Інформація відсутня'),
		getRulesOfCareDropdown: () => this.page.getByRole('main').locator('div').filter({ hasText: 'Правила догляду' }).nth(3),
		getRulesOfCareDropdownSelectBtn: () => this.page.locator('button[name="regulations"]'),
		getRulesOfCareDropdownInformation: () => this.page.locator('.sc-dxfSRF').last(),
		getProductImgs: () => this.page.locator('.swiper-wrapper'),
		getAddToCartBtn: () => this.page.getByRole('button', { name: 'Додати в кошик' }),
		getErrorMessage: () => this.page.getByText('Оберіть розмір, щоб додати в кошик'),
		getDropdownCart: () => this.page.getByText('Футболка Obs...REDXS1 x 650 UAHРазом:650 UAHОформити замовленняКошик'),
		getSuccessfulMessage: () => this.page.getByText('Товар додано в кошик'),
		getCounterBtn: () => this.page.locator('div[style="position: relative;"]>div'),
		getAddBtn: () => this.page.locator('div[style="position: relative;"]>div [value="false"]'),
		// getSubtractBtn: () => this.page.locator('div[style="position: relative;"] button.gjGmUn')
		getCartIcon: () => this.page.getByRole('link', { name: '3 Кошик' }),
		getDropdownCartItems: () => this.page.getByText('x 650 UAH'),
		getCatalogPage: () => this.page.getByRole('banner').getByRole('link', { name: 'Каталог' }),
		getBreadcrumbs: () => this.page.getByText('ГоловнаКаталогФутболки'),
		getCatalogBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Каталог' }),
		getCartBtn: () => this.page.getByRole('link', { name: '1 Кошик' })
	};

	async clickDimensionalGridLink() {
		await this.locators.getDimensionalGridLink().click();
		return this;
	}

	async clickDimensionalGridPopUpCloseBtn() {
		await this.locators.getDimensionalGridPopUpCloseBtn().click();
		return this;
	}

	async clickProductCharacteristicsDropdownSelectBtn() {
		await this.locators.getProductCharacteristicsDropdownSelectBtn().click();
		return this;
	}

	async clickRulesOfCareDropdownSelectBtn() {
		await this.locators.getRulesOfCareDropdownSelectBtn().click();
		return this;
	}

	async clickAddToCartBtn() {
		await this.locators.getAddToCartBtn().click();
		return this;
	}

	async clickSizeSelectionBlockBtn() {
		await this.locators.getSizeSelectionBlockBtn().click();
		return this;
	}

	async clickAddBtn() {
		await this.locators.getAddBtn().click();
		return this;
	}

	async clickCatalogPage() {
		await this.locators.getCatalogPage().click();
		return new CatalogPage(this.page);
	}

	async clickCatalogBreadcrumbs() {
		await this.locators.getCatalogBreadcrumbs().click();
		return new CatalogPage(this.page);
	}

	async clickCartBtn() {
		await this.locators.getCartBtn().click();
		return new CartPage(this.page);
	}

}

export default ProductPage;
