import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.white,
    },
    listContainer: {
        paddingTop: 6
    },
    header: {
        fontFamily: fonts.regular,
        fontSize: 14,
        color: primaryColors.doveGray,
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        marginRight: I18nManager.isRTL ? 0 : 30,
        marginLeft: I18nManager.isRTL ? 30 : 0,
        marginTop: 10
    },
    newNotif: {
        maxHeight: '25%',
    },
    notifWraper: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        paddingRight: 17,
        paddingLeft: 17,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    longText: {
        flexShrink: 1,
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        flex: 1,
        paddingLeft: I18nManager.isRTL ? 0 : 10,
        paddingRight: I18nManager.isRTL ? 10 : 0,
    },
    text: {
        fontFamily: fonts.regular,
        fontSize: 12,
        color: primaryColors.doveGray,
        paddingTop: 5
    },
    avatarWraper: {
        marginRight: I18nManager.isRTL ? 0 : 12,
        flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',
        alignItems: 'flex-end'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ececec',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    online: {
        width: 12,
        height: 12,
        borderRadius: 10,
        borderWidth: 0.6,
        borderColor: primaryColors.white,
        backgroundColor: primaryColors.chateauGreen,
        marginLeft: I18nManager.isRTL ? -10 : 0,
        marginRight: I18nManager.isRTL ? 0 : -10,
        elevation: 3,
    },
    divider: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: primaryColors.ming,
        marginBottom: 15
    }
})