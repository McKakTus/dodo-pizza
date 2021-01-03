import axios from 'axios';

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
});

export const fetchSliders = () => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });
    axios
    .get(
      `/sliders?`,
    )
    .then(({ data }) => {
      dispatch(setSliders(data));
    });
};

export const setSliders = (swiper) => ({
    type: 'SET_SLIDERS',
    payload: swiper,
});