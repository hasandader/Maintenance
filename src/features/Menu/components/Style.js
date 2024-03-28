import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../../theme/colors';
import { fonts } from '../../../theme/fonts';

export default StyleSheet.create({
    header: {
        height: 150,
        alignItems: 'baseline',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    imageTop: {
        width: '100%',
        height: "100%",
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    backButton: {
        tintColor: primaryColors.white,
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
        marginTop: 60,
        marginRight: 20,
        marginLeft: 20,
        width: 30,
        height: 30,
        marginBottom: 11,
    },
    backIcon: {
        width: '100%',
        height: '100%',
    },
    titleText: {
        fontFamily: fonts.bold,
        marginTop: 60,
        marginRight: 20,
        marginLeft: 20,
        fontSize: 25,
        lineHeight: 37,
        color: primaryColors.white,
        marginBottom: 11
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
    backBtn: {
        width: 35,
        height: 35
    }
});
