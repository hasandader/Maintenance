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
        backgroundColor: 'white',
        justifyContent: 'flex-end'
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
    titleText: {
        fontFamily: fonts.bold,
        alignSelf: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        marginRight: 30,
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 25,
        lineHeight: 37,
        color: primaryColors.white,
    },
});
