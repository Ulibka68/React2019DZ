// const initialState = { menu : [
//     {
//         "title": "Cesar salad",
//         "price": 12,
//         "url": "salat-cezar.jpg",
//         "category": "salads",
//         "id": 1
//     }
// ]};

const initialState = { menu : []};




const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'MENU_LOADED' :
            return {
                menu : action.payload
            };
        default : 
            return state;
    }
}

export default reducer;