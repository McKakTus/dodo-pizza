import { combineReducers } from 'redux';
import filters from './filters';
import pizzas from './pizzas';
import cart from './cart';
import sliders from './sliders';

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart,
    sliders,
});

export default rootReducer;