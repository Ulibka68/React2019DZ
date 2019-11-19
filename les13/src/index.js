import {createStore} from "redux";


const reducer = (state = 0,action) => {
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


const inc = () => ({type : 'INC'});
const dec = () => ({type : 'DEC'});
const rnd = (value) => ({type : 'RND',value});



const store = createStore(reducer);

const update = () => {
    document.getElementById( "counter").textContent = store.getState();
}

store.subscribe(update);

document.getElementById('inc').addEventListener('click',() => {
    store.dispatch({type: 'INC'});
});
document.getElementById('dec').addEventListener('click',() => {
    store.dispatch( dec());
});
document.getElementById('rnd').addEventListener('click',() => {
    // const val = Math.floor(Math.random()*100);
    store.dispatch({type : 'RESET'});
});

//         store.subscribe(()=>{
//             console.log('SUB : ',store.getState());
//         });

// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});


