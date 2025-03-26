// Listed below are all locators with their possible strategies and values that can be used
export const checkoutPage_Repository = {

  ///// CHECKOUT PAGE ONE

    // "Checkout HEADER"
    checkoutItem_Header_ElementType: "div",
    checkoutItem_Header_ClassName: "." + "subheader",
    checkoutItem_Header_Text: "Checkout: Your Information",

    // "Checkout BACK" button
    checkoutItem_BackButton_ElementType: "a",
    checkoutItem_BackButton_ClassName: "." + "cart_cancel_link" + "." + "btn_secondary",
    checkoutItem_BackButton_Text: "CANCEL",
    checkoutItem_BackButton_Href: "./cart.html",
    
    // "Checkout CONTINUE" button
    checkoutItem_ContinueButton_ElementType: "input",
    checkoutItem_ContinueButton_ClassName: "." + "btn_primary" + "." + "cart_button",
    checkoutItem_ContinueButton_Value: "CONTINUE",
    checkoutItem_ContinueButton_Type: "submit",

    // "Checkout FIRST NAME" input
    checkoutItem_FirstNameInput_ElementType: "input",
    checkoutItem_FirstNameInput_ID: "#" + "first-name",
    checkoutItem_FirstNameInput_ClassName: "." + "form_input",
    checkoutItem_FirstNameInput_Placehoder: "First Name", 
    checkoutItem_FirstNameInput_Value: null, // by default
    checkoutItem_FirstNameInput_Type: "text",

    // "Checkout LAST NAME" input
    checkoutItem_LastNameInput_ElementType: "input",
    checkoutItem_LastNameInput_ID: "#" + "last-name",
    checkoutItem_LastNameInput_ClassName: "." + "form_input",
    checkoutItem_LastNameInput_Placehoder: "Last Name", 
    checkoutItem_LastNameInput_Value: null, // by default
    checkoutItem_LastNameInput_Type: "text",

    // "Checkout POSTAL CODE" input
    checkoutItem_PostalCodeInput_ElementType: "input",
    checkoutItem_PostalCodeInput_ID: "#" + "postal-code",
    checkoutItem_PostalCodeInput_ClassName: "." + "form_input",
    checkoutItem_PostalCodeInput_Placehoder: "Zip/Postal Code", 
    checkoutItem_PostalCodeInput_Value: null, // by default
    checkoutItem_PostalCodeInput_Type: "text",

  ///// CHECKOUT PAGE TWO

    // "Checkout OVERVIEW HEADER"
    checkoutItem_Header_ElementType: "div",
    checkoutItem_Header_ClassName: "." + "subheader",
    checkoutItem_Header_Text: "Checkout: Overview",

    // "Checkout Items" entire list
    checkoutItem_Overview_ListOfElements_ElementType: "div",
    checkoutItem_Overview_ListOfElements_ClassName: "." + "cart_list",

    // "Checkout Items" individial elements (each)
    checkoutItem_Overview_Element_ElementType: "div",
    checkoutItem_Overview_Element_ClassName: "." + "cart_item",
    
    // "Checkout Items" individial elements (each) quantity
    checkoutItem_Overview_ElementQuantity_ElementType: "div",
    checkoutItem_Overview_ElementQuantity_ClassName: "." + "summary_quantity",

    // "Checkout Items" individial elements (each) name of product
    checkoutItem_Overview_ElementName_ElementType: "div",
    checkoutItem_Overview_ElementName_ClassName: "." + "inventory_item_name",

    // "Checkout Items" individial elements (each) desccription of product
    checkoutItem_Overview_ElementDescription_ElementType: "div",
    checkoutItem_Overview_ElementDescription_ClassName: "." + "inventory_item_desc",

    // "Checkout Items" individial elements (each) desccription of product
    checkoutItem_Overview_ElementPrice_ElementType: "div",
    checkoutItem_Overview_ElementPrice_ClassName: "." + "inventory_item_price",

    // "Checkout OVERVIEW FINISH" button
    checkoutItem_Overview_FinishButton_ElementType: "a",
    checkoutItem_Overview_FinishButton_ClassName: "." + "btn_action" + "." + "cart_button",
    checkoutItem_Overview_FinishButton_Text: "FINISH",
    checkoutItem_Overview_FinishButton_Href: "./checkout-complete.html"

    // Other elements to be added below
  };