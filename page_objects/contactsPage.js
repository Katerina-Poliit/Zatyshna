import HomePage from "./homePage";

class ContactsPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getGolovnaBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Головна' }),
		getContactsPageHeader: () => this.page.getByRole('heading', { name: 'Контакти' }),
		getContactsPageBreadcrumbsGolovna: () => this.page.getByRole('main').getByRole('link', { name: 'Головна' }),
		getContactsPageBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Контакти' })
	};

	async clickGolovnaBtn() {
		await this.locators.getGolovnaBtn().click();
		return new HomePage(this.page);
	}

	async clickContactsPageBreadcrumbsGolovna() {
		await this.locators.getContactsPageBreadcrumbsGolovna().click();
		return new HomePage(this.page);
	}


}

export default ContactsPage;
