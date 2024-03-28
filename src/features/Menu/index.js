import React, { useCallback } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import styles from './Style';
import { Logout, LeftArrow, User } from '../../images/index';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../redux/actions/auth';
import { isPlatformIos } from '../../lib/utility';

export default function index(props) {

    const dispatch = useDispatch();

    const logOutHandler = useCallback(() => {
        dispatch(logOut());
    }, [dispatch]);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: '#fff' }]}>
            {isPlatformIos() && <StatusBar barStyle='dark-content' />}

            <Text style={styles.header}>القائمة الجانيبية</Text>

            <ScrollView style={styles.subContainer}>
                <View style={[styles.rowWraper, styles.row]}>
                    <LeftArrow />
                    <TouchableOpacity style={styles.rowWraper} onPress={() => props.navigation.navigate('Profile')} >
                        <Text style={styles.menuText}>الملف الشخصي</Text>
                        <User />
                    </TouchableOpacity>
                </View>
                <View style={[styles.divider, { marginBottom: 18 }]} />

                <View style={[styles.rowWraper, styles.row]}>
                    <LeftArrow />
                    <TouchableOpacity style={styles.rowWraper} onPress={() => logOutHandler()} >
                        <Text style={styles.menuText}>تسجيل الخروج</Text>
                        <Logout />
                    </TouchableOpacity>
                </View>
                <View style={styles.divider} />
            </ScrollView>
        </SafeAreaView>
    );
}
