
const initialState = {
    counter : 5,
    anything : "whats happend"
};

const reducer = (state = initialState,action) => {

    // console.log (action.type);
    switch ( action.type ) {
        case 'INC' :
            return {counter : state.counter+1,anything : "INC" };
        case 'DEC' :
            return {counter : state.counter-1,anything : "DEC" };
        case 'RND' :
            return {counter : action.value,anything : "RND"};
        case 'RESET' :
            return  {counter : 0,anything : "RESET"};;
        default:
            return state;
    }
}

export default reducer;
