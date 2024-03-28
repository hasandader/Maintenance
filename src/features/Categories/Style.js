import { StyleSheet, I18nManager } from 'react-native';
import { isPlatformAndroid, deviceWidth, deviceHeight } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.white
    },
    searchInputWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        height: 48,
        width: '85%',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        marginTop: 10,
        borderRadius: 6,
        backgroundColor: primaryColors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    verticalDivider: {
        borderWidth: 0.5,
        height: 26,
        borderColor: primaryColors.suvaGrey
    },
    searchInput: {
        flex: 1,
        height: '100%'
    },
    activityIndicator: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: '50%',
    },
    text: {
        alignSelf: 'center',
        marginTop: '50%',
        fontFamily: fonts.bold,
        fontSize: 16,
        color: primaryColors.grey
    },
    modalView: {
        // width: '80%',
        // height: 100,
        backgroundColor: primaryColors.white,
        borderRadius: 8,
        paddingBottom: 15
    },
    pickerWraper: {
        width: '85%',
        alignSelf: 'center',
        marginTop: '5%'
    },
    arrow: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontFamily: fonts.bold,
        fontSize: 16,
        marginTop: 30
    },
    buttonWraper: {
        width: '20%',
        marginTop: 20,
        height: 35
    }
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