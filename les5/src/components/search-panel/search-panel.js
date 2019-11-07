import React from "react";
// import "./search-panel.css";
import {Input} from "reactstrap";
import style from "./SearchPanel.module.scss";

const SearchPanel = () => {
    return (
    //    <input 
    //         className="form-control search-input" 
    //         type="text"
    //         placeholder="Поиск по записям"
    //    /> 
        <Input placeholder="Поиск по записям" className={style.search_input}/>
        
    );
}

export default SearchPanel;