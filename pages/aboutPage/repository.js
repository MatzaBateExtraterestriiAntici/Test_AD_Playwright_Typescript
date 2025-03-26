// Listed below are all locators with their possible strategies and values that can be used
export const aboutPage_Repository = {
    
  // Hamburger button (menu)
    hamburger_button_ElementType: "div",
    hamburger_button_ClassName: "." + "bm-burger-button",
    
    // "Navigation" menu
    navigation_Menu_ElementType: "div", 
    navigation_Menu_ClassName: "." + "bm-menu",
    navigation_Menu_Style: "height: 100%; box-sizing: border-box; overflow: auto;",

    // "Navigation" menu LIST of items
    navigation_Menu_List_ElementType: "div",
    navigation_Menu_List_ClassName: "." + "bm-item-list",

    // "All Items" button
    navigation_Menu_AllItems_Button_ElementType: "a",
    navigation_Menu_AllItems_Button_ClassName: "." + "bm-item" + "." + "menu-item",
    navigation_Menu_AllItems_Button_ID: "#" + "inventory_sidebar_link",
    navigation_Menu_AllItems_Button_Text: "Items",
    navigation_Menu_AllItems_Button_Href: "./inventory.html",

    // "About" button
    navigation_Menu_About_Button_ElementType: "a",
    navigation_Menu_About_Button_ClassName: "." + "bm-item" + "." + "menu-item",
    navigation_Menu_About_Button_ID: "#" + "about_sidebar_link",
    navigation_Menu_About_Button_Text: "About",
    navigation_Menu_About_Button_Href: "https://saucelabs.com/",

    // "Logout" button
    navigation_Menu_Logout_Button_ElementType: "a",
    navigation_Menu_Logout_Button_ClassName: "." + "bm-item" + "." + "menu-item",
    navigation_Menu_Logout_Button_ID: "#" + "logout_sidebar_link",
    navigation_Menu_Logout_Button_Text: "Logout",
    navigation_Menu_Logout_Button_Href: "./index.html",

    // "Reset App State" button
    navigation_Menu_ResetApp_Button_ElementType: "a",
    navigation_Menu_ResetApp_Button_ClassName: "." + "bm-item" + "." + "menu-item",
    navigation_Menu_ResetApp_Button_ID: "#" + "reset_sidebar_link",
    navigation_Menu_ResetApp_Button_Text: "Reset App State",

    // Navigation" menu "X" button
    navigation_Menu_X_Button_Container_ElementType: "button",
    navigation_Menu_X_Button_Container_ClassName: "." + "bm-cross-button",

    // Navigation" menu "X" button
    navigation_Menu_X_Button_ElementType: "button",
    navigation_Menu_X_Button_Text: "Close Menu",

    // Navigation" menu "X" button
    sauceLab_Header_Image_ElementType: "img",
    sauceLab_Header_Image_ClassName: "." + "MuiBox-root" + "." + "css-lwb5go",
    sauceLab_Header_Image_Src: "/images/logo.svg"

    // Other elements to be added below
  };