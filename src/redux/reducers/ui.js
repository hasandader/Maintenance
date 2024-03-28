import {
    START_LOADING,
    STOP_LOADING,
    UI_START_LOADING,
    UI_STOP_LOADING,
} from '../types/apiTypes';

const initialState = {
    loadings: [],
    isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loadings: state.loadings.concat([action.value])
            };
        case STOP_LOADING:
            return {
                ...state,
                loadings: state.loadings.filter(item => item != action.value)
            };
        case UI_START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case UI_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

export default reducer;
