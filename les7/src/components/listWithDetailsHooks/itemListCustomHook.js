import React, {useState,useEffect} from 'react';
import style from  './itemListCustomHook.module.css';

import Spinner from "../spinner/spinner";

// что будет в props :
// 1. getDataFunc функция получения данных
// 2. pageNum номер страницы
// 3. fieldList ="aa bb" список полей для вывода через пробел
// 4. primaryKeyField = название поля с ID

// export default class ItemListCustomHook extends Component {
export default function ItemListCustomHook   (props) {

        // на первом рендере список полей будет пустым
        let fldsArray =[];
        const fld = props.fieldList || 'name';
        fldsArray =fld.split(' ');
        const {getDataFunc,pageNum = 15} = props;
    
    
    const [charList,SetcharList] = useState(null);

    useEffect(()=>{
        
        getDataFunc(pageNum)
            .then( data => {
                
                SetcharList(   data );
            });

        }
        ,[pageNum]
    );


      if (! charList) return ( <Spinner /> );

    const {primaryKeyField = 'ID'} = props;
       
       
        return (
            <ul className={"item-list list-group " + style.item_list_cursor}>
                {charList.map( item => ( 
                    <li 
                        className="list-group-item"
                        key={item[primaryKeyField]}
                        onClick={()=>props.onCharSelected(item[primaryKeyField])}
                    >
                        
                        {fldsArray.reduce((acc,curVal) => (acc+ item[curVal] + ', ' ),'')                        }
                    </li>
                ))}
            </ul>
        );
    
}
