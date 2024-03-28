import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.white
    },
    image: {
        width: '100%',
        height: 330,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 27,
        lineHeight: 34,
        color: primaryColors.fiord,
        marginTop: 20,
        fontFamily: fonts.bold,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 16,
        lineHeight: 24,
        color: primaryColors.shadowGreen,
        width: '86%',
        textAlign: 'center',
        marginTop: 26,
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'flex-start',
        backgroundColor: '#fff',
        // paddingTop: 30
    },
    contentWraper: {
        width: '100%',
        // marginTop: 60
    },
    textsWraper: {
        width: '100%',
        alignItems: 'center'
    },
    skipButton: {
        alignSelf: !I18nManager.isRTL ? 'flex-start' : 'flex-end',
        marginRight: 20,
        marginLeft: 20,
        position: 'absolute',
        zIndex: 1,
        marginTop: 40,
        paddingRight: 20
    },
    button: {
        backgroundColor: primaryColors.saffron,
        borderRadius: 6,
        width: deviceWidth() * 0.52,
        height: 48,
        alignSelf: 'center',
        paddingBottom: 8,
        marginTop: deviceHeight() * 0.07,

        shadowColor: primaryColors.easternBlue,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 5,
    },
    buttonTxt: {
        color: primaryColors.white,
        fontFamily: fonts.regular,
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
    }
});