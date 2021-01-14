import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Button from './Button';

function SliderSlick({id, name, imageUrl, description, price, types, sizes, onClickAddPizza}) {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    const avaibleTypes = ['тонкое', 'традиционное'];
    const avaibleSizes = [26, 30, 40];
    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0);

    const onSelecType = (index) => {
        setActiveType(index);
    };

    const onSelecSize = (index) => {
        setActiveSize(index);
    };

    const onAddPizza = () => {
        const obj = {
            id, 
            name, 
            imageUrl, 
            description,
            price,
            size: avaibleSizes[activeSize],
            type: avaibleTypes[activeType],
        };
        onClickAddPizza(obj);
    };

    return (
        <div>
            <div onClick={onOpenModal} className="offer">
                <img src={ imageUrl } alt={ name } />
                <div className="item">
                    <h2>{ name }</h2>
                    <span>от { price } ₽</span>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className="pizza-modal">
                    <div className="pizza-image">
                        <img src={ imageUrl } alt={ name } />
                    </div>
                    <div className="pizza-description">
                        <div className="pizza">
                            <h3>{ name }</h3>
                            <span>35 см, традиционное тесто, 820 г</span>
                            <p>{ description }</p>
                            <div className="pizza-block">
                                <div className="pizza-block__selector">
                                    <ul>
                                        {avaibleTypes.map((type, index) => 
                                            <li 
                                                key={type}
                                                onClick={() => onSelecType(index)} 
                                                className={classNames({
                                                    active: activeType === index,
                                                    disabled: !types.includes(index),
                                                })}>
                                                {type}
                                            </li>
                                        )}
                                    </ul> 
                                    <ul>
                                        {avaibleSizes.map((size, index) =>
                                            <li
                                                key={size}
                                                onClick={() => onSelecSize(index)}
                                                className={classNames({
                                                    active: activeSize === index,
                                                    disabled: !sizes.includes(size),
                                                })}>
                                                {size} см.
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="button-modal">
                            <Button onClick={onAddPizza} className="button--modal">Добавить в корзину за { price } ₽</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

SliderSlick.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    onAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
}

SliderSlick.defaultProps = {
  name: '---',
  price: 0,
  types: [],
  sizes: [],
};

export default SliderSlick;