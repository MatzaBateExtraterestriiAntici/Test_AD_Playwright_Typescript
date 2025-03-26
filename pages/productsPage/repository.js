// Listed below are all locators with their possible strategies and values that can be used
export const productsPage_Repository = {
    // Page label (header logo)
    productLabel_ElementType: "div",
    productLabel_ClassName: "." + "product_label",
    productLabel_Text: "product_label",
    
    // "Inventory" container
    inventory_Container_ElementType: "div", 
    inventory_Container_ClassName: "." + "inventory_container",
    inventory_Container_ID: "#" + "inventory_container",

    // "Inventory" list (below "Login" container)
    inventory_List_ElementType: "div",
    inventory_List_ClassName: "." + "inventory_list",

    // "Inventory ITEM" individual card
    inventoryItem_Card_ElementType: "div",
    inventoryItem_Card_ClassName: "." + "inventory_item",

    inventoryItem_PriceBar_ElementType: "div",
    inventoryItem_PriceBar_ClassName: "." + "pricebar",

    inventoryItem_PriceBar_Price_ElementType: "div",
    inventoryItem_PriceBar_Price_ClassName: "." + "inventory_item_price",

    inventoryItem_PriceBar_AddToCart_Button_ElementType: "button",
    inventoryItem_PriceBar_AddToCart_Button_ClassName: "." + "btn_primary" + "." + "btn_inventory",

    cartIcon_Image_ElementType: "a",
    cartIcon_Image_ClassName: "." + "shopping_cart_link" + "." + "fa-layers" + "." + "fa-fw",

    cartIcon_ItemCount_ElementType: "a",
    cartIcon_ItemCount_ClassName: "." + "fa-layers-counter" + "." + "shopping_cart_badge"
   
    // Other elements to be added below
  };