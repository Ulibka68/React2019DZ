import React, {Component} from 'react';
import style from  './itemListCustom.module.css';
// import dataIceAndFire from "../../services/getdata";
import Spinner from "../spinner/spinner";

// что будет в props :
// 1. getDataFunc функция получения данных
// 2. pageNum номер страницы
// 3. fieldList ="aa bb" список полей для вывода через пробел
// 4. primaryKeyField = название поля с ID

export default class ItemListCustom extends Component {
    
    constructor (props) {
        super(props);

        // на первом рендере список полей будет пустым
        this.fldsArray =[];
        const fld = this.props.fieldList || 'name';
        this.fldsArray =fld.split(' ');
    }

    state = {charList : null};

    componentDidMount() {

        const {getDataFunc,pageNum = 15} = this.props;

        getDataFunc(pageNum)
            .then( data => {
                // console.log('ItemListCustom componentDidMount',data);
                this.setState(  { charList : data} );
            });
    }

    

   
    render() {
        const {charList} = this.state;
        if (! charList) return ( <Spinner /> );

        const {primaryKeyField = 'ID'} = this.props;
       
       
        return (
            <ul className={"item-list list-group " + style.item_list_cursor}>
                {charList.map( item => ( 
                    <li 
                        className="list-group-item"
                        key={item[primaryKeyField]}
                        onClick={()=>this.props.onCharSelected(item[primaryKeyField])}
                    >
                        {/* {item[primaryKeyField] + ' - '+item.name} */}
                        {this.fldsArray.reduce((acc,curVal) => (acc+ item[curVal] + ', ' ),'')                        }
                    </li>
                ))}
            </ul>
        );
    }
}
