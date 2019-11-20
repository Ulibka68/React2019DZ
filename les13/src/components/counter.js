import React from 'react';
import {connect} from "react-redux";
import {getDispatchsObj} from "../actions/actions";

 function Counter  ({counter,inc,dec,rnd,reset})  {
    return (
      <div className="container_cnt_and_btn">
        <div className="white_box">
    <h1 className= "counter_h1">{counter}</h1>
        </div>
        <div className="button_group">
          <button onClick={inc} className="btn_box1 btn_plus"></button>
          <button onClick={dec} className="btn_box1 btn_minus"></button>
          <button onClick={reset} className="btn_box1 btn_rnd"></button>
          <button onClick={rnd} className="btn_text">RND</button>
        </div>
      </div>        
    );
}


const mapStateToProps = (state) => {
  return { counter : state }
}


const mapDispatchToProps = (dispatch) => (getDispatchsObj());
/*
const mapDispatchToProps = (dispatch) => {
    return {
      inc: actions.incDispatch,
      dec : actions.decDispatch,
      reset : actions.resetDispatch,
      rnd : actions.rndDispatch
      // rnd :  ()=> {
      //     const val = Math.floor(Math.random()*100);
      //     actions.rndDispatch(val);
      //   }


    }
}
*/

export default connect(mapStateToProps, mapDispatchToProps)(Counter);