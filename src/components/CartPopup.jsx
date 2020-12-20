import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import cartEmptyImage from '../assets/img/empty-cart.png';
import { useSelector } from 'react-redux';

const CartPopup = () => {

    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

    const addedPizzas = Object.keys(items).map(key => {
        return items[key].items[0];
    });

    const [visibleCartPopup, setVisibleCartPopup] = useState(false);

    const toggleVisibleCartPopup = () => {
        setVisibleCartPopup(!visibleCartPopup)
    };

    return (
        // <Link to="/cart">
        <div>
            <Button onClick={toggleVisibleCartPopup} className="button--cart">
                <div className="button__div">
                    <span className="price">Корзина</span>
                    <div className="button__delimiter"></div>
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <span>{ totalCount }</span>
                </div>
            </Button>

            {visibleCartPopup && (
                <div className="shopping-cart">
                {totalCount ? ( 
                    <div className="cart__pizzas_on">
                        <div className="list">
                            {addedPizzas.map((obj) => (
                                <div className="cart__pizza">
                                    <div className="pizza">
                                        <img src={obj.imageUrl} alt={obj.name} />
                                        <div className="pizza__options">
                                            <div className="cart__desc">
                                                <div className="desc">
                                                    <span className="item-name">{obj.name}</span>
                                                    <p>{ obj.type } тесто, { obj.size } см.</p>
                                                </div>
                                                <div className="cart__item-remove">
                                                    <Button className="button--circle" outline>
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
                                                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
                                                        </svg>
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="cart__count">
                                                <div className="count">
                                                    <div className="button button--outline button--circle cart__item-count-minus">
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
                                                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
                                                        </svg>
                                                    </div>
                                                    <b>{ totalCount }</b>
                                                    <div className="button button--outline button--circle cart__item-count-plus">
                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" />
                                                            <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <b>{ totalPrice } ₽</b>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            )}
                        </div>
                        <div className="total-cart">
                            <span>Сумма заказа</span>
                            <span>{ totalPrice } ₽</span>
                        </div>
                        <div className="checkout"> 
                            <Link to="/cart">
                                <Button className="button--cart">Оформить заказ</Button>
                            </Link>
                        </div>
                    </div>
                    ) : (
                        <div className="cart__pizzas">
                            <img src={ cartEmptyImage } alt="Empty cart" />
                            <span>Ой, пусто!</span>
                        </div>
                    )
                }
                </div>
            )}
        </div>
    )
};

export default CartPopup;