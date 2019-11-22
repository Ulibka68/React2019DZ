

// то что снизу назовем action creators

const inc = () => ({type : 'INC'});
const dec = () => ({type : 'DEC'});
const reset = () => ({type : 'RESET'});
const rnd = () => {
    const value = Math.floor(Math.random()*100);
    return {type : 'RND',value}
};

export {inc, dec, reset, rnd}



