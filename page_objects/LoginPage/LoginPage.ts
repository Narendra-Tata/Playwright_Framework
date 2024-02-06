import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./LoginPageLocators";
import { testData } from "../../tests/testData";

export class LoginPage extends CommonPage {

    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }

    async goTo() {
        /* 
        Navigates user to the main login page
        */
        await this.page.goto(testData.dev);
    }

    async validLogin(username, password) {
        /*
        Method to allow for a valid login
        
        :param username: user email address
        :param password: user password
        */
        await this.page.locator(locators.login_email_text_field).fill(username);
        await this.page.locator(locators.login_password_text_field).fill(password);
        await this.page.locator(locators.login_login_button).click()
    }

}
