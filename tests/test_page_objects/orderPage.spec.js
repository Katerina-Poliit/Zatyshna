import { expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { HEANDING_TEXT, PRODUCT_NAME, COLOR_PRODUCT, PERSON_DATA, DELIVERY_TEXT, MESSAGE_WARNING, MESSAGE_CITY_DROPDOWN, CHECKBOX_MANDATORY, CHECKBOX, PAYMENT_TEXT, CHECKBOX_PAYMENT_TEXT, PLACE_ORDER_BUTTON_TEXT, RANDOM_EMAIL } from "../../helpers/testDataOrderPage.js";
import CatalogPage from "../../page_objects/catalogPage.js";
import QuiltedJacketPage from "../../page_objects/guiltedJacket.js";
import PopupShoppingCartWndowPage from "../../page_objects/pop-upShoppingCartWndow.js";
import OrderPage from "../../page_objects/orderPage.js";
import { test, addProductCard } from "../../fixtures/base.js";




test.describe.skip('orderPage.spec', () => {

    test('TC 04.01.1 Verify that the page contains the heading "Ваше замовлення"', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getHeadingText()).toBeVisible();
        await expect(ogderPage.locators.getHeadingText()).toHaveText(HEANDING_TEXT);

    });

    test('TC 04.01.2 Verify that the page contains a photo of the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getPhotoImages()).toBeVisible();
    });

    test('TC 04.01.3 Verify that the page contains a product name', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getProductName()).toBeVisible();
        await expect(ogderPage.locators.getProductName()).toHaveText(PRODUCT_NAME);

    });

    test('TC 04.01.4 Verify that the page contains the color of the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getColorProduct()).toBeVisible();
        await expect(ogderPage.locators.getColorProduct()).toHaveText(COLOR_PRODUCT);

    });

    test('TC 04.01.5 Verify that the page contains the color product size', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getProductSize()).toBeVisible();
        await expect(ogderPage.locators.getProductSize()).toHaveText('L');

    });

    test('TC 04.01.6 Verify that the page contains the quantity of the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getQuantityProduct()).toBeVisible();
        await expect(ogderPage.locators.getQuantityProduct()).toHaveText('x 1');

    });

    test('TC 04.01.7 Verify that the page contains the cost of the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getCostProduct()).toBeVisible();
        await expect(ogderPage.locators.getCostProduct()).toHaveText('3 990 UAH');

    });

    test('TC 04.01.8 Verify that the page contains an information section about the product', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);

        await expect(ogderPage.locators.getInformationSctionProduct()).toBeVisible();
        await expect(ogderPage.locators.getInformationSctionProduct()).toHaveCSS('background', 'rgb(244, 239, 235) none repeat scroll 0% 0% / auto padding-box border-box');

    });

    test('TC 04.01.10 Verify that the section "Особисті дані".', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getPersonalDataSection()).toBeVisible;
        await expect(ogderPage.locators.getPersonalDataSection()).toHaveText(PERSON_DATA);
    });

    test('TC 04.01.10.1 Verify that the "Особисті дані" section contains the mandatory "Прізвище *"field', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getNameField()).toBeVisible();
        await expect(ogderPage.locators.getNameField()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getNameField()).toHaveCSS('border', '2px solid rgb(124, 125, 128)')

    });

    test('TC 04.01.10.1 Verify that the"Прізвище" field contains only letters, a message was received when entering invalid data', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.filldigitNameField();
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getMessageWarnings()).toBeVisible();
        await expect(ogderPage.locators.getMessageWarnings()).toHaveText(MESSAGE_WARNING);

    });

    test('TC 04.01.11.1 Verify that the "Особисті дані" section contains the mandatory "Ім’я *"field', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getName2Field()).toBeVisible();
        await expect(ogderPage.locators.getName2Field()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getName2Field()).toHaveCSS('border', '1px solid rgb(255, 0, 0)')

    });

    test('TC 04.01.12 Verify that the"Ім’я" field contains only letters, a message was received when entering invalid data', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.filldigitName2Field();
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getMessageWarnings()).toBeVisible();
        await expect(ogderPage.locators.getMessageWarnings()).toHaveText(MESSAGE_WARNING);

    });

    test('TC 04.01.12.1 Verify that the "Особисті дані" section contains the mandatory "Номер телефону  *"field', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getNumberPhoneField()).toBeVisible();
        await expect(ogderPage.locators.getNumberPhoneField()).toHaveCSS('border', '1px solid rgb(0, 0, 0)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getNumberPhoneField()).toHaveCSS('border', '1px solid rgb(255, 0, 0)')

    });

    test('TC 04.01.13 Verify that "Телефон" field contains 9 digits', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillNumberPhoneField();
        await expect(ogderPage.locators.getNumberPhoneField()).toBeTruthy();

    });

    test('TC 04.01.14 Verify that the "Особисті дані" section contains the mandatory "Email  *"field', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getEmailField()).toBeVisible();
        await expect(ogderPage.locators.getEmailField()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getEmailField()).toHaveCSS('border', '1px solid rgb(255, 0, 0)')

    });

    test('TC 04.01.30 Verify that the phone field contains a +38 placeholder', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getNumberPhoneField()).toHaveAttribute('placeholder', '+38(0__)___-__-__')
    });

    test('TC 04.01.40 Verify that the  the email address details are entered by entering a space after the @ sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillSpaceAfterAtEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.41 Verify that the the email address data is entered by putting a space before the @ sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillSpaceBeforeAtEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.42 Verify that the the email address details are entered by putting enter e-mail without a dot in the domain name, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillWithoutDotDomainEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.43 Verify that email address details are entered by putting enter e-mail with a dot in the domain name, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillWihtDotDomainNameEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.44 Verify that the email address details are entered, without the @ sign in the domain name, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillWihtoutAtDotEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.45 Verify that email address details are entered by entering an email without text before the @ sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillWihtoutNameEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.46 Verify that the email address data is entered by entering special characters before the @ sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillSpecialCharactersEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });
    test('TC 04.01.47 Verify that the email address details are entered by entering Cyrillic letters before the @sign, an error message will appear', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillCyrillicLettersEmailField();
        await ogderPage.clickOrderButton();
        await page.waitForTimeout(2000);
        await expect(ogderPage.locators.getMessageEmailField()).toBeTruthy()

    });

    test('TC 04.01.50 Verify that the a section "Інформація про доставку"', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getBlockDelivery()).toBeVisible();
        await expect(ogderPage.locators.getBlockDelivery()).toHaveText(DELIVERY_TEXT)
    });

    test('TC 04.01.51 Verify that the the mandatory dropdown "Обeрить место доставки"', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getPlaceDeliveryDropdown()).toBeVisible();
        await expect(ogderPage.locators.getPlaceDeliveryDropdown()).toHaveAttribute('placeholder', 'Оберіть місто доставки');
        await expect(ogderPage.locators.getPlaceDeliveryDropdown()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getPlaceDeliveryDropdown()).toHaveCSS('border', '1px solid rgb(242, 64, 64)')

    });

    test('TC 04.01.52 Verify that the  user can select a city from the dropdown dropdown by entering the first letters of the delivery city', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillPlaceDeliveryDropdown();
        await page.waitForTimeout(2000);
        await ogderPage.clickChoosingCityDropdown();
        await expect(ogderPage.locators.getPlaceDeliveryDropdown()).toBeAttached();

    });

    test('TC 04.01.53 Verify that the  mandatory dropdown "Оберить вiддленняi"', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.DepartmentDropdown()).toBeVisible();
        await expect(ogderPage.locators.DepartmentDropdown()).toHaveAttribute('placeholder', 'Оберіть відділення');
        await expect(ogderPage.locators.DepartmentDropdown()).toHaveCSS('border', '1px solid rgb(22, 11, 3)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.DepartmentDropdown()).toHaveCSS('border', '1px solid rgb(242, 64, 64)')

    });

    test('TC 04.01.54 Verify that the  user can select a destination from the dropdown dropdown, after selecting the delivery city', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.fillPlaceDeliveryDropdown();
        await page.waitForTimeout(2000);
        await ogderPage.clickChoosingCityDropdown();
        await ogderPage.clickDepartmentDropdown();
        await ogderPage.clickChoosingDepartmentDropdown();
        await expect(ogderPage.locators.DepartmentDropdown()).toBeAttached();

    });

    test('TC 04.01.55 Verify that thedropdown "Обмерить место доставки" does not accept numbers, a warning message has been received', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await ogderPage.filldigitPlaceDeliveryDropdown();
        await expect(ogderPage.locators.getMessageCityDropdown()).toBeVisible()
        await expect(ogderPage.locators.getMessageCityDropdown()).toHaveText(MESSAGE_CITY_DROPDOWN);

    });

    test('TC 04.01.66 Verify that it contains a mandatory checkbox "Я погоджуюсь з договором оферты і політикою конфіденційності"', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getCheckBoxMandatory()).toBeVisible();
        await expect(ogderPage.locators.getCheckBoxMandatory()).toHaveText(CHECKBOX_MANDATORY);
        await expect(ogderPage.locators.getCheckBoxMandatory()).toHaveCSS('border', '0px none rgb(157, 154, 151)');
        await ogderPage.clickOrderButton();
        await expect(ogderPage.locators.getCheckBoxMandatory()).toHaveCSS('border', '0px none rgb(255, 0, 0)')


    });

    test('TC 04.01.67 Verify that the checkbox "Зателефонуйте мені для уточнення деталей замовлення"contains', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getCheckbox()).toBeVisible();
        await expect(ogderPage.locators.getCheckbox()).toHaveText(CHECKBOX);
        await expect(ogderPage.locators.getCheckbox()).toHaveCSS('border', '0px none rgb(157, 154, 151)');

    });

    test('TC 04.01.59 Verify that the is a "Оплата"section.', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getBlockPayment()).toBeVisible();
        await expect(ogderPage.locators.getBlockPayment()).toHaveText(PAYMENT_TEXT);

    });

    test('TC 04.01.60 Verify that the "payment by details", radiobatton, "payment upon receipt", radiobatton are set by default.', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getCheckboxPayment()).toBeVisible();
        await expect(ogderPage.locators.getCheckboxPayment()).toHaveText(CHECKBOX_PAYMENT_TEXT);
        await expect(ogderPage.locators.getCheckboxPayment()).toBeEditable();

    });

    test('TC 04.01.63 Verify that the page contains the "Оформити замовлення"button.', async ({ page, addProductCard }) => {
        const ogderPage = new OrderPage(page);
        await expect(ogderPage.locators.getOrderButton()).toBeVisible();
        await expect(ogderPage.locators.getOrderButton()).toHaveCSS('background', 'rgb(22, 11, 3) none repeat scroll 0% 0% / auto padding-box border-box');
        await expect(ogderPage.locators.getOrderButton()).toHaveText(PLACE_ORDER_BUTTON_TEXT);
        await expect(ogderPage.locators.getOrderButton()).toHaveCSS('cursor', 'pointer');

    });

   test("TC 04.01.64 Verify that thepage opens with information about the successful order, the user clicked on the button'Оформити замовлення'", async ({ page, addProductCard }) => {
    const ogderPage = new OrderPage(page);
    await ogderPage.fillLastNameField();
    await ogderPage.fillNameField();
    await ogderPage.fillNumberPhoneField();
    await ogderPage.fillnewEmailField(RANDOM_EMAIL);
    await ogderPage.fillPlaceDeliveryDropdown();
    await ogderPage.clickChoosingCityDropdown();
    await page.waitForTimeout(2000);
    await ogderPage.clickDepartmentDropdown()
    await ogderPage.clickChoosingDepartmentDropdown();
    await ogderPage.clickCheckBoxMandatory();
    await ogderPage.clickOrderButton();
    await page.waitForTimeout(5000);
    await expect(ogderPage.locators.getSuccessfulOrder()).toBeVisible();

   })







})
