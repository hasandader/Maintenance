import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    I18nManager
} from 'react-native';
import PropTypes from 'prop-types';
import { Edit } from '../../../images/index';
import { primaryColors } from '../../../theme/colors';
import styles from './Style';

const DetailsCard = props => {
    const {
        edits,
        information,
        onEdit
    } = props;

    return (
        <View style={[styles.detailsCardWraper, styles.shadow]}>
            <View style={styles.cardHeader}>
                {
                    edits ?
                        <TouchableOpacity style={{ width: '20%', alignItems: 'center' }} onPress={() => onEdit()}>
                            <Edit />
                        </TouchableOpacity>
                        :
                        <View style={{ width: '20%' }} />
                }
                <Text style={styles.headerText} >{information.title}</Text>
                <View style={{ width: '20%' }} />
            </View>
            {
                information.data.map(item => (
                    <View style={styles.detailsContainer}>
                        {
                            item.value &&
                            <>
                                <Text style={[styles.detailsText, { color: primaryColors.yellow, flex: 1, textAlign: I18nManager.isRTL ? 'left' : 'right' }]}>{item.value}</Text>
                                <Text style={styles.dots}> : </Text>
                                <Text style={styles.detailsText}>{item.attribute}</Text>
                            </>
                        }
                    </View>
                ))
            }
        </View>
    );
};

DetailsCard.propTypes = {
    edits: PropTypes.any,
    information: PropTypes.object
}

export default DetailsCard;