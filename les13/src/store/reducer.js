
const reducer = (state = 5,action) => {

    // console.log (action.type);
    switch ( action.type ) {
        case 'INC' :
            return state+1;
        case 'DEC' :
            return state-1;
        case 'RND' :
            return action.value;
        case 'RESET' :
            return 0;
        default:
            return state;
    }
}

export default reducer;
