import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { faker } from '@faker-js/faker'
import { locators } from "./LTLLocators";

export class LTLPage extends CommonPage {

    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }


    async navigate_to_generate_quote() {
        /* Selects LTL From the side menu
        */

        await this.page.locator(locators.ltl_menu_button).click();
        await this.page.locator(locators.ltl_quoting_link).click();

    }

    async fill_origin(origin){
        /*
        Sets Origin Zip Code 
        :param origin: origin zipcode
        */

        await this.page.locator(locators.origin_zipcode_text_field).fill(origin);
        await this.page.getByText('Winston-Salem, NC  USA').click();

    }

    async fill_destination(destination){
        /*
        Sets Destination Zip Code 
        :param destination: destination zipcode
        */

        await this.page.locator(locators.destination_zipcode_text_field).fill(destination);
        await this.page.getByText('Annandale, VA  USA').click();

    }

    async fill_weight(weight){
        /*
        Sets Shipment Weight
        :param weight: weight of shipment
        */

        await this.page.locator(locators.weight_text_field).fill(weight);

    }

    async select_class(ltl_class){
        /*
        Selects class from the drop down menu
        */    
        await this.page.locator(locators.item_description_text_field).click();
        await this.page.locator(locators.class_drop_down_menu).click();
        await this.page.locator('td').filter({ hasText: '50 55 60 65 70 77.5 85 92.5' }).getByRole('combobox').selectOption(ltl_class);

    }

    async select_get_rates() {
        /*
        Selects the get rates button to generate the rate table
        */

        await this.page.locator(locators.get_rates_button).click();
    }
}

