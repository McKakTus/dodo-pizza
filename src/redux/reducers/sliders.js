const initialState = {
    swiper: [],
    isLoadedSlider: false, 
};

const sliders = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SLIDERS':
            return {
                ...state,
                swiper: action.payload,
                isLoadedSlider: true,
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoadedSlider: action.payload,
            };

        default:
            return state;
    }
};

export default sliders;