import { StyleSheet, I18nManager } from 'react-native';
import { primaryColors } from '../../../theme/colors';

export default StyleSheet.create({
    header: {
        height: 203,
        alignItems: 'baseline',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        color: primaryColors.white,
        fontWeight: 'bold',
        marginLeft: '37%'
    },
    headerWraper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        width: '100%',
    },
    topBackBtn: {
        alignSelf: I18nManager.isRTL ? 'flex-end' : 'flex-start',
        marginTop: 60,
        marginLeft: 20,
        marginRight: 20,
        width: 30,
        height: 30
    },
    searchSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    searchIcon: {
        padding: 10,
        paddingLeft: 18
    },
    topIcon: {
        marginRight: 18
    },
    input: {
        flex: 1,
        backgroundColor: primaryColors.white,
        height: 40,
        borderRadius: 8,
    },
    backButton: {
        tintColor: primaryColors.white
    },
    headerLeft: {
        alignSelf: 'flex-start',
        padding: 10,
        paddingLeft: 18
    },
    headerText: {
        color: primaryColors.yellow,
        fontSize: 18,
        lineHeight: 33,
        textAlign: 'left',
        marginRight: 16
    },
    whiteArea: {
        width: '100%',
        height: 50,
        position: 'absolute',
        marginTop: 178,
        borderRadius: 30,
        backgroundColor: primaryColors.white
    }
});
