// import reducer from "../store/reducer";
import {inc, dec, reset, rnd} from "./actions"
import { store } from "../store/store";


// Цепочка действий - создать и экспортировать action

// код store.dispacth(inc()); можно оптимизировать
export const incDispatch = () => store.dispacth(inc());
export const decDispatch = () => store.dispacth(dec());
export const rndDispatch = (value) => store.dispacth(rnd(value));

// при клике вызывает соответсвующий action
document.getElementById('inc').addEventListener('click',() => {
    store.dispacth(inc());
})

// трансформация 1
// Обработчики событий ничего не знают про Redux
// слой view не связан с логикой
document.getElementById('inc').addEventListener('click',incDispatch);
document.getElementById('inc').addEventListener('click',() => {
    const val =56;
    rndDispatch(val);
});
