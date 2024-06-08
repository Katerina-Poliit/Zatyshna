import AboutUsPage from "./aboutUsPage";
import CatalogPage from "./catalogPage";
import ContactsPage from "./contactsPage";
import ProductPage from "./productPage";

class HomePage {
	constructor(page) {
		this.page = page;
	}

	locators = {
		getHeader: () => this.page.getByRole('banner'),
		getLogo: () => this.page.getByRole('banner').getByRole('link', { name: 'Zatyshna' }),
		getGolovnaBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Головна' }),
		getCatalogBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Каталог' }),
		getAboutUsBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Про нас' }),
		getContactsBtn: () => this.page.getByRole('banner').getByRole('link', { name: 'Контакти' }),
		getCartBtn: () => this.page.getByRole('link', { name: 'Кошик' }),
		getNoveltiesSection: () => this.page.getByText('НовинкиФутболка з декоративними ...790 UAHФутболка Obsessed with fa...650 UAH'),
		getNoveltiesSectionHeader: () => this.page.getByRole('heading', { name: 'Новинки' }),
		getNoveltiesSectionPagination: () => this.page.locator('.swiper-pagination'),
		getNextBtn: () => this.page.locator('button.sc-jPQKBn'),
		getPrevBtn: () => this.page.locator('.sc-hnmNKk').last(),
		getButtonsHeader: (pageName) => this.page.getByRole('banner').getByRole('link', { name: pageName}),
		getCatalogBlackBtn: () => this.page.getByRole('main').getByRole('link', { name: 'Каталог' }),
		getSearchBtn: () => this.page.getByRole('banner').getByRole('button'),
		getIconCartBtn: () => this.page.locator('.sc-ifysJV'),
		getSearchField: () => this.page.getByRole('banner').locator('form'),
		getSearchFieldPlaceholder: () => this.page.getByPlaceholder('Шукати'),
		getSearchFieldPlaceholderIcon: () => this.page.locator('svg[type="input"]'),
		getSearchFieldCrossBtn: () => this.page.getByRole('banner').getByRole('button').first(),
		getDropdownValidData: () => this.page.locator('.sc-ckdFFX'),
		getSearchMessage: () => this.page.getByText('За запитом нічого не знайдено!'),
		getCategorySection: () => this.page.getByText('КатегоріїФутболкиКостюмиСвітшотиХудіШтаниПоказати більше'),
		getCategorySectionHeader: () => this.page.getByRole('heading', { name: 'Категорії' }),
		getT_ShirtsCategory: () => this.page.getByRole('link', { name: 'Футболки' }),
		getSuitsCategory: () => this.page.getByRole('link', { name: 'Костюми' }),
		getSweatshirtsCategory: () => this.page.getByRole('link', { name: 'Світшоти' }),
		getHoodieCategory: () => this.page.getByRole('link', { name: 'Худі', exact: true }),
		getPantsCategory: () => this.page.getByRole('link', { name: 'Штани' }),
		getCategoryName: () => this.page.locator('.sc-gHWTLx'),
		getShowMoreLink: () => this.page.getByRole('link', { name: 'Показати більше' }),
		getZatyshnaBrandBanner: () => this.page.locator('section').filter({ hasText: 'Zatyshna' }),
		getZatyshnaBrandBannerDescriptionText: () => this.page.getByRole('heading', { name: 'Zatyshna' }),
		getZatyshnaBrandBannerAdditionalText: () => this.page.getByText('Створений для жінок, що цінують комфорт. Стильно та зручно - це про нас і про тебе'),
		getZatyshnaBrandBannerImage: () => this.page.locator('section').filter({ hasText: 'Zatyshna' }).locator('div').nth(2),
		getSubscriptionSection: () => this.page.locator('div').filter({ hasText: /^Підписуйся та будь в курсі усіх новинок та знижок!Надіслати$/ }).first(),
		getSubscriptionSectionSendBtn: () => this.page.getByRole('button', { name: 'Надіслати' }),
		getSubscriptionSectionField: () => this.page.getByPlaceholder('Email'),
		getSubscriptionSectionFieldMessage: () => this.page.getByText('Ви успішно підписалися на сповіщення!'),
		getSubscriptionSectionFieldErrorMessage: () => this.page.getByText('Будь ласка, введіть дійсну адресу електронної пошти'),
		getSubscriptionSectionImg: () => this.page.locator('section').filter({ hasText: 'Підписуйся та будь в курсі усіх новинок та знижок!Надіслати' }).locator('div').nth(1),
		getSubscriptionSectionText: () => this.page.getByRole('heading', { name: 'Підписуйся та будь в курсі усіх новинок та знижок!' }),
		getFooter: () => this.page.getByText('ZatyshnaГоловнаКаталогПро насКонтактиЗв’язатися з намиЗвертайтесь до нас з будь-якихдодаткових питань+'),
		getContactUsBlock: () => this.page.getByText('Зв’язатися з намиЗвертайтесь до нас з будь-якихдодаткових питань+'),
		getContactUsBlockText: () => this.page.getByText('Звертайтесь до нас з будь-якихдодаткових питань'),
		getContactUsPhoneNumber: () => this.page.getByRole('link', { name: '+' }),
		getFooterGolovnaBtn: () => this.page.getByRole('contentinfo').getByRole('link', { name: 'Головна' }),
		getFooterCatalogBtn: () => this.page.getByRole('contentinfo').getByRole('link', { name: 'Каталог' }),
		getFooterAboutUsBtn: () => this.page.getByRole('contentinfo').getByRole('link', { name: 'Про нас' }),
		getFooterContactsBtn: () => this.page.getByRole('contentinfo').getByRole('link', { name: 'Контакти' }),
		getFooterLogo: () => this.page.getByRole('contentinfo').getByRole('link', { name: 'Zatyshna' }),
		getMainPageImg: () => this.page.locator('div').filter({ hasText: /^Каталог$/ }),
		getFacebookBtnLink: () => this.page.locator('div').filter({ hasText: /^Zatyshna$/ }).getByRole('link').nth(1),
		getInstagramBtnLink: () => this.page.locator('div').filter({ hasText: /^Zatyshna$/ }).getByRole('link').nth(2),
		getGoTopLink: () => this.page.getByRole('button').nth(1),
		getScrollToTopBtnIcon: () => this.page.locator('.sc-kZOtbI'),
		getOpenProductCart: () => this.page.getByRole('link', { name: 'Футболка Obsessed with fa...' })
	};

