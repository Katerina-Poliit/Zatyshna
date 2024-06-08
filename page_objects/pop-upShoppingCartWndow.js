import OrderPage from "./orderPage";

class PopupShoppingCartWndowPage {
	constructor(page) {
		this.page = page;
	}

    locators = {

        getCheckoutButton: () => this.page.getByRole('link', { name: 'Оформити замовлення' }),
        getheadingPopap: () => this.page.getByText('Товар додано в кошик'),
        getPhotoProduct: ()  => this.page.getByRole('link', { name: 'Куртка Basic...' }).first(),
        getCloseButton: () => this.page.locator('#modal-root').getByRole('button'),
        getInfoProduct: () => this.page.getByText('Куртка Basic...BLACKL1 x 3'),
        getTotalPrice: () => this.page.getByText('Разом:3 990 UAH'),
        getBacketButton:  () => this.getByRole('link', { name: 'Кошик', exact: true })



    }

    async clickCheckoutButton() {
        await this.locators.getCheckoutButton().click();
        return new OrderPage(this.page);

    }

    async clickCloseButton() {
        await this.locators.getCloseButton();
    }


}

export default PopupShoppingCartWndowPage