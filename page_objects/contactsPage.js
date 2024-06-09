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
		getMessageRequired: () => this.page.getByText('Поле обовʼязкове до заповнення').first(),
		getEmailField: () => this.page.getByPlaceholder('E-mail'),
		getMessageEmailField: () => this.page.getByText('Будь ласка, введіть дійсну адресу електронної пошти.'),
		getTextarea: () => this.page.getByPlaceholder('Повідомлення'),
		getNumberMenadger: () => this.page.getByText('Зв’язок з менеджером+'),
		getEmailManadger: () => this.page.getByText('Emailzatyshna@kmail.com'),
		getInstagramLink: () => this.page.locator('section').filter({ hasText: 'Зв’язок з менеджером+' }).getByRole('link').nth(2),
		getFacebookLink: () => this.page.locator('section').filter({ hasText: 'Зв’язок з менеджером+' }).getByRole('link').nth(3),
		getMessageSend: () => this.page.locator('div').filter({ hasText: /^Дякуємо, ми переглянемо ваш лист і зв'яжемось з вами в найближчий робочий час\.$/ })




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

	async fillEmailField() {
		await this.locators.getEmailField().fill('sun@gmai.com');

	}

	async fillsensitiveEmailField() {
		await this.locators.getEmailField().fill('sUn@gmai.com');

	}

	async fillHyphenEmailField() {
		await this.locators.getEmailField().fill('sU-n@gmai.com');

	}

	async fillHyphenDomainEmailField() {
		await this.locators.getEmailField().fill('sUn@gmai.c-om');

	}

	async fillwithoutAtEmailField() {
		await this.locators.getEmailField().fill('sUngmai.com');

	}

	async fillwithAtAtEmailField() {
		await this.locators.getEmailField().fill('sUnn@@gmai.com');

	}

	async fillwithDatEmailField() {
		await this.locators.getEmailField().fill('sUn..n@gmai.com');

	}

	async fillwithoutNameEmailField() {
		await this.locators.getEmailField().fill('@gmai.com');

	}

	async fillTextarea() {
		await this.locators.getTextarea().fill('good');

	}



}

export default ContactsPage;
