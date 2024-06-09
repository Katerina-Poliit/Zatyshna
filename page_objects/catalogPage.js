import HomePage from "./homePage";
import QuiltedJacketPage from "./guiltedJacket";

class CatalogPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getCatalogBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Каталог' }),
		getDropdownSorting: () => this.page.getByRole('button', { name: 'Сортування за ціною: від вищої до нижчої' }),
		getDropdownSortingDown: () => this.page.locator('li').filter({ hasText: 'Сортування за ціною: від нижчої до вищої' }),
		getAllBtn: () => this.page.getByRole('button', { name: 'Всі' }),
		getTshirtsBtn: () =>  this.page.getByRole('button', { name: 'Футболки' }),
		getSuitsBtn: () =>  this.page.getByRole('button', { name: 'Костюми' }),
		getHoodiesBtn: () => this.page.getByRole('button', { name: 'Світшоти' }),
      getHoodiessBtn: () => this.page.getByRole('button', { name: 'Худі' }),
		getPantsBtn: () => this.page.getByRole('button', { name: 'Штани' }),
		getSkirtBtn: () => this.page.getByRole('button', { name: 'Спідниці' }),
		getDressesBtn: () => this.page.getByRole('button', { name: 'Сукні' }),
		getShortsBtn: () => this.page.getByRole('button', { name: 'Шорти' }),
		getShirtsBtn: () => this.page.getByRole('button', { name: 'Сорочки' }),
		getBlousesBtn: () => this.page.getByRole('button', { name: 'Блузи' }),
		getTopsBtn: () => this.page.getByRole('button', { name: 'Топи' }),
		getOuterwearBtn: () => this.page.getByRole('button', { name: 'Верхній одяг' }),
		getProductCardsBlock: () => this.page.locator('.gnbinI'),
		getLogo: () => this.page.getByRole('banner').getByRole('link', { name: 'Zatyshna' }),
		getPagination: () => this.page.locator('div').filter({ hasText: /^12345678$/ }),
		getSwitchPagesForward:  () => this.page.locator('button:nth-child(3)'),
		getLastPagePangination: () => this.page.getByRole('button', { name: '8' }),
		getBackPagesForward: () => this.page.locator('.sc-dxfSRF').first(),
		getJacketProduct: () => this.page.getByRole('link', { name: 'Куртка Quilted з капюшоно...' }),
		getFooterGolovnaBtn: () => this.page.getByRole('contentinfo').getByRole('link', { name: 'Головна' }),
		getINSPOTshirtsItem: () => this.page.getByRole('link', { name: 'Футболка оверсайз з вишит...' }).nth(2),
		getNotAvailableItemText: () => this.page.getByText('Немає в наявності'),
		getAddToCartBtn: () => this.page.getByRole('button', { name: 'Додати в кошик' }),
		getGolovnaBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Головна' }),
		getJacketBasic: () => this.page.getByRole('link', { name: 'Куртка Basic однотонна з ...' }).first(),
		getNewJacket: () => this.page. getByRole('link', { name: 'Куртка з декоративними шв...' }).nth(1),
		getSoftjacket: () => this.page.getByRole('link', { name: 'Костюм Soft зі світшотом ...' }).nth(1),
		getEasy: () => this.page.getByRole('link', { name: 'Костюм Easy зі штанами st...' }).nth(1)
	};

	async clickDropdownSorting() {
		await this.locators.getDropdownSorting().click();
		return this;
	}

	async clickLogo() {
		await this.locators.getLogo().click();
		return new HomePage(this.page);
	}

	async clickSwitchPagesForward() {
		await this.locators.getSwitchPagesForward().click()
	}

	async clickBackPagesForward() {
		await this.locators.getBackPagesForward().click()
	}

	async clickLastPagePangination() {
		await this.locators.getLastPagePangination().click()
	}

	async clickJacketProduct() {
		await this.locators.getJacketProduct().click();
		return new QuiltedJacketPage(this.page);
	}

	async clickFooterGolovnaBtn() {
		await this.locators.getFooterGolovnaBtn().click();
		return new HomePage(this.page);
	}

	async clickTshirtsBtn() {
		await this.locators.getTshirtsBtn().click();
	}

	async clickINSPOTshirtsItem() {
		await this.locators.getINSPOTshirtsItem().click();
	}

	async clickGolovnaBreadcrumbs() {
		await this.locators.getGolovnaBreadcrumbs().click();
		return new HomePage(this.page);
	}

	async clickJacketBasic() {
		await this.locators.getJacketBasic().click();
		return new QuiltedJacketPage(this.page);
	}

	async clickNewJacket() {
		await this.locators.getNewJacket().click();
		return new QuiltedJacketPage(this.page);
	}

	async clickSoftjacket() {
		await this.locators.getSoftjacket().click();
		return new QuiltedJacketPage(this.page);
	}

	async clickEasyjacket() {
		await this.locators.getEasy().click();
		return new QuiltedJacketPage(this.page);
	}


}

export default CatalogPage;