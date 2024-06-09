import CatalogPage from "./catalogPage";
import HomePage from "./homePage";
import OrderPage from "./orderPage";
import ProductPage from "./productPage";

class CartPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getBreadcrumbsCart: () => this.page.getByRole('link', { name: 'Кошик', exact: true }),
		getSelectedProductBlock: () => this.page.locator('li').filter({ hasText: 'Футбо...REDXS1650 UAH' }),
		getHeaders: (headerName) => this.page.getByText(headerName, { exact: true }),
		getProductName: () => this.page.getByRole('link', { name: 'Футбо...' }),
		getProductSize: () => this.page.getByText('XS').first(),
		getProductColor: () => this.page.getByText('RED'),
		getQuantityBtn: () => this.page.getByRole('main').getByText('1'),
		getQuantityCart: () => this.page.locator('.sc-fLsdDA'),
		getQuantityAddBtn: () => this.page.getByRole('main').getByRole('img').nth(2),
		getQuantityBtn2: () => this.page.getByRole('main').getByText('2'),
		getQuantityDecrBtn: () => this.page.getByRole('main').getByRole('img').nth(1),
		getProductPrice: () => this.page.locator('div').filter({ hasText: /^650 UAH$/ }).getByRole('paragraph'),
		getCloseXBtn: () => this.page.locator('li').filter({ hasText: 'Футбо...REDXS1650 UAH' }).getByRole('button'),
		getMessage: () => this.page.getByText('Ваш кошик порожній.Повернутися до покупок'),
		getMessageLink: () => this.page.getByRole('link', { name: 'Повернутися до покупок' }),
		getCleanCartLink: () => this.page.getByRole('button', { name: 'Очистити кошик' }),
		getInformationBlock: () => this.page.getByText('Вартість доставкиЗа тарифами перевізникаРазом 650 UAH'),
		getRazomLine: () => this.page.getByText('Разом 650 UAH'),
		getRazomLineHeader: () => this.page.getByText('Разом'),
		getRazomTotalPurchaseAmount: () => this.page.getByText('UAH').nth(1),
		getRazomTotalPurchaseAmountX2: () => this.page.getByText('300 UAH').nth(1),
		getDeliveryCost: () => this.page.getByText('Вартість доставки'),
		getAtCarrierRates: () => this.page.getByText('За тарифами перевізника'),
		getPlaceAnOrderBtn: () => this.page.getByRole('link', { name: 'Оформити замовлення' }),
		getContinueShoppingBtn: () => this.page.getByRole('link', { name: 'Продовжити покупки' }),
		getGolovnaBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Головна' }),
		getScroll: () => this.page.locator('.sc-hbaYYk'),
		getBreadcrumbs: () => this.page.getByText('ГоловнаКошик'),
		getBreadcrumbsGolovna: () => this.page.getByRole('main').getByRole('link', { name: 'Головна' }),
		getScrollToTopBtn: () => this.page.locator('.sc-gUjWqj'),
		getScrollToTopBtnIcon: () => this.page.locator('.sc-gUjWqj')
	};

	async clickQuantityAddBtn() {
		await this.locators.getQuantityAddBtn().click();
		return this;
	}

	async clickQuantityDecrBtn() {
		await this.locators.getQuantityDecrBtn().click();
		return this;
	}

	async clickCloseXBtn() {
		await this.locators.getCloseXBtn().click();
		return this;
	}

	async clickMessageLink() {
		await this.locators.getMessageLink().click();
		return new CatalogPage(this.page);
	}

	async clickCleanCartLink() {
		await this.locators.getCleanCartLink().click();
		return this;
	}

	async clickPlaceAnOrderBtn() {
		await this.locators.getPlaceAnOrderBtn().click();
		return new OrderPage(this.page);
	}

	async clickContinueShoppingBtn() {
		await this.locators.getContinueShoppingBtn().click();
		return new CatalogPage(this.page);
	}

	async clickGolovnaBtn() {
		await this.locators.getGolovnaBtn().click();
		return new HomePage(this.page);
	}

	async clickProductName() {
		await this.locators.getProductName().click();
		return new ProductPage(this.page);
	}

	async clickBreadcrumbsGolovna() {
		await this.locators.getBreadcrumbsGolovna().click();
		return new HomePage(this.page);
	}

	async clickScrollToTopBtn() {
		await this.locators.getScrollToTopBtn().click();
		return this;
	}

}

export default CartPage;