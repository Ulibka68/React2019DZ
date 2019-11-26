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


export {menuLoaded,menuRequested,menuError,filterSet,filterReset}