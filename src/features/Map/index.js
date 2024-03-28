import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import Button from '../../components/Button/index';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import styles from './Style';
import LocationItem from './components/locationItem';
import { greenMarker, backButton, close, searchRight } from '../../images';
import { useSelector, useDispatch } from 'react-redux';
// import { setLatlon } from '../../redux/actions/auth';
// import { setFilterLatlon } from '../../redux/actions/estates';
import { setMaintenanceLatlon } from '../../redux/actions/maintenance';

export default function index(props) {

    const [userLocation, setUserLocation] = useState({ latitude: 24.678367860487278, longitude: 46.67663427069783 });
    const [selectedLocation, setSelectedLocation] = useState({});
    const [locationChoosen, setLocationChoosen] = useState(false);
    const [searchBox, setSearchBox] = useState(true);
    const [latlonDelta, setLatlonDelta] = useState({ latitudeDelta: 0.5238848929041424, longitudeDelta: 0.3265415132045746 });
    const [isMapReady, setIsMapReady] = useState(false);
    // useEffect(() => {
    //     getLocationHandler();
    // }, []);

    const dispatch = useDispatch();

    // const latlonHandler = useCallback(() => {
    //     dispatch(setLatlon(userLocation));
    //     props.navigation.goBack();
    // }, [dispatch, userLocation]);

    // const filterLatlonHandler = useCallback(() => {
    //     dispatch(setFilterLatlon(selectedLocation));
    //     // console.log('selected location: ', selectedLocation)
    //     props.navigation.goBack();
    // }, [dispatch, selectedLocation]);

    const maintenanceLatlonHandler = useCallback(() => {
        dispatch(setMaintenanceLatlon(selectedLocation));
        // console.log('selected location: ', selectedLocation)
        props.navigation.goBack();
    }, [dispatch, selectedLocation]);

    // useEffect(() => {
    //     console.log('selected location: ', selectedLocation)
    // }, [selectedLocation])

    function pickLocationHandler(coords) {
        map.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: latlonDelta.latitudeDelta,
            longitudeDelta: latlonDelta.longitudeDelta,
        });
    };

    // getLocationHandler = () => {
    //     Geolocation.getCurrentPosition(info => {
    //         console.log("info.coords: ", info.coords.longitude, info.coords)
    //         setUserLocation({
    //             longitude: info.coords.longitude,
    //             latitude: info.coords.latitude,
    //         });
    //         setSelectedLocation({
    //             longitude: info.coords.longitude,
    //             latitude: info.coords.latitude,
    //         });
    //         pickLocationHandler({
    //             longitude: info.coords.longitude,
    //             latitude: info.coords.latitude,
    //         });
    //         setLocationChoosen(true);
    //     },
    //         err => {
    //             console.log(err);
    //         });
    // }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                ref={ref => {
                    map = ref;
                }}
                // provider={MapView.PROVIDER_GOOGLE}
                initialRegion={{
                    longitude: userLocation.longitude,
                    latitude: userLocation.latitude,
                    latitudeDelta: latlonDelta.latitudeDelta,
                    longitudeDelta: latlonDelta.longitudeDelta,
                }}
                onPress={(coordinate) => {
                    console.log("coordinate.nativeEvent.coordinate.longitude: ", coordinate.nativeEvent.coordinate.longitude, coordinate.nativeEvent.coordinate)
                    setUserLocation({ longitude: coordinate.nativeEvent.coordinate.longitude, latitude: coordinate.nativeEvent.coordinate.latitude });
                    setSelectedLocation({ longitude: coordinate.nativeEvent.coordinate.longitude, latitude: coordinate.nativeEvent.coordinate.latitude });
                    setLocationChoosen(true);
                    pickLocationHandler({
                        longitude: coordinate.nativeEvent.coordinate.longitude,
                        latitude: coordinate.nativeEvent.coordinate.latitude,
                    })
                }}
                onRegionChange={(Region) => setLatlonDelta({ latitudeDelta: Region.latitudeDelta, longitudeDelta: Region.longitudeDelta })}
                onLayout={(e) => { setIsMapReady(true) }}
            >
                {
                    locationChoosen && isMapReady ?
                        <MapView.Marker
                            coordinate={{
                                longitude: userLocation.longitude,
                                latitude: userLocation.latitude
                            }}
                            image={null}
                        >
                            <Image source={greenMarker} style={{ width: 54, height: 70, alignItems: 'center', paddingTop: 4 }} resizeMode='contain' />
                        </MapView.Marker>
                        : null
                }
            </MapView>
            {
                searchBox ?
                    <GoogleAutoComplete apiKey="AIzaSyAxdZB4lGeaCxY-Qiojx1EuVk25pxFyKkM" debounce={300}>
                        {({ inputValue, handleTextChange, locationResults, fetchDetails, isSearching, clearSearch }) => (
                            < React.Fragment >
                                <View style={styles.searchInputWraper}>
                                    <TouchableOpacity onPress={clearSearch} onPress={() => setSearchBox(false)} >
                                        <Image source={close} style={{ width: 37, height: 37 }} resizeMode='contain' />
                                    </TouchableOpacity>
                                    <View style={styles.divider} />
                                    <Image source={searchRight} style={{ width: 25.5, height: 25.5, marginLeft: 7.5 }} resizeMode="contain" />
                                    <TextInput
                                        style={styles.searchInput}
                                        value={inputValue}
                                        onChangeText={handleTextChange}
                                    />
                                </View>
                                {isSearching && <ActivityIndicator size='large' color='red' style={styles.activityIndicator} />}
                                <ScrollView style={styles.dropdownList}>
                                    {locationResults.map((el, i) => (
                                        <LocationItem
                                            {...el}
                                            fetchDetails={fetchDetails}
                                            key={String(i)}
                                        />
                                    ))}
                                </ScrollView>
                            </React.Fragment>
                        )}
                    </GoogleAutoComplete>
                    :
                    <TouchableOpacity style={styles.searchBtnWraper} onPress={() => setSearchBox(true)}>
                        <Image source={searchRight} style={{ width: '85%', height: '85%' }} resizeMode="contain" />
                    </TouchableOpacity>
            }
            <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.goBack()} >
                <Image source={backButton} style={{ width: 34, height: 34 }} />
            </TouchableOpacity>
            <Button
                onPress={() => { maintenanceLatlonHandler() }}
                title='حفظ الموقع'
                style={styles.buttonWraper}
                titleStyle={{ top: 0 }}
            />
        </View >
    );
}
