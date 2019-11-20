import {store} from "../store/store";
import {bindActionCreators} from 'redux';

const inc = () => ({type : 'INC'});
const dec = () => ({type : 'DEC'});
const rnd = (value) => ({type : 'RND',value});
const reset = () => ({type : 'RESET'});


// const bindActionCreator = (creator, dispatch) => (...args) => {
//     dispatch(creator(...args));
// }

// function bindActionCreator1 (creator, dispatch)  {
//     return (
//         (...args) => {dispatch(creator(...args));}
//     );
// }


/*
export const incDispatch = bindActionCreators(inc,store.dispatch);
export const decDispatch = bindActionCreators(dec,store.dispatch);
export const rndDispatch =  bindActionCreators(rnd,store.dispatch);
export const resetDispatch = bindActionCreators(reset,store.dispatch);
*/

export const {incDispatch, decDispatch, rndDispatch,resetDispatch }  = bindActionCreators(
    {
        incDispatch : inc,
        decDispatch : dec,
        rndDispatch : rnd,
        resetDispatch : reset
    }
    ,store.dispatch);