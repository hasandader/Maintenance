import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../../theme/colors';
import { fonts } from '../../../theme/fonts';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
    },
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
});
