import React, { useState, useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './Style';
import {
    intro1, intro2, intro3
} from '../../images';
import { deviceHeight, deviceWidth } from '../../lib/utility';
import { useSelector, useDispatch } from 'react-redux';
import { setAppIntro, setAppIntroStatus } from '../../redux/actions/auth';
import { primaryColors } from '../../theme/colors';
import Button from '../../components/Button/index';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';

export default function index(props) {
    const appIntro = useSelector(state => state.maintenanceAuth.appIntro);

    const [slides, setSlides] = useState([
        {
            key: 'k1',
            title: 'الربط مع مزود الخدمة',
            text: 'يتم ربط العميل بمزود الخدمة المناسب لطلب الصيانة الخاص به ومتابعة استجابة المزود حتى إتمام المهمة',
            // image: intro1,
            backgroundColor: primaryColors.white,
            done: false,
            props: props
        },
        {
            key: 'k2',
            title: 'سهولة التواصل',
            text: 'بإمكانك تسجيل طلب الصيانة الخاص بك من أي مكان فقط من خلال ضغطة زر ',
            // image: secondSlide,
            backgroundColor: primaryColors.white,
            done: false,
            props: props
        },
        {
            key: 'k3',
            title: 'متابعة فورية',
            text: 'بمجرد إرسالك الطلب سيتم تنظيم آلية اصلاح طلب الصيانة المضاف بالسرعة الممكنة',
            // image: thirdSlide,
            backgroundColor: primaryColors.white,
            done: true,
            props: props
        }
    ]);

    _renderItem = (props) => (
        <View style={styles.mainContent}>
            {
                props.item.done ? null :
                    <TouchableOpacity style={styles.skipButton} onPress={() => visitorSwitch()} >
                        <Text style={[styles.title, { fontSize: 16, color: '#ffffff' }]}>تخطي </Text>
                    </TouchableOpacity>
            }
            <View style={props.item.done && deviceHeight() > 700 ? [styles.contentWraper] : [styles.contentWraper, { marginTop: 0 }]}>
                {
                    props.item.key == 'k1' ?
                        <Image source={intro1} style={{ height: deviceHeight() * 0.6, width: deviceWidth() }} resizeMode='cover' />
                        : props.item.key == 'k2' ?
                            <Image source={intro2} style={{ height: deviceHeight() * 0.6, width: deviceWidth() }} />
                            : props.item.key == 'k3' &&
                            <Image source={intro3} style={{ height: deviceHeight() * 0.6, width: deviceWidth() }} />
                }
                <View style={styles.textsWraper}>
                    <Text style={styles.title}>{props.item.title}</Text>
                    <Text style={styles.text}>{props.item.text}</Text>
                </View>
            </View>
            {
                props.item.key == 'k3' &&
                <TouchableOpacity >
                    <Button
                        title='إبدا الأن'
                        style={styles.button}
                        onPress={() => visitorHandler()}
                    />
                </TouchableOpacity>
            }
        </View >
    );


    const dispatch = useDispatch();

    const visitorHandler = useCallback(() => {
        dispatch(setAppIntro(false));
        dispatch(setAppIntroStatus());
        console.log('sdjfgjsdygf')
    }, [dispatch]);

    function visitorSwitch() {
        visitorHandler();
    };

    _renderDoneButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Button
                    title='إبدا الأن'
                    style={styles.button}
                />
            </View>
        );
    };

    return (
        <>
            <StatusBar barStyle='light-content' />
            <AppIntroSlider
                ref={ref => {
                    slider = ref;
                }}
                data={slides}
                renderItem={_renderItem}
                showSkipButton={false}
                showNextButton={false}
                activeDotStyle={{ backgroundColor: primaryColors.yellow }}
                dotStyle={{ backgroundColor: primaryColors.ming }}
                buttonTextStyle={styles.buttonTxt}
            />
        </>
    );
}
