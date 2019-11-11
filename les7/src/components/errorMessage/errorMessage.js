import React from "react";
import "./errorMessage.css"
import img from "./error.jpg";

export default ({errMSG}) => {
    return(
        <>
            {/* <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt="error"/> */}
            <img src={img} alt="error"/>
            <span>Что то пошло не так. {errMSG}</span>
        </>
    );
}