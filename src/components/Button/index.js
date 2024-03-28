import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './style';

const Button = (props) => {
    const {
        onPress,
        title,
        style,
        titleStyle,
        disabled
    } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.buttonWraper, style]}
            disabled={disabled}
        >
            <Text style={[styles.buttonText, titleStyle]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    onPress: PropTypes.func,
    title: PropTypes.string,
    style: PropTypes.any,
    titleStyle: PropTypes.any,
    disabled: PropTypes.bool,
}

export default Button