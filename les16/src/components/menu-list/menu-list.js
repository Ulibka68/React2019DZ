import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import {connect} from "react-redux";

class MenuList extends Component {

    render() {
        // данные в props
    const {menuItems} = this.props;

    return (
        <ul className="menu__list">
            {
              menuItems.map( menuItem => {
                  return <MenuListItem menuItem={menuItem} key={menuItem.id} />
              }) 
            }

        </ul>
    )};
};


const mapStateToProps = (state) => {
    console.log('state : ',state);
    return {
        menuItems : state.menu
    }
}

// const mapDispatchToProps =() => {}

export default connect(mapStateToProps)(MenuList);