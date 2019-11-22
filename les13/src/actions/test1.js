// import reducer from "../store/reducer";
import * as actions from "./actions"
import { store } from "../store/store";
import {bindActionCreators} from "redux";


// Цепочка действий - создать и экспортировать action

// код store.dispacth(inc()); можно оптимизировать
/*
export const incDispatch = () => store.dispacth(inc());
export const decDispatch = () => store.dispacth(dec());
export const rndDispatch = (value) => store.dispacth(rnd(value));
*/

// при клике вызывает соответсвующий action
document.getElementById('inc').addEventListener('click',() => {
    store.dispacth(inc());
})

// трансформация 1
// Обработчики событий ничего не знают про Redux
// слой view не связан с логикой
// document.getElementById('inc').addEventListener('click',incDispatch);
// document.getElementById('inc').addEventListener('click',() => {
//     const val =56;
//     rndDispatch(val);
// });


// Вариант2

const bindActionCreator = (creator, dispatch) => (...args) => {
    dispatch(creator(...args));
}

// код store.dispacth(inc()); можно оптимизировать
/*
export const incDispatch = bindActionCreator(inc,store.dispacth);
export const rndDispatch = bindActionCreator(inc,store.dispacth);
*/

// Варинат 3 
// функция  bindActionCreator уже есть в Redux
// bindActionCreators - уже из redax
/*
export const incDispatch = bindActionCreators(inc,store.dispacth);
export const rndDispatch = bindActionCreators(inc,store.dispacth);
*/

// Варинат 4
// Итоговый варинат
// В bind передать сразу набор функций


const incDispatch = bindActionCreators(
    {incDisp : inc, decDisp : dec, rndDisp : rnd},
    store.dispacth);

// вернет  объект с ключами {incDisp , decDisp , rndDisp }    


// Варинат 5 
// из actions испортируем *
// в actions - объект с ключами inc, dec, rnd
const dispFunc = bindActionCreators(
    actions,
    store.dispacth);

    document.getElementById('inc').addEventListener('click',dispFunc.inc);    