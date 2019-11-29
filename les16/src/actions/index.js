const menuLoaded = (newMenu) => ({
    type : 'MENU_LOADED',
    payload : newMenu
});
const menuRequested = () => ({
    type : 'MENU_REQUESTED'
});
const menuError = () => ({
    type : 'MENU_ERROR'
});

const filterSet = (key) => ({
    type : 'FILTER_SET',
    filterKey : key
});
const filterReset = () => ({
    type : 'FILTER_RESET'
});

const addedToCart = (id) => ({
    type : 'ITEM_ADD_TO_CART',
    payload : id
});
const deleteFromCart = (id) => ({
    type : 'ITEM_REMOVE_FROM_CART',
    payload : id
});
const clearCart = () => ({
    type : 'CART_CLEAR_ALL_ITEMS'
});

const incrementCountInBasket = (id) => ({
    type : 'INCREMENT_COUNT_IN_BASKET',
    itemID : id
});
const decrementCountInBasket = (id) => ({
    type : 'DECREMENT_COUNT_IN_BASKET',
    itemID : id
});

const menuShowFilter = () => ({
    type : 'MENU_SHOW_FILTER'
});



export {
    menuLoaded,menuRequested,menuError,
    filterSet,filterReset,
    addedToCart,deleteFromCart,clearCart,
    incrementCountInBasket,decrementCountInBasket,
    menuShowFilter
}