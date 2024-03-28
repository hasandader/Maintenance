import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../../theme/colors';
import { fonts } from '../../../theme/fonts';
import { deviceHeight, deviceWidth, isPlatformIos } from '../../../lib/utility';

export default StyleSheet.create({
    header: {
        height: 150,
        alignItems: 'baseline',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        // marginBottom: 10
    },
    imageTop: {
        width: '100%',
        height: "100%",
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        justifyContent: 'space-between',
    },
    backButton: {
        tintColor: primaryColors.white
    },
    whiteArea: {
        width: '100%',
        height: 60,
        position: 'absolute',
        marginTop: 115,
        borderRadius: 30,
        backgroundColor: primaryColors.white
    },
    backBtnWraper: {
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        width: 45,
        height: 45,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    backIcon: {
        width: 35,
        height: 35,
    },
    titleText: {
        fontFamily: fonts.bold,
        marginRight: 30,
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 25,
        lineHeight: 37,
        color: primaryColors.white,
        alignSelf: 'flex-end'
    },
    searchWraper: {
        marginTop: 60,
        marginRight: 20,
        marginLeft: 20,
        width: 32,
        height: 32,
        backgroundColor: primaryColors.white,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchIcon: {
        width: 25,
        height: 25
    },
    cardWraper: {
        width: deviceWidth() * 0.44,
        height: deviceHeight() * 0.18,
        borderRadius: 4,
        marginBottom: 13,
    },
    imageWraper: {
        width: '100%',
        height: '72%'
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4
    },
    textWraper: {
        width: '100%',
        height: '28%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardText: {
        fontFamily: fonts.regular,
        fontSize: 14,
        lineHeight: 19,
        color: primaryColors.eclipse
    },
    maintenanceCardWraper: {
        // flexDirection: 'row-reverse',
        width: '100%',
        height: 150,//deviceHeight() * 0.165,
        marginBottom: 10,
        paddingRight: 14,
        paddingLeft: 19
    },
    cardTopWraper: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        width: '100%',
        height: '30%',
        paddingTop: 7,
        // marginBottom: 10,
        justifyContent: 'space-between'
    },
    cardSubContainer: {
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        height: '70%'
    },
    cardArchiving: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        width: '48%',
        justifyContent: 'space-between',
        marginBottom: 13,
        borderRadius: 2,
    },
    statusWraper: {
        width: 94,
        height: 30,
        backgroundColor: primaryColors.yellow,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    statusTxt: {
        color: primaryColors.white,
        fontFamily: fonts.regular,
        fontSize: 14,
        lineHeight: 19,
        paddingTop: isPlatformIos() ? 4 : 0
    },
    descriptionWraper: {
        alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        justifyContent: 'space-evenly',
        marginRight: 18,
        marginLeft: 18,
        // marginBottom: '22%',
        // borderWidth: 1,
        width: '65%'
    },
    descText: {
        color: primaryColors.eclipse
    },
    addressTxt: {
        paddingLeft: 10,
        // paddingRight: 5,
        // borderWidth: 1,
        // width: '55%',
        alignSelf: 'flex-start'
    },
    dateText: {
        fontFamily: fonts.regular,
        fontSize: 16,
        lineHeight: 22,
        color: primaryColors.grey,
        paddingTop: isPlatformIos() ? 4 : 0
    },
    dateWraper: {
        width: 63,
        height: 25,
        backgroundColor: primaryColors.whiteSmoke,
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadow: {
        backgroundColor: primaryColors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,

        elevation: 3,
    },
    detailsCardWraper: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 10,
        paddingBottom: 21,
        paddingRight: I18nManager.isRTL ? 0 : 15,
        paddingLeft: I18nManager.isRTL ? 15 : 0,
        paddingTop: 12,
        borderRadius: 8
    },
    cardHeader: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between'
    },
    detailsContainer: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        marginTop: 12,
        justifyContent: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        paddingLeft: 5
    },
    headerText: {
        fontFamily: fonts.bold,
        fontSize: 18,
        lineHeight: 26,
        color: primaryColors.eclipse
    },
    detailsText: {
        fontFamily: fonts.regular,
        fontSize: 16,
        lineHeight: 22,
        color: primaryColors.eclipse,
    },
    dots: {
        fontFamily: fonts.regular,
        fontSize: 20,
        lineHeight: 22,
        color: primaryColors.teal
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        backgroundColor: primaryColors.lightGrey
    }
});
