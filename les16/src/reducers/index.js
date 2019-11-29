
const initialState = { 
    menu : [],
    loading : true,
    error : false,

    initialShowFilter : false,  // начальное значение показа фильтра по категориям
    filteredMenu : false,  // показывать меню по фильтру
    filteredMenuKey : "",   // ключ по которому фильтровать


    itemsInBasket : [] ,            // динамически формируемые элементы в корзине
    totalSumm : {count : 0, total : 0},
    user : null        // текущий пользователь Firebase
};


// возвращает {count : 0, total : 0}
function totalSummInBasket(state) {
    return (
      state.itemsInBasket.reduce( (prevVal, curVal) => 
      {
        return (
            {
                count : prevVal.count+curVal.count,
                total : prevVal.total + (curVal.count * curVal.price )
            }
        );
      },
      {count : 0, total : 0} 
     )
    );
}


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
                initialShowFilter : false,
                filteredMenu : true,
                filteredMenuKey : action.filterKey
            };
        case 'MENU_SHOW_FILTER' :
            return {
                ...state,
                initialShowFilter : true
            };
        case 'FILTER_RESET' : {
            console.log('FILTER_RESET');
            return {
                ...state,
                initialShowFilter : false,
                filteredMenu : false,
                filteredMenuKey : ""
            };
        }
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
                    totalSumm : {count : state.totalSumm.count+1, total : state.totalSumm.total + newItem.price},
                    itemsInBasket : state.itemsInBasket.concat(newItem)
                };
            } else {
                //такая позиция в корзине есть 
                let newItem = {...state.itemsInBasket[itemIndex]};
                newItem.count += 1;
                return {
                    ...state,
                    totalSumm : {count : state.totalSumm.count+1, total : state.totalSumm.total + newItem.price},
                    itemsInBasket : [...state.itemsInBasket.slice(0,itemIndex), newItem ,...state.itemsInBasket.slice(itemIndex+1)]
                };
            }

        }
        case 'ITEM_REMOVE_FROM_CART' : {
                const id = action.payload;
                const itemIndex = state.itemsInBasket.findIndex( item => item.id === id );
                const item = state.itemsInBasket[itemIndex];
    
                return {
                    ...state,
                    totalSumm : {count : state.totalSumm.count-item.count, total : state.totalSumm.total - item.price * item.count },
                    itemsInBasket : [...state.itemsInBasket.slice(0,itemIndex), ...state.itemsInBasket.slice(itemIndex+1)]
                };
        }
        case 'CART_CLEAR_ALL_ITEMS' : {
    
                return {
                    ...state,
                    totalSumm : {count : 0, total : 0 },
                    itemsInBasket : []
                };
        }
            
        case 'USER_SET' : {
            
            return {
                ...state,
                user : action.user
            }
        }

        case 'INCREMENT_COUNT_IN_BASKET' : {
            const id = action.itemID;
            const itemIndex = state.itemsInBasket.findIndex( item => item.id === id );
            let item = {...state.itemsInBasket[itemIndex]};
            item.count += 1;

            return {
                ...state,
                totalSumm : {count : state.totalSumm.count+1, total : state.totalSumm.total + item.price },
                itemsInBasket : [...state.itemsInBasket.slice(0,itemIndex), item,...state.itemsInBasket.slice(itemIndex+1)]
            };
        }

        case 'DECREMENT_COUNT_IN_BASKET' : {
            const id = action.itemID;
            const itemIndex = state.itemsInBasket.findIndex( item => item.id === id );
            let item = {...state.itemsInBasket[itemIndex]};
            item.count -= 1;

            if ( item.count ) {
                return {
                    ...state,
                    totalSumm : {count : state.totalSumm.count-1, total : state.totalSumm.total - item.price },
                    itemsInBasket : [...state.itemsInBasket.slice(0,itemIndex), item,...state.itemsInBasket.slice(itemIndex+1)]
                };
            } else {  // если количество =0 то товра надо удалить из корзины
                return {
                    ...state,
                    totalSumm : {count : state.totalSumm.count-1, total : state.totalSumm.total - item.price },
                    itemsInBasket : [...state.itemsInBasket.slice(0,itemIndex), ...state.itemsInBasket.slice(itemIndex+1)]
                };
        };
    }

            
            

        default : 
            return state;
    }
}

export default reducer;
export {totalSummInBasket};