import React from 'react';
import Button from '../Button';

function SnackBlock() {
    return(
        <div className="content__items">
            <div className="pizza-block combo-block">
                <div className="pizza-block_item">
                    <img
                        className="pizza-block__image"
                        src="https://dodopizza-a.akamaihd.net/static/Img/Products/2ec8a54a9a7d44a68b3f97e4b37ed426_292x292.jpeg"
                        alt=""
                    />
                    <h4 className="combo-block__title">Острый Додстер 🌶️🌶️</h4>
                    <p className="combo-block__description">Горячая закуска с острым цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке</p>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">159 ₽</div>
                    <Button className="button--add" secondary>
                        <span>Выбрать</span>
                    </Button>
                </div>
            </div>
            <div className="pizza-block combo-block">
                <div className="pizza-block_item">
                    <img
                        className="pizza-block__image"
                        src="https://dodopizza-a.akamaihd.net/static/Img/Products/2ec8a54a9a7d44a68b3f97e4b37ed426_292x292.jpeg"
                        alt=""
                    />
                    <h4 className="combo-block__title">Острый Додстер 🌶️🌶️</h4>
                    <p className="combo-block__description">Пицца 25 см, морс, соус и открытка с теплыми словами. Порадуйте тех, кто вам дорог. Дизайн открытки может отличаться</p>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">159 ₽</div>
                    <Button className="button--add" secondary>
                        <span>Выбрать</span>
                    </Button>
                </div>
            </div>
            <div className="pizza-block combo-block">
                <div className="pizza-block_item">
                    <img
                        className="pizza-block__image"
                        src="https://dodopizza-a.akamaihd.net/static/Img/Products/2ec8a54a9a7d44a68b3f97e4b37ed426_292x292.jpeg"
                        alt=""
                    />
                    <h4 className="combo-block__title">Острый Додстер 🌶️🌶️</h4>
                    <p className="combo-block__description">Горячая закуска с острым цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке</p>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">159 ₽</div>
                    <Button className="button--add" secondary>
                        <span>Выбрать</span>
                    </Button>
                </div>
            </div>
            <div className="pizza-block combo-block">
                <div className="pizza-block_item">
                    <img
                        className="pizza-block__image"
                        src="https://dodopizza-a.akamaihd.net/static/Img/Products/2ec8a54a9a7d44a68b3f97e4b37ed426_292x292.jpeg"
                        alt=""
                    />
                    <h4 className="combo-block__title">Острый Додстер 🌶️🌶️</h4>
                    <p className="combo-block__description">Горячая закуска с острым цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке</p>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">159 ₽</div>
                    <Button className="button--add" secondary>
                        <span>Выбрать</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SnackBlock;