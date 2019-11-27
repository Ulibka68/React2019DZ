import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteFromCart} from "../../actions";


const CartTable = ({items, deleteFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map( (item) => {
                        const {title,price,urlFull,id} = item;
                        return (
                           <div className="cart__item" key={id}>
                                <img src={urlFull} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div 
                                    className="cart__close"
                                    onClick = { () => deleteFromCart(id) } 
                                >
                                    &times;
                                </div>
                            </div>
                        );
                    })
                }


               
            </div>
        </>
    );
};

const mapStateToProps = ({itemsInBasket}) => {
    return {items : itemsInBasket};
};


const mapDispatchToProps = {deleteFromCart};


export default connect(mapStateToProps,mapDispatchToProps)(CartTable);

