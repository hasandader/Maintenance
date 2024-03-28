import React from 'react';
import { View, Text } from 'react-native';

export default function locationItem(props) {
    return (
        <View>
            <Text> locationItem </Text>
            <Text>{props.fetchDetails}</Text>
        </View>
    );
}
