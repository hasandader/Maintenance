import React, { useCallback, useEffect, useState } from "react";

import { AppStacks, AuthStacks, IntroStacks } from './navigation/index';
import { useSelector, useDispatch } from 'react-redux';
import { getAppIntro } from './redux/actions/auth';
import { getAuthData } from './redux/actions/auth';
import SplashScreen from 'react-native-splash-screen';

function App() {
    const maintenanceToken = useSelector(state => state.maintenanceAuth.maintenanceToken);
    const appIntro = useSelector(state => state.maintenanceAuth.appIntro);
    const stopSplash = useSelector(state => state.maintenanceAuth.stopSplash);

    const [appIntroSlide, setAppIntroSlide] = useState(appIntro);

    console.log('appIntro: ', appIntro, appIntroSlide)
    const dispatch = useDispatch();

    const appIntroHandler = useCallback(() => {
        // dispatch(getAppIntro());
        dispatch(getAuthData());
    }, [dispatch]);

    useEffect(() => {
        appIntroHandler();
    }, []);

    useEffect(() => {
        if (stopSplash) {
            SplashScreen.hide();
        }
    }, [stopSplash]);

    useEffect(() => {
        setAppIntroSlide(appIntro);
    }, [appIntro])

    if (appIntroSlide) {
        return <IntroStacks />
    } else {
        return (
            maintenanceToken ?
                <AppStacks />
                :
                <AuthStacks />
        )
    }

};

export default App;