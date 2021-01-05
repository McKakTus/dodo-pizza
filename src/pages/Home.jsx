import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock, Sliders } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { fetchSliders } from '../redux/actions/sliders';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
};

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
        "slick-prev slick-arrow" +
        (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="#373535"></circle>
            <path d="M14.759 9.8418L20.9409 16.9997L14.759 24.1576" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    </button>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="17" fill="#373535"></circle>
            <path d="M14.759 9.8418L20.9409 16.9997L14.759 24.1576" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    </button>
);

const popular = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
};

function Home() {
    const dispatch = useDispatch();

    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    const swiper = useSelector(({ sliders }) => sliders.swiper);
    // const isLoadedSlider = useSelector(({ sliders }) => sliders.isLoadedSlider);
    
    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));    
    }, [category, sortBy]);

    useEffect(() => {
        dispatch(fetchSliders());    
    }, []);

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
        });
    };
 
    return (
        <div className="sections">
            <section className="slider-pizza">
                <Slider {...settings}>
                    {swiper.map((obj) => (
                        <Sliders id={obj.id} key={obj.id} imageUrl={obj.imageUrl} />
                    ))}
                </Slider>
            </section>

            <section className="new_popular__pizzas">
                <h2 className="content__title">Новое и популярное</h2>
                {/* <div className="buttons-arrows">
                    <div className="prev-click">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="17" fill="#373535"></circle>
                            <path d="M14.759 9.8418L20.9409 16.9997L14.759 24.1576" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                    <div className="next-click">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="17" fill="#373535"></circle>
                            <path d="M14.759 9.8418L20.9409 16.9997L14.759 24.1576" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
                </div> */}
                <Slider {...popular}>
                    <div className="offer">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4516c60c26ea4684ae2ed9a520b51906_146x146.jpeg" alt=""/>
                        <div className="item">
                            <h2>Пепперони</h2>
                            <span>от 459 ₽</span>
                        </div>
                    </div>
                    <div className="offer">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4516c60c26ea4684ae2ed9a520b51906_146x146.jpeg" alt=""/>
                        <div className="item">
                            <h2>Пепперони</h2>
                            <span>от 459 ₽</span>
                        </div>
                    </div>
                    <div className="offer">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4516c60c26ea4684ae2ed9a520b51906_146x146.jpeg" alt=""/>
                        <div className="item">
                            <h2>Пепперони</h2>
                            <span>от 459 ₽</span>
                        </div>
                    </div>
                    <div className="offer">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4516c60c26ea4684ae2ed9a520b51906_146x146.jpeg" alt=""/>
                        <div className="item">
                            <h2>Пепперони</h2>
                            <span>от 459 ₽</span>
                        </div>
                    </div>
                    <div className="offer">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4516c60c26ea4684ae2ed9a520b51906_146x146.jpeg" alt=""/>
                        <div className="item">
                            <h2>Пепперони</h2>
                            <span>от 459 ₽</span>
                        </div>
                    </div>
                    <div className="offer">
                        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/4516c60c26ea4684ae2ed9a520b51906_146x146.jpeg" alt=""/>
                        <div className="item">
                            <h2>Пепперони</h2>
                            <span>от 459 ₽</span>
                        </div>
                    </div>
                </Slider>
            </section>

            <div className="container">
                <div className="content__top">
                    <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames} />
                    <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectSortType} />
                </div>
                <h2 className="content__title">Пицца</h2>
                <div className="content__items">
                    {isLoaded 
                        ? items.map((obj) => (
                        <PizzaBlock 
                            onClickAddPizza={handleAddPizzaToCart} 
                            key={obj.id} 
                            addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            {...obj} 
                        />
                    )) 
                        : Array(12).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;