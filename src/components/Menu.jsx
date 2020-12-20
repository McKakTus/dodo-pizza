import React from 'react';
import { CartPopup } from '../components';

const Menu = () => {
    return (
        <nav>
            <div className="container">
                <div className="grid">
                    <ul className="menu">
                        <li className="option">
                            <a href="#">Пицца</a>
                        </li>
                        <li className="option">
                            <a href="#">Комбо</a>
                        </li>
                        <li className="option">
                            <a href="#">Закуски</a>
                        </li>
                        <li className="option">
                            <a href="#">Десерты</a>
                        </li>
                        <li className="option">
                            <a href="#">Напитки</a>
                        </li>
                        <li className="option">
                            <a href="#">Другие товары</a>
                        </li>
                        <li className="option">
                            <a href="#">Акции</a>
                        </li>
                        <li className="option">
                            <a href="#">Контакты</a>
                        </li>
                        <li className="option">
                            <a href="#">О нас</a>
                        </li>
                    </ul>

                    <div className="header__cart">
                        <CartPopup />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu;