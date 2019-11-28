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
    filteredMenuKey : "",   // ключ по которому фильтровать
    itemsInBasket : []             // динамически формируемые элементы в корзине
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
        case 'ITEM_ADD_TO_CART' : {
            const id = action.payload;

            // была ли такая позиция уже в заказе?
            const itemIndex = state.itemsInBasket.findIndex( item => item.id === id );

            if (itemIndex === -1) {
                // ранее такой позиции в корзине не было
                const item = state.menu.find( item => item.id === id );
                const newItem = {...item, count :1};
            
                return {
                    ...state,
                    itemsInBasket : state.itemsInBasket.concat(newItem)
                };
            } else {
                //такая позиция в корзине есть 
                let newItem = {...state.itemsInBasket[itemIndex]};
                newItem.count += 1;
                return {
                    ...state,
                    itemsInBasket : [...state.itemsInBasket.slice(0,itemIndex), newItem ,...state.itemsInBasket.slice(itemIndex+1)]
                };
            }

        }
        case 'ITEM_REMOVE_FROM_CART' : {
                const id = action.payload;
                const itemIndex = state.itemsInBasket.findIndex( item => item.id === id );
    
                return {
                    ...state,
                    itemsInBasket : [...state.itemsInBasket.slice(0,itemIndex), ...state.itemsInBasket.slice(itemIndex+1)]
                };
        }
            

            
            

        default : 
            return state;
    }
}

export default reducer;