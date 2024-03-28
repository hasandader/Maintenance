import { StyleSheet, I18nManager } from 'react-native';
import { deviceHeight } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColors.white
    },
    map: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between'
    },
    backBtn: {
        marginTop: 50,
        marginLeft: 28,
        paddingRight: 28,
        alignSelf: I18nManager.isRTL ? 'flex-end' : 'flex-start',
        position: 'absolute'
    },
    buttonWraper: {
        marginBottom: deviceHeight() <= 700 ? 90 : 130,
        position: 'absolute',
        bottom: 0,
    },
    buttonText: {
        fontFamily: fonts.regular,
        color: primaryColors.white,
        fontSize: 18,
        lineHeight: 25,
        textAlign: 'center',
    },
    searchInputWraper: {
        flexDirection: 'row',
        height: 48,
        width: '85%',
        alignItems: 'center',
        marginTop: 110,
        position: 'absolute',
        alignSelf: 'center',
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
    searchInput: {
        flex: 1,
        height: '100%'
    },
    divider: {
        borderWidth: 0.5,
        height: 26,
        borderColor: primaryColors.suvaGrey
    },
    activityIndicator: {
        position: 'absolute',
        marginTop: 200,
        alignSelf: 'center'
    },
    dropdownList: {
        maxHeight: 100,
        position: 'absolute',
        marginTop: 50,
        marginLeft: 100
    },
    searchBtnWraper: {
        position: 'absolute',
        marginTop: 110,
        marginLeft: 28,
        backgroundColor: primaryColors.white,
        borderRadius: 25,
        width: 34,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
