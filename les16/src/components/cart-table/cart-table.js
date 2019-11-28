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
                        const {title,price,urlFull,id,count=1} = item;
                        return (
                           <div className="cart__item" key={id}>
                                <img src={urlFull} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">
                                    <div class="cart__item-title-text">
                                        {title}
                                    </div>
                                </div>

                                <div class="cart__item-container">
                                    <button><span className="cart__item-btn-minus">-</span></button>
                                        <span class="cart__item-count">{count}</span> 
                                    <button><span className="cart__item-btn-plus">+</span></button>
                                </div>

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