	async open() {
		await this.page.goto("/");
	}

	async clickNextBtn() {
		await this.locators.getNextBtn().click();
		return this;
	}

	async clickPrevBtn() {
		await this.locators.getPrevBtn().click();
		return this;
	}

	async clickBtnHeader(pageName) {
		await this.locators.getButtonsHeader(pageName).click();
		return this;
	}

	async clickgetContactsBtn() {
		await this.locators.getContactsBtn().click();
		return new ContactsPage(this.page);
	}

	async clickCatalogBlackBtn() {
		await this.locators.getCatalogBlackBtn().click();
		return new CatalogPage(this.page);
	}

	async clickSearchBtn() {
		await this.locators.getSearchBtn().click();
		return this;
	}

	async typeSearchField() {
		await this.locators.getSearchField().type('a');
	}

	async clickSearchFieldCrossBtn() {
		await this.locators.getSearchFieldCrossBtn().click();
		return this;
	}

	async typeSearchFieldValidData() {
		await this.locators.getSearchField().type('фут');
	}

	async typeSearchFieldInvalidData() {
		await this.locators.getSearchField().type('арб');
	}

	async clickT_ShirtsCategory() {
		await this.locators.getT_ShirtsCategory().click();
		return new CatalogPage(this.page);
	}

	async clickSuitsCategory() {
		await this.locators.getSuitsCategory().click();
		return new CatalogPage(this.page);
	}

	async clickSweatshirtsCategory() {
		await this.locators.getSweatshirtsCategory().click();
		return new CatalogPage(this.page);
	}

	async clickHoodieCategory() {
		await this.locators.getHoodieCategory().click();
		return new CatalogPage(this.page);
	}

	async clickPantsCategory() {
		await this.locators.getPantsCategory().click();
		return new CatalogPage(this.page);
	}

	async clickShowMoreLink() {
		await this.locators.getShowMoreLink().click();
		return new CatalogPage(this.page);
	}

	async clickSubscriptionSectionSendBtn() {
		await this.locators.getSubscriptionSectionSendBtn().click();
	}

	async typeSubscriptionSectionField(letter_a) {
		await this.locators.getSubscriptionSectionField().type(letter_a);
	}

	async typeSubscriptionSectionFieldEmail(existing_email) {
		await this.locators.getSubscriptionSectionField().type(existing_email);
	}

	async typeSubscriptionSectionFieldEmail_2(space_after_the_at_sign) {
		await this.locators.getSubscriptionSectionField().type(space_after_the_at_sign);
	}

	async typeSubscriptionSectionFieldEmail_3(space_before_the_at_sign) {
		await this.locators.getSubscriptionSectionField().type(space_before_the_at_sign);
	}

	async typeSubscriptionSectionFieldEmail_4(no_dot_in_the_domain_name) {
		await this.locators.getSubscriptionSectionField().type(no_dot_in_the_domain_name);
	}

	async typeSubscriptionSectionFieldEmail_5(without_at_sign) {
		await this.locators.getSubscriptionSectionField().type(without_at_sign);
	}

	async typeSubscriptionSectionFieldEmail_6(without_text_before_at_sign) {
		await this.locators.getSubscriptionSectionField().type(without_text_before_at_sign);
	}

	async typeSubscriptionSectionFieldEmail_7(special_characters_before_at_sign) {
		await this.locators.getSubscriptionSectionField().type(special_characters_before_at_sign);
	}

	async typeSubscriptionSectionFieldEmail_8(сyrillic_letters_before_at_sign) {
		await this.locators.getSubscriptionSectionField().type(сyrillic_letters_before_at_sign);
	}

	async typeSubscriptionSectionFieldEmail_9(invalid_email) {
		await this.locators.getSubscriptionSectionField().type(invalid_email);
	}

	async typeSubscriptionSectionFieldEmail_10(without_domain_name) {
		await this.locators.getSubscriptionSectionField().type(without_domain_name);
	}

	async typeSubscriptionSectionFieldEmail_11(signed_email) {
		await this.locators.getSubscriptionSectionField().type(signed_email);
	}

	async clickFooterCatalogBtn() {
		await this.locators.getFooterCatalogBtn().click();
		return new CatalogPage(this.page);
	}

	async clickFooterAboutUsBtn() {
		await this.locators.getFooterAboutUsBtn().click();
		return new AboutUsPage(this.page);
	}

	async clickFooterContactsBtn() {
		await this.locators.getFooterContactsBtn().click();
		return new ContactsPage(this.page);
	}

	async clickFooterLogo() {
		await this.locators.getFooterLogo().click();
		return this;
	}

	async clickScrollToTopBtnIcon() {
		await this.locators.getScrollToTopBtnIcon().click();
		return this;
	}

	async clickOpenProductCart() {
		await this.locators.getOpenProductCart().click();
		return new ProductPage(this.page);
	}

}

export default HomePage;
