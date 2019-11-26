import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";


class AppHeader extends React.Component {
    
    state = {showFilter : false};

    onClickFilter = () => {
            // console.log('Click', this.state.showFilter);
            this.setState( (prev) => { return { showFilter : ! prev.showFilter} } );
    }

    render() {
    const {total} = this.props;
    return (
        <header className="header">
            <Link to={ this.state.showFilter ? "/" : "/menu_filter"} className="header__left material_icons"  onClick={this.onClickFilter} >
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