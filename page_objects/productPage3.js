import CartPage from "./cartPage";

class ProductPage3 {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getComfortSuitItemSizeBtn: () => this.page.getByRole('button', { name: 'S' }),
		getAddToCartBtn: () => this.page.getByRole('button', { name: 'Додати в кошик' }),
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

	async clickCartBtn() {
		await this.locators.getCartBtn().click();
		return new CartPage(this.page);
	}

}

export default ProductPage3;