class AboutUsPage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getAboutUsBreadcrumbs: () => this.page.getByRole('main').getByRole('link', { name: 'Про нас' })
	};

	// async clickDropdownSorting() {
	// 	await this.locators.getDropdownSorting().click();
	// 	return this;
	// }

}

export default AboutUsPage;