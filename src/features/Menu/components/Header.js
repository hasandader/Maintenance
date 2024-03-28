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
import { header, backButton, search } from '../../../images/index';
import { primaryColors } from '../../../theme/colors';

const Header = props => {
    return (
        <View>
            <View style={styles.header}>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={header} style={styles.imageTop} resizeMode='cover' >
                    <Text style={styles.titleText}>{props.title}</Text>
                    <TouchableOpacity style={styles.backBtnWraper} onPress={() => props.navigation.goBack()}>
                        <Image source={backButton} style={styles.backBtn} resizeMode='contain' />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            {/* <View style={[styles.whiteArea, props.diffColor ? { backgroundColor: primaryColors.lightWhiteSmoke } : null]}></View> */}
        </View >
    );
};

export default Header;