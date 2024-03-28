import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, TouchableOpacity, TextInput, FlatList, Text, ActivityIndicator } from 'react-native';
import Header from './components/index';
import styles from './Style';
import {
    searchRight, close, house
} from '../../images/index';
import MaintenanceCard from './components/maintenanceCard';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryTickets } from '../../redux/actions/maintenance';
import { primaryColors } from '../../theme/colors';
import { deviceHeight } from '../../lib/utility';

export default function ElectricMaintenance(props) {
    const title = props.navigation.getParam('title');

    const maintenanceToken = useSelector(state => state.maintenanceAuth.maintenanceToken);
    const categoryTickets = useSelector(state => state.maintenance.categoryTickets);
    const loadings = useSelector(state => state.ui.loadings);

    const dummyData = [
        { id: 0, date: '22/04', requestNO: 'طلب 9', status: 'قيد الانتظار', statusEn: 'pending', name: 'فايز القحطاني', phone: '0599059059', address: 'الروابي / الرياض / السعودية', image: house, color: '#ffc524' },
        { id: 1, date: '21/04', requestNO: 'طلب 9', status: 'تم التواصل', statusEn: 'accepted', name: 'فايز القحطاني', phone: '0599059059', address: 'الروابي / الرياض / السعودية', image: house, color: '#28c26c' },
        { id: 2, date: '19/04', requestNO: 'طلب 9', status: 'مرفوض', statusEn: 'refused', name: 'فايز القحطاني', phone: '0599059059', address: 'الروابي / الرياض / السعودية', image: house, color: '#f22f42' }
    ];

    const [tickets, setTickets] = useState([]);
    const [initial, setInitial] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');

    const dispatch = useDispatch();

    const ticketsHandler = useCallback(() => {
        const id = props.navigation.getParam('id');
        dispatch(getCategoryTickets(maintenanceToken, id));
        console.log('id: ', id)
    }, [dispatch]);

    useEffect(() => {
        ticketsHandler();
    }, []);

    useEffect(() => {
        if (categoryTickets) {
            setTickets(categoryTickets);
            setInitial(categoryTickets);
        }
    }, [categoryTickets]);

    const arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];
    function fixNumbers(str) {
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(arabicNumbers[i], i);
            }
        }
        return str;
    };

    function filter(searchedText) {
        setSearchTxt(searchedText);
        const newData = initial.filter((data) => {
            let requestNO = '';
            if (data.s_id) {
                requestNO = data.s_id.toString().toLowerCase()
            }
            const renter = data.renter.toString().toLowerCase()
            const mobile = data.renters.mobile.toString().toLowerCase()
            const text = searchedText.toString().toLowerCase()
            return requestNO.indexOf(fixNumbers(text)) > -1 || renter.indexOf(text) > -1 || mobile.indexOf(text) > -1
        })
        setTickets(newData);
        console.log('initial: ', initial)
    }

    return (
        <View style={styles.container}>
            <Header
                navigation={props.navigation}
                title={title}
                back
            />
            <View style={styles.searchInputWraper}>
                <TouchableOpacity onPress={() => { searchTxt && filter('') }}>
                    <Image source={close} style={{ width: 37, height: 37 }} resizeMode='contain' />
                </TouchableOpacity>
                <View style={styles.verticalDivider} />
                <Image source={searchRight} style={{ width: 25.5, height: 25.5, marginLeft: 7.5, marginRight: 7.5 }} resizeMode="contain" />
                <TextInput
                    style={styles.searchInput}
                    onChangeText={(value) => filter(value)}
                    value={searchTxt}
                />
            </View>

            {
                loadings.includes('getCategoryTickets') ?
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={primaryColors.persianGreen} />
                    </View>
                    :
                    Object.keys(tickets).length > 0 ?
                        <FlatList
                            data={tickets.reverse()}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={{ paddingTop: 18, paddingBottom: deviceHeight() * 0.13 }}
                            ListHeaderComponent={() => (
                                loadings.includes('getCategoryTickets') &&
                                <View style={styles.activityIndicator}>
                                    <ActivityIndicator size="large" color={primaryColors.persianGreen} />
                                </View>
                            )}
                            renderItem={({ item, index }) => {
                                return (
                                    <MaintenanceCard
                                        image={item.image || ''} date={item.created_at} requestNO={item.s_id}
                                        status={item.status_name} statusEn={item.status} name={item.renter}
                                        phone={item.renters.mobile} address={item.property_location}
                                        onPress={() => props.navigation.navigate('RequestDetails', {
                                            ticketID: item.id
                                        })}
                                    />
                                );
                            }}
                        />
                        :
                        <Text style={styles.text}>لا يوجد طلبات صيانة</Text>
            }
        </View>
    );
}
