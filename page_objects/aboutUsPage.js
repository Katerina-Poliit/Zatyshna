import HomePage from "./homePage";

class AboutUsPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getAboutUsBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Про нас' }),
		getHeading: () => this.page.getByRole('heading', { name: 'Про Zatyshna' }),
		getImages: () => this.page.locator('.sc-iYqdhF.ePzsxv'),
        getAboutAsHeanding: () => this.page.getByRole('heading', { name: 'Про нас' }),
		getHistiryCreationHeanding: () => this.page.getByRole('heading', { name: 'Історія створення' }),
		getMainBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Головна' }),
	};

	async clickMainBreadcrumbs() {
		await this.locators.getMainBreadcrumbs().click();
		return new HomePage(this.page);
	}

}

export default AboutUsPage;