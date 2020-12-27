import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation, Pagination]);

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);
    
    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));    
    }, [category, sortBy]);

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
                <div className="container">
                    <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    >
                        <SwiperSlide><img src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1607072859_98994831a94448ac93b8e29c24d9e318.jpeg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1607467370_c0fd8687977443a08c0921a3c811a1dd.jpeg" alt=""/></SwiperSlide>
                        <SwiperSlide><img src="https://dodopizza-a.akamaihd.net/static/Img/Banners/g_1607072859_98994831a94448ac93b8e29c24d9e318.jpeg" alt=""/></SwiperSlide>
                    </Swiper>
                </div>
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