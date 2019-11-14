import React, {Component} from 'react';
import './itemListHOC.css';
import dataIceAndFire from "../../services/getdata";
import Spinner from "../spinner/spinner";

// Было
// 1. получить данные 
// 2. Установить в state
// 
// render
//   если данных нет - то spiner

// Сделаем
// f(1)(2) - f(1) вызов ф-ии которая вернет ф-ию (2) - аргумент для второй ф-ии

const f = () => {
    return class extends Component {
        render() {
            return ( <h1> HELLO***************</h1>);
        }
    }
}
export default f();

class ItemListHOC extends Component {
    
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
