import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteFromCart} from "../../actions";
import WithRestoService from "../hoc/with-resto-service";


const CartTable = ({items, deleteFromCart,totalSumm,RestoServiceProp}) => {
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
                                    <div className ="cart__item-title-text">
                                        {title}
                                    </div>
                                </div>

                                <div className ="cart__item-container">
                                    <button><span className="cart__item-btn-minus">-</span></button>
                                        <span className="cart__item-count">{count}</span> 
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

            
             { totalSumm.count && 
                <button className="cart__button" onClick={ () => { RestoServiceProp.putOrderToFirebase(); } }>
                    Купить
                </button>
            }
        </>
    );
};

const mapStateToProps = ({itemsInBasket,totalSumm}) => {
    return {
            items : itemsInBasket,
            totalSumm : totalSumm
           };
};


const mapDispatchToProps = {deleteFromCart};

// RestoServiceProp

export default connect(mapStateToProps,mapDispatchToProps)(  WithRestoService( CartTable ) );

