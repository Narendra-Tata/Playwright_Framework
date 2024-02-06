import test, { expect } from "../base_fwk/fixtures/baseTest"
import { testData } from "./testData";
test.describe('LTL Regression Testing', () => {

  test("As an ATGFr8 User I can generate rates", async ({ page, loginPage, ltlPage }, testinfo) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);

    await ltlPage.navigate_to_generate_quote();
    await ltlPage.fill_origin("27101");
    await ltlPage.fill_destination("22003");
    await ltlPage.fill_weight("250");
    await ltlPage.select_class("77.5");
    await ltlPage.select_get_rates();

    page.close();

  });

  test("As an ATGFr8 User I can save a quote and view it in saved quotes", async ({ page, loginPage, ltlPage }, testinfo) => {
  /*1. Log in to ATGFR8
  2. Locate LTL on the side menu 
  3. Select LTL quoting
  4. Fill out the origin, destination, weight, class (these are the minimum fields required to be filled out in order to get rates)
  5. Select 'Get Rates'
  6. Select 'Save Quote' on any rate you wish to save
  7. Exit the LTL Modal
  8. Select 'Saved Quotes' on the LTL side bar menu
  9. The quote you saved should appear on the top of the list of saved quotes */

  });

  test("As an ATGFr8 User I can select a quote and edit fields", async ({ page, loginPage, ltlPage }, testinfo) => {
/*1. Log in to ATGFR8
  2. Locate LTL on the side menu 
  3. Select LTL quoting
  4. Fill out the origin, destination, weight, class (these are the minimum fields required to be filled out in order to get rates)
  5. Select 'Get Rates' 
  6. Select 'Select Quote', now the page will redirect to the order details page
  7. Input a customer in the 'Customer' field 
  8. Scroll to the Stops section and select the 'Edit' button
  9. A "Shipment Details Have Changed" will appear, select 'Close'
  10.Input a address, contact name, phone number, Item Description, Dimensions, Date, and Shipping Hours Open and Close
  11. Select 'Done'
  12. Do the same thing for the second stop
  13. Select the big 'Save' button */
  });

  test("As an ATGFr8 Admin I can view saved quotes without an assigned customer on the saved quotes page ", async ({ page, loginPage, ltlPage }, testinfo) => {
 /*1. Log in to ATGFR8 with admin credentials 
  2. Locate LTL on the side menu
  3. Select 'Saved Quotes' on the LTL side bar menu
  4. View saved quptes without a customer attached to them */  });

  test("As an ATGFr8 User after I create an order from a saved quote, the quote appears in quote history", async ({ page, loginPage, ltlPage }, testinfo) => {
/*1. Log in to ATGFR8 with admin credentials 
    2. Locate LTL on the side menu
    3. Select 'Saved Quotes' on the LTL side bar menu
    4. Select 'History' on the Saved Quotes modal
    */
  });

}) 
