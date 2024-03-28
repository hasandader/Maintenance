import { StyleSheet, I18nManager } from 'react-native';
import { isPlatformAndroid, deviceWidth, deviceHeight } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1',
    },
    scrollContainer: {
        flex: 1,
        // paddingBottom: deviceHeight() * 0.35,
        borderWidth: 0,
        paddingTop: 20,
        backgroundColor: primaryColors.white,
        borderTopRightRadius: 51,
        borderTopLeftRadius: 51,
        // marginTop: 210,
    },
    containerMargin: {
        flex: 1,
        backgroundColor: primaryColors.white,
        borderTopRightRadius: 51,
        borderTopLeftRadius: 51,
        marginTop: 210,
        paddingTop: 20,
    },
    headerTxt: {
        fontFamily: fonts.bold,
        fontSize: 18,
        lineHeight: 26,
        letterSpacing: -0.18,
        color: primaryColors.eclipse,
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        marginHorizontal: '5%'
    },
    displayTxtWraper: {
        backgroundColor: primaryColors.lightWhiteSmoke,
        width: '85%',
        height: 46,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        paddingRight: 15,
        paddingLeft: 15,
        marginTop: 20,
    },
    displayTxt: {
        fontFamily: fonts.bold,
        fontSize: 16,
        lineHeight: 24,
        color: primaryColors.matterhorn,
        width: '100%',
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        textAlignVertical: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        overflow: 'hidden',
    },
    pickerWraper: {
        width: '85%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    descInput: {
        fontFamily: fonts.bold,
        fontSize: 16,
        lineHeight: 24,
        width: '85%',
        height: deviceHeight() * 0.17,
        backgroundColor: primaryColors.lightWhiteSmoke,
        alignSelf: 'center',
        textAlign: 'right',
        textAlignVertical: 'top',
        marginTop: '5%',
        borderRadius: 8,
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 15
    },
    input: {
        fontFamily: fonts.bold,
        fontSize: 16,
        lineHeight: 24,
        width: '85%',
        height: 46,
        backgroundColor: primaryColors.lightWhiteSmoke,
        alignSelf: 'center',
        textAlign: 'right',
        marginTop: '5%',
        borderRadius: 8,
        paddingRight: 15,
        paddingLeft: 15,
        paddingBottom: 5,
        color: primaryColors.black
    },
    addressInput: {
        fontFamily: fonts.bold,
        fontSize: 16,
        lineHeight: 24,
        color: 'black',
        width: '85%',
        height: 92,
        backgroundColor: primaryColors.lightWhiteSmoke,
        alignSelf: 'center',
        textAlign: 'right',
        textAlignVertical: 'top',
        marginTop: '5%',
        borderRadius: 8,
        paddingRight: 15,
        paddingLeft: 15,
    },
    pickImageWraper: {
        borderWidth: 0,
        width: '85%',
        height: deviceHeight() * 0.16,
        borderRadius: 8,
        alignSelf: 'center',
        backgroundColor: primaryColors.whiteSmoke,
        justifyContent: 'center',
        marginTop: '5%',
    },
    imageWraper: {
        width: '100%',
        height: 24,
        flex: 1,
        borderRadius: 8,
    },
    selectedImage: {
        width: '100%',
        height: deviceHeight() * 0.16,
        borderWidth: 0,
        borderRadius: 8,
    },
    button: {
        marginTop: '5%',
    },
    findLocationWraper: {
        backgroundColor: primaryColors.lightWhiteSmoke,
        width: '85%',
        height: 46,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        paddingRight: 25,
        paddingLeft: 21
    },
    buttonsWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        alignSelf: 'center',
    },
    confirmationBtn: {
        width: '45%',
        marginTop: 20,
        paddingTop: isPlatformAndroid() ? 5 : 7,
        justifyContent: 'flex-start'
    },
    modalView: {
        backgroundColor: primaryColors.white,
        width: '75%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingTop: 26,
        paddingBottom: 18
    },
    modalText: {
        fontFamily: fonts.bold,
        fontSize: 18,
        lineHeight: 26,
        color: primaryColors.matterhorn,
        letterSpacing: -0.18,
        marginRight: 20,
        marginLeft: 20,
        textAlign: 'center'
    },
    icon: {
        width: deviceWidth() * 0.19,
        height: deviceHeight() * 0.09,
        marginBottom: 15
    },
    errorText: {
        color: 'red',
        fontFamily: fonts.regular,
        textAlign: 'right',
        paddingTop: 10,
        paddingRight: 10
    },
    errTextAlignment: {
        width: '85%',
        alignSelf: 'center'
    },
    activityIndicator: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: deviceHeight() * 0.5,
        position: 'absolute',
    },
    arrow: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export const pickerSelect = StyleSheet.create({
    inputIOS: {
        width: '100%',
        height: 46,
        borderRadius: 8,
        backgroundColor: primaryColors.lightWhiteSmoke,
        alignSelf: 'center',
        marginRight: 30,
        marginLeft: 30,
        paddingRight: 25,
        paddingLeft: 25,
        textAlign: 'right',
        fontFamily: fonts.bold
    },
    inputAndroid: {
        width: '100%',
        height: 46,
        borderRadius: 8,
        backgroundColor: primaryColors.lightWhiteSmoke,
        alignSelf: 'center',
        marginRight: 30,
        marginLeft: 30,
        paddingRight: 25,
        paddingLeft: 25,
        textAlign: 'right',
        color: primaryColors.matterhorn,
        fontFamily: fonts.bold
    },
    placeholder: {
        fontSize: 16,
        lineHeight: 24,
        color: primaryColors.matterhorn,
        width: '100%',
        marginRight: 20,
        marginLeft: 20,
        paddingRight: 25,
        paddingLeft: 25,
        paddingBottom: 10,
        textAlign: 'right',
        fontFamily: fonts.bold
    },
    iconContainer: {
        top: 13,
        right: I18nManager.isRTL ? '5%' : '89.5%',
    },
})