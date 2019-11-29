import React from 'react';
import './cart-table.scss';
import {connect} from "react-redux";
import {deleteFromCart,incrementCountInBasket,decrementCountInBasket,clearCart} from "../../actions";
import WithRestoService from "../hoc/with-resto-service";


class CartTable extends React.Component {
    state = {showCongratulation : false};

    render() {
    const{items, deleteFromCart,totalSumm,RestoServiceProp,incrementCountInBasket,decrementCountInBasket}=this.props;
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
                                    <button><span className="cart__item-btn-minus" onClick={ () => decrementCountInBasket(id) }>-</span></button>
                                        <span className="cart__item-count">{count}</span> 
                                    <button><span className="cart__item-btn-plus"  onClick={ () => incrementCountInBasket(id) }>+</span></button>
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
                <button className="cart__button" onClick={ () => { 
                    RestoServiceProp.putOrderToFirebase(); 
                    this.setState( {showCongratulation : true});
                    } }
                >
                    Купить
                </button>
            }
            { this.state.showCongratulation ? 
            <div className="cart__congratulation">
                <p className="cart__congratulation-firstLine">Спасибо за заказ!</p>
                <p>Ваш заказ принят и поступил в обработку</p>
                <p>В ближайшее время наш оператор свяжется с Вами и подтвердит заказ</p>
            </div>  :
             null
            }
        </>
    );
    }
};


const mapStateToProps = ({itemsInBasket,totalSumm}) => {
    return {
            items : itemsInBasket,
            totalSumm : totalSumm
           };
};


const mapDispatchToProps = {deleteFromCart,incrementCountInBasket,decrementCountInBasket,clearCart};

// RestoServiceProp

export default connect(mapStateToProps,mapDispatchToProps)(  WithRestoService( CartTable ) );

