import { StyleSheet, I18nManager } from 'react-native';
import { deviceHeight, deviceWidth } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts, secondaryFonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.white
    },
    logo: {
        height: 150,
        width: 300,
        marginTop: 130,
        alignSelf: 'center',
        position: 'absolute',
    },
    header: {
        height: 136,
        backgroundColor: primaryColors.yellow,
    },
    yellowArea: {
        height: 67,
        backgroundColor: primaryColors.yellow,
        borderWidth: 0
    },
    whiteArea: {
        backgroundColor: primaryColors.white,
        height: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        width: '100%',
        marginTop: 45
    },
    // logo: {
    //     backgroundColor: '#f6f6f6',
    //     height: 103,
    //     width: 307,
    //     // marginTop: 125,
    //     alignSelf: 'center',
    //     position: 'absolute',
    // },
    title: {
        marginTop: 70,
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
        color: primaryColors.eclipse,
        fontFamily: fonts.bold,
    },
    buttonWraper: {
        width: deviceWidth() * 0.73,
        height: 48,
        backgroundColor: primaryColors.saffron,
        borderRadius: 3,
        marginTop: deviceHeight() * 0.12,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        paddingTop: 0,
        paddingBottom: 10,

        shadowColor: primaryColors.easternBlue,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,

        elevation: 5,
    },
    buttonText: {
        color: primaryColors.white,
        fontFamily: fonts.regular,
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
        paddingTop: 5,
    },
    tailText: {
        fontFamily: secondaryFonts.regular,
        fontSize: 14,
        lineHeight: 26,
        color: primaryColors.fiord
    },
    titleText: {
        color: primaryColors.eclipse,
        fontFamily: fonts.bold,
        fontSize: 20,
        lineHeight: 28,
        alignSelf: 'center',
        marginTop: 100,
    },
    forgotPassTitleTxt: {
        color: primaryColors.eclipse,
        fontFamily: fonts.bold,
        fontSize: 20,
        lineHeight: 28,
        alignSelf: 'center',
        marginTop: 70
    },
    tailLogo: {
        width: 40,
        height: 37
    },
    screenBottom: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignSelf: 'center',
        marginBottom: 30,
        alignItems: 'center',
    },
    headerLeft: {
        alignSelf: 'flex-start',
        padding: 10,
        paddingLeft: 18
    },
    inputWraper: {
        width: deviceWidth() * 0.73,
        height: 48,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: primaryColors.saffron,
        borderRadius: 3,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 13,
        paddingRight: 13,
        marginTop: deviceHeight() * 0.043
    },
    inputText: {
        flex: 1,
        textAlign: 'right',
        fontFamily: fonts.regular,
        fontSize: 14,
        lineHeight: 19,
        height: '100%'
    },
    forgotPassWraper: {
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        marginRight: 66,
        marginLeft: 66,
        marginTop: 5,
    },
    fotgotPassTxt: {
        color: primaryColors.eclipse,
        fontFamily: fonts.regular,
        fontSize: 12,
        lineHeight: 17,
        textAlign: 'center'
    },
    createAccounWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignSelf: 'center',
        marginTop: 10
    },
    createAcountTxt: {
        fontSize: 14,
        lineHeight: 19,
        fontFamily: fonts.regular
    },
    errorTxt: {
        width: '70%',
        alignSelf: 'center',
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        marginTop: 5,
        color: 'red',
        fontSize: 12
    },
    textButton: {
        alignSelf: 'center',
        marginTop: 10
    },
    changePassTxt: {
        textDecorationLine: 'underline',
        color: primaryColors.yellow,
        fontSize: 13,
        lineHeight: 18,
        fontFamily: fonts.regular
    },
    activityIndicator: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: deviceHeight() * 0.55,
        position: 'absolute'
    },
});
