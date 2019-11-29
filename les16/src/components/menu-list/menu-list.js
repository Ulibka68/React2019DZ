import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import './menu-list.scss';
import {connect} from "react-redux";
import WithRestoService from "../hoc";
import {menuLoaded,menuRequested,menuError,addedToCart} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

class MenuList extends Component {

    componentDidMount () {
        // получить данные и отпавить данные в Redux store
        // WithRestoService добавляет еще один props RestoServiceProp
        this.props.menuRequested();
        const {RestoServiceProp} = this.props;
        // console.log(RestoServiceProp);

        const {filteredMenuKey} = this.props;
        // данная функция возвращает propmice
        RestoServiceProp.getMenuItems(filteredMenuKey)
          .then(
            (res) => {
                
                // Отправить результат в stor
                // menuLoaded - это dispatch store
                this.props.menuLoaded(res);
               
                }
          )
          .catch(
              e => {
                  console.error(`Error! загрузка menu list : ${e}`);
                  this.props.menuError();
              }
          );
    }


    render() {
        // данные в props
    const {menuItems, loading,error,addedToCart} = this.props;
    if (error) return <Error />;
    if (loading) return <Spinner />;

    return (
        <ul className="menu__list">
            {
              menuItems.map( menuItem => {
                  return <MenuListItem menuItem={menuItem} key={menuItem.id}  onAddToCart={ () => addedToCart(menuItem.id)} />
              }) 
            }

        </ul>
    )};
};


const mapStateToProps = (state) => {
    
    return {
        menuItems : state.menu,
        loading : state.loading,
        error : state.error,
        filteredMenu : state.filteredMenu,
        filteredMenuKey : state.filteredMenuKey
    }
}

// const mapDispatchToProps =(dispatch) => {
//     return {
//         menuLoaded : (newMenu) => {
//             dispatch(menuLoaded(newMenu));
//         }
//     };
// }

// достаточно передать сам объект Actioncreators
const mapDispatchToProps = {menuLoaded,menuRequested,menuError,addedToCart};

export default WithRestoService (connect(mapStateToProps,mapDispatchToProps)(MenuList));