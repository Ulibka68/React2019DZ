import React, {Component} from 'react';
import './itemList.css';
import dataIceAndFire from "../../services/getdata";
import Spinner from "../spinner/spinner";


export default class ItemList extends Component {

    state = {charList : null};

    componentDidMount() {
        dataIceAndFire.getApiNumData(0,5,10)
            .then( data => {
                this.setState(  { charList : data.JSON_promice} );
            });
    }

   
    render() {
        const {charList} = this.state;
        if (! charList) return ( <Spinner /> );

        return (
            <ul className="item-list list-group">
                <li className="list-group-item">
                    John Snow
                </li>
                <li className="list-group-item">
                    Brandon Stark
                </li>
                <li className="list-group-item">
                    Geremy
                </li>
            </ul>
        );
    }
}

// 12 58
function RenderOneItem(props) {
    return (
        <li 
            className="list-group-item"
            key={}
        >
            John Snow
        </li>
    );
}