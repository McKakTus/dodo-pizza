import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Button from '../Button';

function PizzaBlock({ id, name, imageUrl, description, price, types, sizes, onClickAddPizza, addedCount }) {
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
            price,
            size: avaibleSizes[activeSize],
            type: avaibleTypes[activeType],
        };
        onClickAddPizza(obj);
    };

    return(
        <div className="pizza-block">
            <div className="pizza-block_item">
                <img
                    className="pizza-block__image"
                    src={ imageUrl }
                    alt={ name }
                />
                <h4 className="pizza-block__title">{ name }</h4>
                <p className="pizza-block__description">{ description }</p>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от { price } ₽</div>
                <Button onClick={onOpenModal} className="button--add" secondary>        
                    <span>Выбрать</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>

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
        </div>
    )
}

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    onAddPizza: PropTypes.func,
    addedCount: PropTypes.number,
}

PizzaBlock.defaultProps = {
  name: '---',
  description: '---',
  price: 0,
  types: [],
  sizes: [],
};

export default PizzaBlock;