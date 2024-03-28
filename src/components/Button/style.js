import { StyleSheet } from 'react-native';
import { deviceHeight, isPlatformIos, isPlatformAndroid } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    buttonWraper: {
        width: '85%',
        height: 48,
        backgroundColor: primaryColors.saffron,
        borderRadius: 6,
        alignSelf: 'center',
        justifyContent: 'center',
        // paddingTop: 5
    },
    buttonText: {
        fontFamily: fonts.regular,
        color: primaryColors.white,
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
        top: isPlatformIos() ? 8 : 0,
        paddingBottom: isPlatformAndroid() ? 0 : 10,
    },
});