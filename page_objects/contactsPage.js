import HomePage from "./homePage";

class ContactsPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getGolovnaBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Головна' }),
		getContactsPageHeader: () => this.page.getByRole('heading', { name: 'Контакти' }),
		getContactsPageBreadcrumbsGolovna: () => this.page.getByRole('main').getByRole('link', { name: 'Головна' }),
		getContactsPageBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Контакти' }),
		getHeadingBlock: () => this.page.getByRole('heading', { name: 'Зв’язатись з нами' }),
		getNameField: () => this.page.getByPlaceholder('Імʼя'),
		getMessageNameField: () => this.page.getByText('Невірне імʼя'),
		getSendButton: () => this.page.getByRole('button', { name: 'Відправити' }),




	};

	async clickGolovnaBtn() {
		await this.locators.getGolovnaBtn().click();
		return new HomePage(this.page);
	}

	async clickContactsPageBreadcrumbsGolovna() {
		await this.locators.getContactsPageBreadcrumbsGolovna().click();
		return new HomePage(this.page);
	}

	async fillNameField() {
		await this.locators.getNameField().fill('Катерина');

	}

	async fillNumberNameField() {
		await this.locators.getNameField().fill('12345');

	}

	async clickSendButton() {
		await this.locators.getSendButton().click();

	}


}

export default ContactsPage;
