import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import ContactsPage from "../../page_objects/contactsPage.js";
import {HEADING_TEXT, HEADING_BLOCK_TEXT} from "../../helpers/testDataContact.js";


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

})

