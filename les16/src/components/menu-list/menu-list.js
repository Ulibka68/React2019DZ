import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import {connect} from "react-redux";
import WithRestoService from "../hoc";

class MenuList extends Component {

    componentDidMount () {
        // получить данные и отпавить данные в Redux store
        // WithRestoService добавляет еще один props RestoServiceProp
        const {RestoServiceProp} = this.props;
        // console.log(RestoServiceProp);

        // данная функция возвращает propmice
        RestoServiceProp.getMenuItems().then(
            (res) => {
                
                // Отправить результат в stor
                // menuLoaded - это dispatch store
                this.props.menuLoaded(res);
               
                }

        );
    }


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
    
    return {
        menuItems : state.menu
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        menuLoaded : (newMenu) => {
            dispatch({type : 'MENU_LOADED', payload : newMenu});
        }
    };
}

export default WithRestoService (connect(mapStateToProps,mapDispatchToProps)(MenuList));