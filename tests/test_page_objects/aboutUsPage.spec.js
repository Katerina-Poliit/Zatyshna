import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import AboutUsPage from "../../page_objects/aboutUsPage.js";
import { ABOUT_US_PAGE_URL, HEANDING_TEXT, ABOUT_AS_TEXT, HISTORY_TEXT } from "../../helpers/testDataAboutUs.js";
import {BASE_URL} from "../../helpers/testDataMainPage.js";

test.describe('About Us Page Tests', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.open();
        await homePage.clickAboutUsBtn();
        await page.waitForTimeout(2000);
        const aboutUsPage = new AboutUsPage(page);
    });

    test('TC 07.01.1  Verify that the "About Us" block is contained', async ({ page }) => {

        const aboutUsPage = new AboutUsPage(page);
        await expect(page).toHaveURL(ABOUT_US_PAGE_URL);

    });

    test('TC 07.01.2  Verify that the"Про нас" page contains the title "Про Zatyshna', async ({ page }) => {

        const aboutUsPage = new AboutUsPage(page);
        await expect(aboutUsPage.locators.getHeading()).toBeVisible();
        await expect(aboutUsPage.locators.getHeading()).toHaveText(HEANDING_TEXT);

    });

    test('TC 07.01.5  Verify that the"Про нас" page contains the images', async ({ page }) => {

        const aboutUsPage = new AboutUsPage(page);
        await expect(aboutUsPage.locators.getImages()).toBeTruthy();

    });

    test('TC 07.01.4  Verify that the "Про нас" contains a text block "Про нас"', async ({ page }) => {

        const aboutUsPage = new AboutUsPage(page);
        await expect(aboutUsPage.locators.getAboutAsHeanding()).toBeVisible();
        await expect(aboutUsPage.locators.getAboutAsHeanding()).toHaveText(ABOUT_AS_TEXT);

    });

    test('TC 07.01.4  Verify that the "Про нас" contains a text block "Історія створення"', async ({ page }) => {

        const aboutUsPage = new AboutUsPage(page);
        await expect(aboutUsPage.locators.getHistiryCreationHeanding()).toBeVisible();
        await expect(aboutUsPage.locators.getHistiryCreationHeanding()).toHaveText(HISTORY_TEXT);

    });

    test('TC 07.01.5  Verify that the "Про нас" page contains bread crumbs', async ({ page }) => {

        const aboutUsPage = new AboutUsPage(page);
        await expect(aboutUsPage.locators.getAboutUsBreadcrumbs()).toBeVisible();


    });

    test('TC 07.01.7  Verify that theClick through the breadcrumbs to the Main page', async ({ page }) => {

        const aboutUsPage = new AboutUsPage(page);
        await aboutUsPage.clickMainBreadcrumbs();
        await page.waitForTimeout(2000);
        await expect(page).toHaveURL(BASE_URL);

    });


})