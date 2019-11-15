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



class ItemListHOC extends Component {
        render() {
            const {data} = this.props;

            return (
                <ul className="item-list list-group">
                    {data.map( item => ( 
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
    



const withData = (View,getData) => {

    return class extends Component {

        state = {charList : null};
        static defaultProps = { PageNum : 15};
    
        componentDidMount() {
            getData(this.props.PageNum)
                .then( data => {
                    this.setState(  { charList : data} );
                });
        }

        render() {

            const {charList} = this.state;
            if (! charList) return ( <Spinner /> );
    

            return ( 
            <View  data ={this.state.charList} {...this.props} />
               );
        }
    }
}


export default withData(ItemListHOC,dataIceAndFire.getCharacterPage);

// export default ItemListHOC;        