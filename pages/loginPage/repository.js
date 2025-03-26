// Listed below are all locators with their possible strategies and values that can be used
export const loginPage_Repository = {
    // Page login logo
    loginLogo_ElementType: "div",
    loginLogo_ClassName: "." + "login_logo",
    
    // "Login" container
    login_Container_ElementType: "div", 
    login_Container_ClassName: "." + "form_column",
    login_Container_ID: "#" + "login_button_container",

    // "Login" box (below "Login" container)
    login_Box_ElementType: "div",
    login_Box_ClassName: "." + "login-box",

    // "UserName" input box
    userName_Input_ElementType: "input",
    userName_Input_ClassName: "." + "form_input",
    userName_Input_ID: "#" + "user-name",
    userName_Input_Type: "text",
    userName_Input_Placeholder: "Username",

    // "PassWord" input box
    password_Input_ElementType: "input",
    password_Input_ClassName: "." + "form_input",
    password_Input_ID: "#" + "password",
    password_Input_Type: "password",
    password_Input_Placeholder: "Password",

    // "Submit" button 
    submit_Button_ElementType: "input",
    submit_Button_ClassName: "." + "btn_action",
    submit_Button_ID: "#" + "login-button", 
    submit_Button_Value: "LOGIN",

    // "Login credetials USERNAMES" text area
    loginUserNames_Area_ElementType: "div",
    loginUserNames_Area_ClassName: "." + "login_credentials",
    loginUserNames_Area_ID: "#" + "login_credentials",
    
    // "Login credetials PASSWORD" text area
    loginPasswords_Area_ElementType: "div",
    loginPasswords_Area_ClassName: "." + "login_password",

    // Other elements to be added below
  };