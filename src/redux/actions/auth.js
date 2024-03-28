import {
    SET_MAINTENANCE_TOKEN,
    SET_LOGIN_ERROR,
    UI_START_LOADING,
    UI_STOP_LOADING,
    SET_PROFILE,
    START_LOADING,
    STOP_LOADING,
    SET_APP_INTRO,
    SET_AUTH_DATA,
} from '../types/apiTypes';
import AsyncStorage from '@react-native-community/async-storage';
import { maintenanceUrl } from '../../lib/constatnts';

const URL = maintenanceUrl;

export const maintenanceLogin = (data) => {
    const url = `${URL}login`;
    return dispatch => {
        dispatch(uiStartLoading());
        fetch(url, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                phone_number: data.mobile,
                password: data.password,
            })
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (Object.keys(parsedRes).length > 0) {
                    dispatch(setToken(parsedRes.access_token));
                    AsyncStorage.setItem('maintenanceToken', JSON.stringify(parsedRes.access_token));
                    AsyncStorage.setItem('authData', JSON.stringify(parsedRes));
                    dispatch(setAuthData(parsedRes));
                } else {
                    dispatch(setLoginError('رقم الجوال أو كلمة المرور غير صحيحة.'));
                }
                console.log("maintenanceLogin: ", parsedRes, data);
                dispatch(uiStopLoading());
            })
            .catch(err => {
                dispatch(uiStopLoading());
                console.log('maintenance login err: ', err)
            });
    };
};

export const getProfile = (token) => {
    const url = `${URL}getProfile`;
    return dispatch => {
        dispatch(setStartLoading('getProfile'));
        fetch(url, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
                'token': token
            },
        })
            .then(res => res.json())
            .then(parsedRes => {
                if (parsedRes.status) {
                    dispatch(setProfile(parsedRes.data));
                    console.log('getProfile: ', parsedRes);
                }
                console.log('getProfile: ', parsedRes);
                dispatch(setStopLoading('getProfile'));
            })
            .catch(err => {
                console.log('getProfile err: ', err);
                dispatch(setStopLoading('getProfile'));
            });
    };
};

export const getAuthData = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('maintenanceToken');
        token = JSON.parse(token);
        let authInfo = await AsyncStorage.getItem('authData');
        authInfo = JSON.parse(authInfo);
        let appIntro = await AsyncStorage.getItem('appIntroScreens');
        appIntro = JSON.parse(appIntro);
        if (appIntro == null) appIntro = true;
        dispatch(setAppIntro(appIntro));
        dispatch(setToken(token));
        dispatch(setAuthData(authInfo));
    }
}

export const logOut = () => {
    return async dispatch => {
        AsyncStorage.setItem('maintenanceToken', JSON.stringify(null));
        AsyncStorage.setItem('authData', JSON.stringify(null));
        dispatch(setToken(null))
        dispatch(setLoginError(''))
        dispatch(setAuthData(null));
    }
}

export const setAppIntroStatus = () => {
    return dispatch => {
        AsyncStorage.setItem('appIntroScreens', JSON.stringify(false));
    };
}

export const getAppIntro = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('maintenanceToken');
        token = JSON.parse(token);
        let authInfo = await AsyncStorage.getItem('authData');
        authInfo = JSON.parse(authInfo);
        let appIntro = await AsyncStorage.getItem('appIntroScreens');
        appIntro = JSON.parse(appIntro);
        if (appIntro == null) appIntro = true;
        dispatch(setAppIntro(appIntro));
        dispatch(setAuthData(authInfo));
    }
}

export const setToken = (token) => {
    return {
        type: SET_MAINTENANCE_TOKEN,
        token: token
    };
};

export const setLoginError = (data) => {
    return {
        type: SET_LOGIN_ERROR,
        errorMessage: data
    };
};

export const setProfile = (data) => {
    return {
        type: SET_PROFILE,
        profile: data
    };
};

export const uiStartLoading = () => {
    return {
        type: UI_START_LOADING
    };
};

export const uiStopLoading = () => {
    return {
        type: UI_STOP_LOADING
    };
};

export const setStartLoading = data => {
    return {
        type: START_LOADING,
        value: data
    };
};

export const setStopLoading = data => {
    return {
        type: STOP_LOADING,
        value: data
    };
};

export const setAppIntro = (data) => {
    return {
        type: SET_APP_INTRO,
        appIntro: data
    };
};

export const setAuthData = (data) => {
    return {
        type: SET_AUTH_DATA,
        authData: data,
    }
}