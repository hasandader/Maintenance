import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Style';
import moment from '../../../lib/Moment';

const Card = props => {
    const {
        image,
        date,
        requestNO,
        status,
        statusEn,
        name,
        phone,
        address,
        style,
        onPress,
    } = props;

    let color = '#ffc524';
    if (statusEn == 'accepted') {
        color = '#28c26c';
    } else if (statusEn == 'refused') {
        color = '#f22f42';
    } else {
        color = '#ffc524';
    };

    return (
        <TouchableOpacity style={[styles.maintenanceCardWraper, styles.shadow, style]} onPress={onPress} >
            <View style={styles.cardTopWraper}>
                <View style={styles.cardArchiving}>
                    <Text style={[styles.statusTxt, styles.descText]}>طلب {requestNO}</Text>
                    <View style={styles.dateWraper}>
                        <Text style={styles.dateText}>{moment(date).format("MM/DD")}</Text>
                    </View>
                </View>
                <View style={[styles.statusWraper, { backgroundColor: color }]}>
                    <Text style={styles.statusTxt}>{status}</Text>
                </View>
            </View>
            <View style={styles.cardSubContainer}>
                <View style={{ width: '33%', height: '78%' }}>
                    <Image source={{ uri: image }} style={styles.image} resizeMode='cover' />
                </View>
                <View style={styles.descriptionWraper}>
                    <Text style={[styles.statusTxt, styles.descText]}>{name}</Text>
                    <Text style={[styles.statusTxt, styles.descText]}>{phone}</Text>
                    <Text style={[styles.statusTxt, styles.descText, styles.addressTxt]}>{address}</Text>
                </View>
            </View>
        </TouchableOpacity >
    );
};

Card.propTypes = {
    date: PropTypes.string,
    requestNO: PropTypes.string,
    status: PropTypes.string,
    statusEn: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
    style: PropTypes.any,
    image: PropTypes.number,
    onPress: PropTypes.func,
}

export default Card;