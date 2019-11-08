import React from "react";
import {Input, Button } from "reactstrap";
import style from "./PostAddForm.module.scss";

export default class PostAddForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {text : ""};
    }

    onInputChange = (e) => {
        this.setState({text : e.target.value});
    }

    onSubmit = (e) => {
        const {onAdd} = this.props;
        e.preventDefault();
        onAdd(this.state.text);
        this.setState({text : ""});
    }

    render() {
       
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit = {this.onSubmit}
            >
    
                <Input 
                    placeholder="О чем Вы думаете ?" 
                    className={style.new_post_label} 
                    onChange = {this.onInputChange}
                    value = {this.state.text}
                />
    
    
                <Button 
                    type="submit"
                    outline 
                    color="secondary"
                    // onClick = { (evt) => {
                    //     evt.preventDefault();
                    //     onAdd(this.state.text);
                    //     this.setState({text : ""});
                    // }}
                >
                    Добавить
                </Button>
    
    
            </form>
        );
    
    }
};
 