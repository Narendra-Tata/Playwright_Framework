
export const locators = {
    ltl_menu_button: "//a[@id='ltl-menu']",
    ltl_quoting_link: "//span[normalize-space()='LTL Quoting']",
    ltl_saved_quotes_link: "//span[normalize-space()='Saved Quotes']",
    expected_ship_date: "//input[@class='date-picker k-input']",
    origin_zipcode_text_field: "//input[@class='form-control postal-code origin']",
    destination_zipcode_text_field: "//input[@class='form-control postal-code']",
    customer_text_field: "//input[@id='customerinput']",
    unit_type_drop_down_menu: "//tbody/tr/td[2]/select[1]",
    item_description_text_field: "//tbody/tr/td[3]/input[1]",
    number_of_pieces_text_field: "//tbody/tr/td[4]/input[1]",
    weight_text_field: "//input[@id='LTLWeight']",
    dimensions_length_text_field: "//input[@placeholder='L']",
    dimenstions_width_text_field: "//input[@placeholder='W']",
    dimenstions_height_text_field: "//input[@placeholder='H']",
    nmfc_text_field: "//tbody/tr/td[1]/input[1]",
    class_drop_down_menu: "//tbody/tr/td[8]/select[1]",
    delete_button: "//button[@class='btn btn-xs btn-danger']",
    add_new_item_button: "//button[@title='Add Load Item']//i[@class='fa fa-plus']",
    get_rates_button: "//button[normalize-space()='Get Rates']",

    //Hazmat Popover
    hazmat_popover_open_button: "//button[contains(@class,'glyphicon glyphicon-pencil')]",
    hazmat_check_box: "//input[@id='QuoteHazmat']",
    hazmat_form_un_number_text_field: "//input[@id='UNNumber']",
    hazmat_form_packing_group_drop_down_menu: "//div[@class='modal-body']//div[2]//select[1]",
    hazmat_form_hazard_class_drop_down_menu: "//div[3]//select[1]",
    hazmat_form_piece_description_text_field: " //div[4]//select[1]",
    hazmat_form_emergenct_contact_number_text_field: "//input[@id='emergencyContactNumber']",
    hazmat_form_save_button: "//button[contains(@class,'btn btn-primary')][normalize-space()='Save']",
    hazmat_form_cancel_button: "//button[contains(@class,'btn btn-light')]",
    hazmat_form_x_button: "//div[@id='Hazardous-Material-Detail-Quote']//button[contains(@aria-label,'Close')]"
 
}
