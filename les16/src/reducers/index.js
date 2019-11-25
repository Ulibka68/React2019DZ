const initialState = { menu : [
    {
        "title": "Cesar salad",
        "price": 12,
        "url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
        "category": "salads",
        "id": 1
    }
]};

const reducer = (state : initialState, action) => {
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