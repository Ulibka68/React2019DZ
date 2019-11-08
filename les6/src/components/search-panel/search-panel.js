import React from "react";
// import "./search-panel.css";
import {Input} from "reactstrap";
import style from "./SearchPanel.module.scss";

class SearchPanel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {text : this.props.startVal};
    }

    onChange = (e) => {
        const term = e.target.value;
        this.setState({text : term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            //    <input 
            //         className="form-control search-input" 
            //         type="text"
            //         placeholder="Поиск по записям"
            //    /> 
                <Input 
                    placeholder="Поиск по записям" 
                    className={style.search_input}
                    value = {this.state.text}
                    onChange ={this.onChange}
                />
                
            );
        
    }
}

export default SearchPanel;