import style from "./material.module.scss";
import React from "react";
import WithRestoService from "../hoc";

const MaterialIcons = (props) =>  {
    const {RestoServiceProp} = props;

    let body=[];
    if (RestoServiceProp.categoryUrl_isLoaded ) {
        for (let [key, value] of Object.entries( RestoServiceProp.categoryUrl )) {
            body.push(
                <li key={key}>
                     <img 
                        className={style.icon}
                        alt={key}
                        src={value}
                    />
                    {key}
                </li>
            );
        }
    }  

    return (
    <div className = {style.container}>
        {/* <i className={style.material_icons+" "+style.orange600}>fastfood location_on monetization_on </i>
        <i className={style.material_icons}>fastfood location_on monetization_on </i> */}

        <ul>
           {body}
        </ul>
    </div>
    );
}

export default WithRestoService(MaterialIcons);

// https://material.io/resources/icons/?style=baseline