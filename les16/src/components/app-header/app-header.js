import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {menuShowFilter} from "../../actions";


class AppHeader extends React.Component {
    

    render() {
    const {totalSumm,user,menuShowFilter ,initialShowFilter = false} = this.props;
    
    return (
        <header className="header">
            <Link to={ initialShowFilter ? "/" : "/menu_filter"} className="header__left material_icons"  onClick={() => {menuShowFilter();}} >
                filter_list
            </Link>
            
            <span className="material_icons header__user">account_circle</span>  
            { user && <span className="header__link">{user.displayName}</span>}

            <Link to="/" className="header__link" >
                Menu
            </Link>
            <Link to ="/cart" className="header__link" >
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Всего: штук- {totalSumm.count}, сумма {totalSumm.total} $
            </Link>
        </header>
    )
    };
};


const mapStateToProps = ({totalSumm,user,initialShowFilter}) => {
    return {totalSumm , user,initialShowFilter};
};

const mapDispatchToProps = {menuShowFilter};

export default connect(mapStateToProps,mapDispatchToProps)(AppHeader);