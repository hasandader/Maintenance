import React from 'react';
import {
    View,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    Image
} from 'react-native';
import styles from './Style';
import { header, backButton } from '../../../images/index';

const Header = props => {
    return (
        <View>
            <View style={styles.header}>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={header} style={{ width: '100%', height: "100%" }} resizeMode='cover' >

                    {
                        props.back ?
                            <TouchableOpacity style={styles.topBackBtn} onPress={() => props.navigation.goBack()}>
                                <Image source={backButton} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
                            </TouchableOpacity>
                            : null
                    }
                </ImageBackground>
            </View>
            <View style={styles.whiteArea}></View>
        </View>
    );
};

export default Header;