// const initialState = { menu : [
//     {
//         "title": "Cesar salad",
//         "price": 12,
//         "url": "salat-cezar.jpg",
//         "category": "salads",
//         "id": 1
//     }
// ]};

const initialState = { 
    menu : [],
    loading : true,
    error : false,
    filteredMenu : false,  // показывать меню по фильтру
    filteredMenuKey : ""   // ключ по которому фильтровать
};




const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'MENU_LOADED' :
            return {
                ...state,
                menu : action.payload,
                loading : false,
                error : false
            };
        case 'MENU_REQUESTED' :
            return {
                ...state,
                menu : state.menu,
                loading : true,
                error : false
            };
        case 'MENU_ERROR' :
            return {
                ...state,
                menu : [],
                loading : false,
                error : true
            };
        case 'FILTER_SET' :
            return {
                ...state,
                filteredMenu : true,
                filteredMenuKey : action.filterKey
            };
        case 'FILTER_RESET' :
            return {
                ...state,
                filteredMenu : false,
                filteredMenuKey : ""
            };

        default : 
            return state;
    }
}

export default reducer;