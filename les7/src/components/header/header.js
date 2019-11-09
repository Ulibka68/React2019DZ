import React from 'react';
import style from "./header.module.scss"

const Header = () => {
    
    const hrefConst = '#';
    return (
        <div className={style.HeaderBlock}>
            <div className ={style.HeaderTitle}>
                <a href={hrefConst}>
                Game of Thrones DB
                </a>
            </div>
            <div className ={style.HeaderLinks}>
                <li>
                    <a href={hrefConst}>Characters</a>
                </li>
                <li>
                    <a href={hrefConst}>Houses</a>
                </li>
                <li>
                    <a href={hrefConst}>Books</a>   
                </li>
            </div>
        </div>
    );
};

export default Header;