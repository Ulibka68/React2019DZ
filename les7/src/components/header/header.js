import React from 'react';
import style from "./header.module.scss";
import {Link} from "react-router-dom";

const Header = ({click, showRandom}) => {
    
    const hrefConst = '#';
    return (
        <div className={style.HeaderBlock}>
            <div className ={style.HeaderTitle}>
                <Link to ='/'>
                Game of Thrones DB
                </Link>
            </div>
            <div className ={style.HeaderLinks}>
                <li>
                    <Link to = '/characters'>Characters</Link>
                </li>
                <li>
                    <Link to ='/houses'>Houses</Link>
                </li>
                <li>
                    <Link to='/books'>Books</Link>   
                </li>
                <li>
                    {/* <button>Скрыть случайного персонажа</button> */}
                    <a 
                        href={hrefConst}
                        onClick={click}
                    >
                        {showRandom ? 'Скрыть случайного персонажа' : 'Показать случайного персонажа'}  
                    </a>  
                </li>
            </div>
        </div>
    );
};

export default Header;