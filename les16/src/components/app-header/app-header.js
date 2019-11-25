import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";

class AppHeader extends React.Component {
    state = { showFilter : false };

    render() {
    const {total} = this.props;
    return (
        <header className="header">
            <Link to="/menu_filter" className="header__left material_icons" >
                filter_list
            </Link>

            <Link to="/" className="header__link" >
                Menu
            </Link>
            <Link to ="/cart" className="header__link" >
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
    };
};

export default AppHeader;