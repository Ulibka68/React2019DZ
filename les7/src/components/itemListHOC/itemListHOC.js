import React, {Component} from 'react';
import './itemList.css';
import dataIceAndFire from "../../services/getdata";
import Spinner from "../spinner/spinner";


export default class ItemList extends Component {
    
    state = {charList : null};

    componentDidMount() {
        dataIceAndFire.getApiNumData(0,15,10)
            .then( data => {
                const regex = /https:\/\/www\.anapioficeandfire\.com\/api\/characters\/(\d+)/;
                
                data.JSON_promice.map( item => {
                    item.ID = parseInt (item.url.match(regex)[1]);
                    return item;
                });
                
                // console.log(data.JSON_promice);
                this.setState(  { charList : data.JSON_promice} );
            });
    }

   
    render() {
        const {charList} = this.state;
        if (! charList) return ( <Spinner /> );


        return (
            <ul className="item-list list-group">
                {charList.map( item => ( 
                    <li 
                        className="list-group-item"
                        key={item.ID}
                        
                        onClick={()=>this.props.onItemSelected(item.ID)}
                    >
                        {item.ID + ' - '+item.name}
                    </li>
                ))}
            </ul>
        );
    }
}
