import { StyleSheet, I18nManager } from 'react-native';
import { isPlatformAndroid, deviceWidth, deviceHeight } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        paddingTop: 20,
        backgroundColor: primaryColors.easternBlue,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        marginTop: deviceHeight() * 0.017
    },
    header: {
        fontFamily: fonts.bold,
        fontSize: 22,
        lineHeight: 26,
        color: primaryColors.doveGray2,
        marginTop: 50,
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        paddingRight: deviceWidth() * 0.046
    },
    profilePhoto: {
        width: 120,
        height: 140,
        marginTop: -25,
        alignSelf: 'center',
    },
    rowWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginRight: 15,
        marginLeft: 20,
        // paddingTop: 12,
        paddingBottom: 18
    },
    menuText: {
        fontFamily: fonts.regular,
        fontSize: 16,
        lineHeight: 22,
        color: primaryColors.white,
        marginRight: I18nManager.isRTL ? 0 : 15,
        marginLeft: I18nManager.isRTL ? 15 : 0,
        paddingBottom: isPlatformAndroid() ? 4 : 0
    },
    divider: {
        borderTopWidth: 0.5,
        borderColor: '#eee',
    },
    iconWraper: {
        width: 29,
        height: 29,
        borderWidth: 2,
        borderColor: primaryColors.white,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        justifyContent: 'space-between',
        paddingBottom: 0
    },

    profileTopWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        paddingRight: 15,
        backgroundColor: primaryColors.white,
        paddingBottom: deviceHeight() * 0.022,
        paddingTop: 10
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 16,
        lineHeight: 22,
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        paddingRight: 18,
        height: 41,
        paddingTop: 8,
        letterSpacing: -0.16,
        color: '#000'
    },
    engText: {
        fontFamily: fonts.regular,
        fontSize: 16,
        lineHeight: 22,
        paddingRight: 18,
        paddingLeft: 18,
        marginTop: 5,
        height: 42,
        backgroundColor: primaryColors.white,
        // paddingTop: 10,
        letterSpacing: -0.16,
        color: '#000',
        textAlign: 'right',
    },
    subBtnWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        alignSelf: 'center',
        marginTop: deviceHeight() <= 750 ? 30 : 95
    },
    button: {
        marginTop: deviceHeight() <= 750 ? 30 : 95
    },
    nameText: {
        fontFamily: fonts.regular,
        fontSize: 16,
        lineHeight: 22,
        marginRight: 14,
        textAlign: 'right',
        // width: '60%',
        color: primaryColors.matterhorn,
        flex: 1,
    },
    avatarWraper: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: primaryColors.mercury,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImage: {
        width: 41,
        height: 43,
    },
    cameraWraper: {
        position: 'absolute',
        backgroundColor: primaryColors.white,
        marginLeft: I18nManager.isRTL ? deviceWidth() * 1 / 5 - 10 : deviceWidth() * 4 / 5 - 10,
        marginTop: 55,
        borderRadius: 15,
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    locationWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        backgroundColor: primaryColors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 5
    },
    textButton: {
        alignSelf: 'flex-end',
        marginLeft: 24,
        marginRight: 24
    },
    changePassTxt: {
        textDecorationLine: 'underline',
        color: primaryColors.yellow,
        fontSize: 13,
        lineHeight: 18,
        fontFamily: fonts.regular
    },
    activityIndicator: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        marginTop: deviceHeight() * 0.2,
        backgroundColor: primaryColors.white,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    activityIndicator2: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '50%',
    },
});