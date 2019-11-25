import React from 'react';
import './menu-list-item.scss';
import ImageFirebase from "../imageFirebase/imgFirebase";


// props menuItem
class MenuListItem extends React.Component {
    
    render() {
    
    const {category = "общая",price = 0, title = "блюдо", url} = this.props.menuItem;

    return (
            <li className="menu__item">
                <div className="menu__title">{title}</div>
                <ImageFirebase className="menu__img" imageName={url} imageTitle={title}></ImageFirebase>
                <div className="menu__category">Category: <span>{category}</span></div>
                <div className="menu__price">Price: <span>{price}</span></div>
                <button className="menu__btn">Add to cart</button>
            </li>
        
    )};
}

export default MenuListItem;