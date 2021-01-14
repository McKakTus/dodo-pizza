import React from 'react';
import Button from '../Button';

function ComboBlock() {
    return(
        <div className="content__items">
            <div className="pizza-block combo-block">
                <div className="pizza-block_item">
                    <img
                        className="pizza-block__image"
                        src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/8d968fa2074344c58be293c6fb86b104_292x292.jpeg"
                        alt=""
                    />
                    <h4 className="combo-block__title">Комбо за 599 ₽</h4>
                    <p className="combo-block__description">Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.</p>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">599 ₽</div>
                    <Button className="button--add" outline>
                        <span>Добавить</span>
                    </Button>
                </div>
            </div>
            <div className="pizza-block combo-block">
                <div className="pizza-block_item">
                    <img
                        className="pizza-block__image"
                        src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/8d968fa2074344c58be293c6fb86b104_292x292.jpeg"
                        alt=""
                    />
                    <h4 className="combo-block__title">Комбо за 599 ₽</h4>
                    <p className="combo-block__description">Пицца 25 см, морс, соус и открытка с теплыми словами. Порадуйте тех, кто вам дорог. Дизайн открытки может отличаться</p>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">599 ₽</div>
                    <Button className="button--add" outline>  
                        <span>Добавить</span>
                    </Button>
                </div>
            </div>
            <div className="pizza-block combo-block">
                <div className="pizza-block_item">
                    <img
                        className="pizza-block__image"
                        src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/8d968fa2074344c58be293c6fb86b104_292x292.jpeg"
                        alt=""
                    />
                    <h4 className="combo-block__title">Комбо за 599 ₽</h4>
                    <p className="combo-block__description">Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.</p>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">599 ₽</div>
                    <Button className="button--add" outline>  
                        <span>Добавить</span>
                    </Button>
                </div>
            </div>
            <div className="pizza-block combo-block">
                <div className="pizza-block_item">
                    <img
                        className="pizza-block__image"
                        src="https://dodopizza-a.akamaihd.net/static/Img/ComboTemplates/8d968fa2074344c58be293c6fb86b104_292x292.jpeg"
                        alt=""
                    />
                    <h4 className="combo-block__title">Комбо за 599 ₽</h4>
                    <p className="combo-block__description">Наш хит «Аррива!» или другая пицца 25 см, Додстер, напиток и соус.</p>
                </div>
                <div className="pizza-block__bottom">
                    <div className="pizza-block__price">599 ₽</div>
                    <Button className="button--add" outline>
                        <span>Добавить</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ComboBlock;