import React from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Image,
    I18nManager,
} from 'react-native';
import styles from './Style';
import { BackButton, backButton, header } from '../../../images/index';
import { primaryColors } from '../../../theme/colors';
import { deviceWidth } from '../../../lib/utility';

const Header = props => {
    return (
        <View>
            <View style={styles.header}>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={header} style={styles.imageTop} resizeMode='cover' >
                    <Text style={styles.titleText}>{props.title}</Text>
                    {
                        props.back &&
                        <TouchableOpacity style={styles.backBtnWraper} onPress={() => props.navigation.goBack()}>
                            <Image source={backButton} style={styles.backIcon} resizeMode='contain' />
                        </TouchableOpacity>
                    }

                </ImageBackground>
            </View>
            {/* <View style={[styles.whiteArea, props.diffColor ? { backgroundColor: primaryColors.lightWhiteSmoke } : null]}></View> */}
        </View >
    );
};

export default Header;