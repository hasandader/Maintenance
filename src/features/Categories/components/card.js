import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './Style';

const Card = props => {
    const {
        image,
        text,
        onPress,
        style
    } = props;
    return (
        <TouchableOpacity style={[styles.cardWraper, styles.shadow, style]} onPress={onPress} >
            <View style={styles.imageWraper}>
                <Image source={{ uri: image }} style={styles.cardImage} resizeMode='cover' />
            </View>
            <View style={styles.textWraper}>
                <Text style={styles.cardText}>{text}</Text>
            </View>
        </TouchableOpacity >
    );
};

Card.propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    style: PropTypes.any,
    image: PropTypes.string,
}

export default Card;