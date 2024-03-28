import React, { useState, useCallback, useEffect } from 'react';
import { View, Image, TouchableOpacity, TextInput, FlatList, ActivityIndicator, StatusBar } from 'react-native';
import Header from './components/index';
import styles from './Style';
import {
    searchRight, close,
    electricMaintenance,
    waterMaintenance,
    conditioningMaintenance,
    elevatorMaintenance,
    cleaning,
    othersMaintenance,
} from '../../images/index';
import Card from './components/card';
import { getCategories } from '../../redux/actions/maintenance';
import { useSelector, useDispatch } from 'react-redux';
import { primaryColors } from '../../theme/colors';

export default function index(props) {
    const maintenanceToken = useSelector(state => state.maintenanceAuth.maintenanceToken);
    const categories = useSelector(state => state.maintenance.categories);
    const loadings = useSelector(state => state.ui.loadings);

    // const maintenanceTypes = [
    //     { id: 0, type: 'صيانة كهرباء', image: electricMaintenance },
    //     { id: 1, type: 'صيانة مياه', image: waterMaintenance },
    //     { id: 2, type: 'صيانة تكييف', image: conditioningMaintenance },
    //     { id: 3, type: 'مصاعد', image: elevatorMaintenance },
    //     { id: 4, type: 'تنظيف', image: cleaning },
    //     { id: 5, type: 'أخرى', image: othersMaintenance },
    // ]

    const [maintenanceTypes, setMaintenanceTypes] = useState([]);
    const [initial, setInitial] = useState([]);
    const [searchTxt, setSearchTxt] = useState('');

    const dispatch = useDispatch();

    const categoriesHandler = useCallback(() => {
        console.log('hererreerer')
        dispatch(getCategories(maintenanceToken));

    }, [dispatch]);

    useEffect(() => {
        categoriesHandler();
    }, []);

    useEffect(() => {
        if (categories.length > 0) {
            setMaintenanceTypes(categories);
            setInitial(categories);
        }
    }, [categories]);

    function filter(searchedText) {
        setSearchTxt(searchedText);
        const newData = initial.filter((data) => {
            const name = data.name_ar.toLowerCase()
            const text = searchedText.toLowerCase()
            return name.indexOf(text) > -1
        })
        setMaintenanceTypes(newData);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <Header
                navigation={props.navigation}
                title="التصنيفات"
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

            <FlatList
                data={maintenanceTypes}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ paddingTop: 17, alignItems: 'center' }}
                numColumns={2}
                ListHeaderComponent={() => (
                    loadings.includes('getCategories') &&
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={primaryColors.persianGreen} />
                    </View>
                )}
                renderItem={({ item, index }) => {
                    return (
                        <Card image={item.logo_path} text={item.name_ar} style={index % 2 == 0 && { marginRight: 11 }} onPress={() => props.navigation.navigate('ElectricMaintenance', {
                            id: item.id,
                            title: item.name_ar
                        })} />
                    );
                }}
            />
        </View>
    );
}
