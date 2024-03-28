import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StatusBar,
    FlatList,
    Image,
} from 'react-native';
import styles from './Style';
import Header from './components/index';
import { avatar } from '../../images/index';
import { primaryColors } from '../../theme/colors';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default function Notifications(props) {

    const [newNotif, setNewNotif] = useState([
        { text: 'تمت الموافقة على تذكرة رقم 9 المضافة من طرفك بواسطة مكتب النهدي', time: '  11:30 م' },
        { text: 'تم رفض التذكرة رقم 9 المضافة من طرفك لِ مكتب النهدي', time: '10:50 م' },
        { text: 'تم إكمال طلب الصيانة  رقم 9 بواسطة مكتب النهدي', time: '9:50 م' },
    ]);
    const [oldNotif, setOldNotif] = useState([
        { text: 'تمت الموافقة على تذكرة رقم 9 المضافة من طرفك بواسطة مكتب النهدي', time: '  11:30 م' },
        { text: 'تم رفض التذكرة رقم 9 المضافة من طرفك لِ مكتب النهدي', time: '10:50 م' },
        { text: 'تم إكمال طلب الصيانة  رقم 9 بواسطة مكتب النهدي', time: '9:50 م' }
    ]);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Header
                navigation={props.navigation}
                title="الاشعارات"
            />
            <Text style={styles.header}>اليوم</Text>
            <FlatList
                style={styles.newNotif}
                contentContainerStyle={styles.listContainer}
                data={newNotif}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.notifWraper}>
                            <Text style={[styles.text, { color: primaryColors.saffron }]} >{item.time}</Text>
                            <Text style={[styles.longText, styles.text]}>{item.text}</Text>
                            <View style={styles.avatarWraper}>
                                {/* <Image source={avatar} style={styles.avatar} resizeMode='contain' /> */}
                                <View style={styles.avatar} />
                                <View style={[styles.online, index == 1 && { backgroundColor: primaryColors.pomegranate }]} />
                            </View>
                        </View>
                    )
                }}
            />
            <View style={styles.divider} />
            <Text style={styles.header}>الاقدم</Text>
            <FlatList
                contentContainerStyle={styles.listContainer}
                data={oldNotif}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.notifWraper}>
                            <Text style={[styles.text, { color: primaryColors.saffron }]} >{item.time}</Text>
                            <Text style={[styles.longText, styles.text]}>{item.text}</Text>
                            <View style={styles.avatarWraper}>
                                {/* <Image source={avatar} style={styles.avatar} resizeMode='contain' /> */}
                                <View style={styles.avatar} />
                                <View style={[styles.online, index == 1 && { backgroundColor: primaryColors.pomegranate }]} />
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}
