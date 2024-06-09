import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import ContactsPage from "../../page_objects/contactsPage.js";
import { HEADING_TEXT, HEADING_BLOCK_TEXT, MESSAGE_REQUIRED, VALID_MESSEGE_EMAIL, SEND_BUTTON_TEXT, PHONE_MANADGER_TEXT, EMAIL_MANADGET_TEXT } from "../../helpers/testDataContact.js";


test.describe('Conact Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.clickgetContactsBtn();
        await page.waitForTimeout(2000);
        const contactPage = new ContactsPage(page);
    });

    test('TC 06.01.1 Verify that the page contains the "Контакти" header', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getContactsPageHeader()).toBeVisible();
        await expect(contactPage.locators.getContactsPageHeader()).toHaveText(HEADING_TEXT);


    });

    test('TC 06.01.2 Verify that the page contains the block "За язатися з нами', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getHeadingBlock()).toBeVisible();
        await expect(contactPage.locators.getHeadingBlock()).toHaveText(HEADING_BLOCK_TEXT);

    });

    test('TC 06.01.4 Verify that the "За язатися з нами" block contains the "Имя" field', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getNameField()).toBeVisible();
        await expect(contactPage.locators.getNameField()).toHaveAttribute('placeholder', 'Імʼя');

    });

    test('TC 06.01.3 Verify that the  "Имя" field accepts letters', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillNameField()
        await expect(contactPage.locators.getNameField()).toBeVisible();

    });


    test('TC 06.01.5 Verify that the  "Имя" field does not accept numbers, a validation message has been received', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillNumberNameField();
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageNameField()).toBeVisible();

    });

    test('TC 06.01.5.1 Verify that the "Имя" field is required', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageRequired()).toBeVisible();
        await expect(contactPage.locators.getMessageRequired()).toHaveText(MESSAGE_REQUIRED);
        await expect(contactPage.locators.getNameField()).toHaveCSS('border', '2px solid rgb(124, 125, 128)')

    });

    test('TC 06.01.6 Verify that the "За язатися з нами" block contains the "Email" field', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getEmailField()).toBeVisible();
        await expect(contactPage.locators.getEmailField()).toHaveAttribute('placeholder', 'E-mail');

    });

    test('TC 06.01.10 Verify that the "Email" field is required', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageRequired()).toBeVisible();
        await expect(contactPage.locators.getMessageRequired()).toHaveText(MESSAGE_REQUIRED);
        await expect(contactPage.locators.getNameField()).toHaveCSS('border', '2px solid rgb(124, 125, 128)')

    });

    test('TC 06.01.7 Verify that the"E-mail" field accepts valid values', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillEmailField();
        await expect(contactPage.locators.getEmailField()).toBeVisible();

    });

    test('TC 06.01.11 Verify that the "E-mail" fields are not case sensitive', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillsensitiveEmailField();
        await expect(contactPage.locators.getEmailField()).toBeVisible();

    });

    test('TC 06.01.12 Verify that the "E-mail" field  accept an email with a hyphen in the users name', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillHyphenEmailField();
        await expect(contactPage.locators.getEmailField()).toBeVisible();

    });

    test('TC 06.01.13 Verify that the  "E-mail" field does not accept an email with a hyphen in the domain part, a warning message has been received', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillHyphenDomainEmailField();
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageEmailField()).toBeVisible();
        await expect(contactPage.locators.getMessageEmailField()).toHaveText(VALID_MESSEGE_EMAIL);

    });

    test('TC 06.01.16 Verify that the "E-mail" field does not accept an email without the @ symbol, a warning message has been received', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillwithoutAtEmailField();
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageEmailField()).toBeTruthy();


    });

    test('TC 06.01.17 Verify that the "E-mail" field does not accept an email with 2 @ symbol, a warning message has been received', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillwithAtAtEmailField();
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageEmailField()).toBeTruthy();

    });

    test('TC 06.01.18 Verify that the "E-mail" field does not accept an email with two dots in a row in the user name', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillwithDatEmailField();
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageEmailField()).toBeTruthy();

    });

    test('TC 06.01.20 Verify that the"E-mail" field does not accept an email without a username', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillwithoutNameEmailField();
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageEmailField()).toBeTruthy();

    });

    test('TC 06.01.25 Verify that the "За язатися з нами" block contains the textarea field', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getTextarea()).toBeVisible();
        await expect(contactPage.locators.getTextarea()).toHaveAttribute('placeholder', 'Повідомлення');

    });

    test('TC 06.01.25 Verify that the text area is a required field', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageRequired()).toBeVisible();
        await expect(contactPage.locators.getMessageRequired()).toHaveText(MESSAGE_REQUIRED);
        await expect(contactPage.locators.getNameField()).toHaveCSS('border', '2px solid rgb(124, 125, 128)')

    });

    test('TC 06.01.26 Verify that the page contains the "Вiдправити" button', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getSendButton()).toBeVisible();
        await expect(contactPage.locators.getSendButton()).toHaveCSS('cursor', 'pointer');
        await expect(contactPage.locators.getSendButton()).toHaveCSS('background', 'rgb(22, 11, 3) none repeat scroll 0% 0% / auto padding-box border-box');
        await expect(contactPage.locators.getSendButton()).toHaveText(SEND_BUTTON_TEXT);
    });

    test('TC 06.01.28 Verify that the  page contains the managers phone number', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getNumberMenadger()).toBeVisible();
        await expect(contactPage.locators.getNumberMenadger()).toHaveText(PHONE_MANADGER_TEXT);
    });

    test('TC 06.01.29 Verify that the  page contains the managers email number', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getEmailManadger()).toBeVisible();
        await expect(contactPage.locators.getEmailManadger()).toHaveText(EMAIL_MANADGET_TEXT);
    });

    test('TC 06.01.30 Verify that the page contains links to social networks Instagram', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getInstagramLink()).toBeVisible();
        await expect(contactPage.locators.getInstagramLink()).toHaveCSS('cursor', 'pointer');
    });

    test('TC 06.01.31 Verify that the page contains links to social networks Facebook', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await expect(contactPage.locators.getFacebookLink()).toBeVisible();
        await expect(contactPage.locators.getFacebookLink()).toHaveCSS('cursor', 'pointer');
    });

    test('TC 06.01.27 message has been sent successfully, and the corresponding information message appears', async ({ page }) => {
        const contactPage = new ContactsPage(page);
        await contactPage.fillNameField();
        await contactPage.fillEmailField();
        await contactPage.fillTextarea();
        await contactPage.clickSendButton();
        await expect(contactPage.locators.getMessageSend()).toBeVisible();

    });
})

