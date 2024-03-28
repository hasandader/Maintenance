import {
    SET_MAINTENANCE_TOKEN,
    SET_LOGIN_ERROR,
    SET_PROFILE,
    SET_APP_INTRO,
    SET_AUTH_DATA,
} from '../types/apiTypes';

const initialState = {
    maintenanceToken: null,
    errorMessage: '',
    profile: null,
    appIntro: false,
    stopSplash: false,
    authData: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAINTENANCE_TOKEN:
            return {
                ...state,
                maintenanceToken: action.token,
                stopSplash: true
            };
        case SET_LOGIN_ERROR:
            return {
                ...state,
                errorMessage: action.errorMessage
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_APP_INTRO:
            return {
                ...state,
                appIntro: action.appIntro,
            };
        case SET_AUTH_DATA:
            return {
                ...state,
                authData: action.authData
            };
        default:
            return state;
    }
};

export default reducer;