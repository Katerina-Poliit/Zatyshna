import CartPage from "./cartPage";
import HomePage from "./homePage";

class ProductPage2 {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getComfortSuitItemSizeBtn: () => this.page.getByRole('button', { name: 'S' }),
		getAddToCartBtn: () => this.page.getByRole('button', { name: 'Додати в кошик' }),
		getGolovnaBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Головна' }),
		getCartBtn: () => this.page.getByRole('link', { name: 'Кошик' })
	};

	async clickComfortSuitItemSizeBtn() {
		await this.locators.getComfortSuitItemSizeBtn().click();
		return this;
	}

	async clickAddToCartBtn() {
		await this.locators.getAddToCartBtn().click();
		return this;
	}

	async clickGolovnaBtn() {
		await this.locators.getGolovnaBtn().click();
		return new HomePage(this.page);
	}

	async clickCartBtn() {
		await this.locators.getCartBtn().click();
		return new CartPage(this.page);
	}

}

export default ProductPage2;