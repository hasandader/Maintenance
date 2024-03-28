import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView, ActivityIndicator, ImageBackground, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';
import Header from './components/index';
import styles from './Style';
import { pickerSelect } from './Style';
import { addPhoto, like, back, locationMarker, ArrowDown } from '../../images/index';
import Button from '../../components/Button/index';
import { primaryColors } from '../../theme/colors';
import Modal from "react-native-modal";
import { useSelector, useDispatch } from 'react-redux';
import { getProperties, getUnits, sendImage, maintenanceRequest, setRequestAdded } from '../../redux/actions/maintenance';
import { isPlatformAndroid, deviceHeight } from '../../lib/utility';
import * as Progress from 'react-native-progress';

const providers = require('../../data/dummyData/providers.json');

export default function index(props) {
    const selectedPlace = useSelector(state => state.maintenance.latlon);
    const maintenanceToken = useSelector(state => state.maintenanceAuth.maintenanceToken);
    const properties = useSelector(state => state.maintenance.properties);
    const propertyUnits = useSelector(state => state.maintenance.units);
    const isRequestAdded = useSelector(state => state.maintenance.isRequestAdded);
    const loadings = useSelector(state => state.ui.loadings);
    const categories = useSelector(state => state.maintenance.categories);
    const authData = useSelector(state => state.maintenanceAuth.authData);

    console.log('authData: ', authData);
    console.log('selectedPlace: ', selectedPlace);

    const [stack, setStack] = useState(["firstScreen"]);
    const [flag, setFlag] = useState('changeing');
    const [initialEstate, setInitialEstate] = useState('');
    const [estateListItem, setEstateListItem] = useState('');
    const [initialApartment, setInitialApartment] = useState('');
    const [apartmentListItem, setApartmentListItem] = useState('');
    const [image, setImage] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [secondaryPhone, setSecondaryPhone] = useState('');

    const [estateErr, setEstateErr] = useState('');
    const [apartmentErr, setApartmentErr] = useState('');
    const [descriptionErr, setDescriptionErr] = useState('');
    const [phoneErr, setPhoneErr] = useState('');
    const [imageErr, setImageErr] = useState('');

    const [addressErr, setAddressErr] = useState('');
    const [address, setAddress] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    const [estates, setEstates] = useState([]);
    const [units, setUnits] = useState([]);
    const [file, setFile] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const [categoryList, setCategoryList] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [selectedProvider, setSelectedProvider] = useState(null);

    const [progress, setProgress] = useState(0.33)

    const dispatch = useDispatch();

    const propertiesHandler = useCallback(() => {
        dispatch(getProperties(maintenanceToken));
        console.log('propertiesHandler 2')
    }, [dispatch]);

    const unitsHandler = useCallback(() => {
        console.log('estateListItem: ', estateListItem)
        dispatch(getUnits(maintenanceToken, estateListItem.key));
    }, [dispatch, estateListItem]);

    useEffect(() => {
        if (isPlatformAndroid() && estateListItem) {
            unitsHandler()
        }
    }, [estateListItem]);

    const sendImageHandler = useCallback(() => {
        console.log('file: ', photo, file)
        let data = {
            property_id: estateListItem.key,
            unit_id: apartmentListItem.key,
            category_id: selectedCategory && selectedCategory.key || 6,
            image: '',
            property_location: address,
            property_latitude: selectedPlace.latitude,
            property_longitude: selectedPlace.longitude,
            notes: description
        };

        if (image) {
            dispatch(sendImage(maintenanceToken, file, data));
        } else {
            dispatch(maintenanceRequest(maintenanceToken, data));
        }

    }, [dispatch, file, estateListItem, apartmentListItem, address, selectedPlace]);

    const conditionHandler = useCallback(() => {
        dispatch(setRequestAdded(false));
    }, [dispatch]);

    useEffect(() => {
        propertiesHandler();
        console.log('propertiesHandler')
        let category = [];
        categories.forEach(element => {
            category.push({ key: element.id, value: { text: element.name_ar, key: element.id }, label: element.name_ar })
        });
        setCategoryList(category);
    }, [categories]);

    useEffect(() => {
        if (properties.length > 0) {
            setEstates(properties);
        }
    }, [properties]);

    useEffect(() => {
        if (propertyUnits.length > 0) {
            setUnits(propertyUnits);
        }
    }, [propertyUnits]);

    useEffect(() => {
        if (stack[stack.length - 1] == 'secondScreen') {
            getAddress();
        }
    }, [selectedPlace]);

    useEffect(() => {
        if (isRequestAdded) {
            setModalVisible(isRequestAdded);
        };
        setDisabled(false);
    }, [isRequestAdded]);

    useEffect(() => {
        if (properties.length > 0) {
            let items = [];
            setInitialEstate(properties[0])
            for (let i = 1; i < properties.length; i++) {
                items.push(properties[i]);
            }
            setEstates(items);
        }
    }, [properties]);

    useEffect(() => {
        if (propertyUnits.length > 0) {
            let items = [];
            setInitialApartment(propertyUnits[0]);
            for (let i = 1; i < propertyUnits.length; i++) {
                items.push(propertyUnits[i]);
            }
            setUnits(items);
        }
    }, [propertyUnits]);

    useEffect(() => {
        if (authData) {
            setPhone(authData.email);
        }
    }, [authData]);

    imagePicker = () => {
        ImagePicker.showImagePicker({
            title: "إختر صورة أو قم بالتقاط صورة جديدة",
            cancelButtonTitle: "إلغاء",
            takePhotoButtonTitle: "إلتقاط صورة...",
            chooseFromLibraryButtonTitle: "إختيار من الإستيديو...",
            mediaType: 'photo',
            maxWidth: 1920,
            quality: 0.3,
            storageOptions: {
                skipBackup: true,
                path: 'images',
                privateDirectory: true
            },
        }, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: 'data:image/jpeg;base64,' + response.data };//{ uri: response.uri };
                setImage(source);
                let imageSource = isPlatformAndroid() ? response.uri : response.uri.replace("file://", "");
                setPhoto(imageSource);
                console.log('imageSource: ', response.data)

                var formData = new FormData();
                formData.append('files[]', {
                    uri: imageSource,
                    type: 'image/jpeg',
                    name: 'ticektImage.png',
                });

                setFile(formData);
                console.log('print file: ', formData)
                // console.log(response.fileSize, "Base64: ", response.data);

            }
        });
    }

    next = () => {
        if (estateListItem == '') {
            setEstateErr('يجب عليك اختيار العقار.');
        } else {
            setEstateErr('');
        }
        if (apartmentListItem == '') {
            setApartmentErr('يجب عليك اختيار الوحدة.');
        } else {
            setApartmentErr('');
        }
        if (description == '') {
            setDescriptionErr('يجب عليك ادخال توضيح.');
        } else {
            setDescriptionErr('');
        }
        if (phone == '') {
            setPhoneErr('يجب عليك ادخال رقم الهاتف.');
        } else {
            setPhoneErr('');
        }
        // if (image == null) {
        //     setImageErr('يجب عليك إرفاق صورة.')
        // } else {
        //     setImageErr('');
        // }

        if (estateListItem && apartmentListItem && description && phone) {
            let data = {
                estate: estateListItem,
                apartment: apartmentListItem,
                description: description,
                phone: phone
            }

            setStack([...stack, 'secondScreen'])
            setProgress(0.66)
        }

        // sendImageHandler();
    }

    const toLastScreen = () => {
        if (address == '') {
            setAddressErr('يجب عليك ادخال العنوان.');
        } else {
            setAddressErr('')
        }

        if (address) {
            setStack([...stack, 'lastScreen'])
            setProgress(1)
        }
    }

    const resetData = () => {
        // setEstateListItem('');
        // setApartmentListItem('');
        setDescription('');
        setImage(null);
        // setPhone('');
        setAddress('');
        // setSelectedCategory(null);
        setStack([stack[0]]);
        setProgress(0.33);
        conditionHandler();
    }

    console.log('estatelist: ', estateListItem)

    const firstScreen = () => {
        return (
            <View style={styles.scrollContainer}>
                <KeyboardAvoidingView behavior={isPlatformAndroid() ? 'height' : 'padding'} style={{ flex: 1 }} keyboardVerticalOffset={isPlatformAndroid() ? 150 : 30}>
                    <ScrollView contentContainerStyle={{ paddingBottom: deviceHeight() * 0.14 }} >
                        <Text style={styles.headerTxt}>إضافة تفاصيل طلب الصيانة</Text>
                        <View style={styles.pickerWraper}>
                            <RNPickerSelect
                                placeholder={{
                                    "label": initialEstate ? initialEstate.label : "العقار",
                                    "value": initialEstate ? initialEstate.value : { text: null, key: null }
                                }}
                                onValueChange={(value, index) => {
                                    setEstateListItem(value);
                                    if (isPlatformAndroid()) {
                                        // alert('yes')
                                        // unitsHandler();
                                    }
                                    console.log('value: ', value, index)
                                }}
                                value={estateListItem}
                                items={estates}
                                doneText='تم'
                                onDonePress={() => { unitsHandler(); console.log('called: ', estateListItem) }}
                                useNativeAndroidPickerStyle={false}
                                style={pickerSelect}
                                Icon={() => {
                                    return (
                                        <View style={styles.arrow}>
                                            <ArrowDown />
                                        </View>
                                    );
                                }}
                            />
                            {estateErr != '' && <Text style={styles.errorText}>{estateErr}</Text>}
                        </View>
                        <View style={styles.pickerWraper}>
                            <RNPickerSelect
                                placeholder={{
                                    "label": initialApartment ? initialApartment.label : "الوحدة",
                                    "value": initialApartment ? initialApartment.value : { text: null, key: null }
                                }}
                                onValueChange={value => {
                                    setApartmentListItem(value);
                                    console.log('value: ', value)
                                }}
                                value={apartmentListItem}
                                items={units}
                                doneText='تم'
                                useNativeAndroidPickerStyle={false}
                                style={pickerSelect}
                                Icon={() => {
                                    return (
                                        <View style={styles.arrow}>
                                            <ArrowDown />
                                        </View>
                                    );
                                }}
                            />
                            {apartmentErr != '' && <Text style={styles.errorText}>{apartmentErr}</Text>}
                        </View>
                        <View style={styles.pickerWraper}>
                            <RNPickerSelect
                                placeholder={{
                                    "label": "التصنيف",
                                    "value": { text: null, key: null }
                                }}
                                onValueChange={value => {
                                    setSelectedCategory(value);
                                    console.log('value: ', value)
                                }}
                                value={selectedCategory}
                                items={categoryList || { 'label': "text", 'key': '1', 'label': 'text' }}
                                doneText='تم'
                                useNativeAndroidPickerStyle={false}
                                style={pickerSelect}
                                Icon={() => {
                                    return (
                                        <View style={styles.arrow}>
                                            <ArrowDown />
                                        </View>
                                    );
                                }}
                            />
                            {apartmentErr != '' && <Text style={styles.errorText}>{apartmentErr}</Text>}
                        </View>
                        <View style={styles.pickerWraper}>
                            <RNPickerSelect
                                placeholder={{
                                    "label": "مزود الخدمة",
                                    "value": { text: null, key: null }
                                }}
                                onValueChange={value => {
                                    setSelectedProvider(value);
                                    console.log('value: ', value)
                                }}
                                value={selectedProvider}
                                items={providers}
                                doneText='تم'
                                useNativeAndroidPickerStyle={false}
                                style={pickerSelect}
                                Icon={() => {
                                    return (
                                        <View style={styles.arrow}>
                                            <ArrowDown />
                                        </View>
                                    );
                                }}
                            />
                        </View>
                        <TextInput
                            style={styles.descInput}
                            placeholder='البيان'
                            onChangeText={text => {
                                setDescription(text);
                            }}
                            value={description}
                            multiline
                            blurOnSubmit={true}
                        />
                        {descriptionErr != '' && <Text style={[styles.errorText, styles.errTextAlignment]}>{descriptionErr}</Text>}
                        <TouchableOpacity style={styles.pickImageWraper} onPress={imagePicker}>
                            <ImageBackground source={addPhoto} style={styles.imageWraper} imageStyle={{ marginTop: 60 }} resizeMode='contain' >
                                <Image source={image} style={styles.selectedImage} resizeMode='cover' />
                            </ImageBackground>
                        </TouchableOpacity>
                        {imageErr != '' && <Text style={[styles.errorText, styles.errTextAlignment]}>{imageErr}</Text>}
                        <TextInput
                            style={styles.input}
                            placeholder='رقم الجوال(0599999999)'
                            onChangeText={text => {
                                setPhone(text);
                            }}
                            // value={phone}
                            value={authData && authData.email}
                            editable={false}
                        />
                        {phoneErr != '' && <Text style={[styles.errorText, styles.errTextAlignment]}>{phoneErr}</Text>}
                        <TextInput
                            style={styles.input}
                            placeholder='رقم الجوال آخر (0599999999)'
                            onChangeText={text => {
                                setSecondaryPhone(text);
                            }}
                            value={secondaryPhone}
                        />
                        <Button
                            title='التالي'
                            style={styles.button}
                            onPress={() => next()}
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }

    const secondScreen = () => {
        return (
            <View style={styles.scrollContainer}>
                <Text style={styles.headerTxt}>إضافة العنوان</Text>
                <TouchableOpacity style={styles.findLocationWraper} onPress={() => {
                    props.navigation.navigate('Map', {
                        comingFrom: 'maintenance'
                    })
                }}>
                    <Image source={locationMarker} style={{ width: 16, height: 23 }} resizeMode='contain' />
                    <Text style={styles.rangeDescTxt}>تحديد الموقع على الخريطة   </Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.addressInput}
                    placeholder='عنوان العقار : الروابي / الرياض / السعودية'
                    onChangeText={text => {
                        setAddress(text);
                    }}
                    value={address}
                    multiline
                    blurOnSubmit={true}
                    editable={false}
                />
                {addressErr != '' && <Text style={[styles.errorText, styles.errTextAlignment]}>{addressErr}</Text>}
                <Button
                    title='التالي'
                    style={styles.button}
                    onPress={() => toLastScreen()}
                />
            </View>
        )
    }

    const lastScreen = () => {
        return (
            <View style={styles.scrollContainer}>
                <ScrollView contentContainerStyle={{ paddingBottom: deviceHeight() * 0.145 }}>
                    <Text style={styles.headerTxt}>إضافة تفاصيل طلب الصيانة</Text>
                    {/* <View style={styles.displayTxtWraper}>
                    <Text style={styles.displayTxt}>تصنيف العقار</Text>
                </View> */}
                    <View style={styles.displayTxtWraper}>
                        <Text style={styles.displayTxt}>{estateListItem.text}</Text>
                    </View>
                    <View style={styles.displayTxtWraper}>
                        <Text style={styles.displayTxt}>{apartmentListItem.text}</Text>
                    </View>
                    {selectedCategory && <View style={styles.displayTxtWraper}>
                        <Text style={styles.displayTxt}>{selectedCategory.text}</Text>
                    </View>}
                    <View style={styles.displayTxtWraper}>
                        <Text style={styles.displayTxt}>{description}</Text>
                    </View>
                    <View style={styles.displayTxtWraper}>
                        <Text style={styles.displayTxt}>{address}</Text>
                    </View>
                    <View style={styles.displayTxtWraper}>
                        <Text style={styles.displayTxt}>{phone}</Text>
                    </View>
                    {secondaryPhone != '' && <View style={styles.displayTxtWraper}>
                        <Text style={styles.displayTxt}>{secondaryPhone}</Text>
                    </View>}
                    {image && <Image source={image} style={styles.pickImageWraper} resizeMode='cover' />}
                    <View style={styles.buttonsWraper}>
                        <Button
                            title='إلغاء'
                            style={[styles.confirmationBtn, { backgroundColor: primaryColors.teal }]}
                            titleStyle={{ top: 5 }}
                            onPress={() => {
                                resetData()
                            }}
                            disabled={disabled}
                        />
                        <Button
                            title='تأكيد الطلب'
                            style={styles.confirmationBtn}
                            titleStyle={{ top: 5 }}
                            onPress={() => {
                                // setModalVisible(true);
                                sendImageHandler();
                                setDisabled(true);
                            }}
                            disabled={disabled}
                        />
                    </View>
                </ScrollView>
                <Modal isVisible={modalVisible}>
                    <View style={styles.modalView}>
                        <Image source={like} style={styles.icon} resizeMode='contain' />
                        <Text style={[styles.modalText, { marginTop: 5 }]}>تمت إضافة طلبك بنجاح انتظر مكالمة هاتفية من قسم الصيانة </Text>
                        <Button
                            title='إضافة طلب جديد'
                            style={{ width: '70%', marginTop: 12, paddingTop: isPlatformAndroid() ? 5 : 7, justifyContent: 'flex-start' }}
                            titleStyle={{ top: 5 }}
                            onPress={() => {
                                setModalVisible(false);
                                resetData()
                            }}
                        />
                    </View>
                </Modal>
            </View>
        )
    }

    const back = () => {
        if (stack[stack.length - 1] == 'firstScreen') {
            props.navigation.goBack();
        } else {
            let screenStack = stack;
            setFlag(screenStack.pop());
            setStack(screenStack);
            if (stack.length == 1) {
                setProgress(0.33)
            } else if (stack.length == 2) {
                setProgress(0.66)
            } else if (stack.length == 3) {
                setProgress(1)
            }
        }
    }

    function getAddress() {
        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + selectedPlace.latitude + ',' + selectedPlace.longitude + '&key=' + 'AIzaSyB46Ze_dIjwmwIsBTQLMndK12rjV1zpq2k')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
                // var stateName = responseJson.results[0].address_components.filter(x => x.types.filter(t => t == 'administrative_area_level_1').length > 0)[0].short_name;
                // var stateName2 = responseJson.results[0].address_components.filter(x => x.types.filter(t => t == 'administrative_area_level_1').length > 0)[0].short_name;

                var stateName = responseJson.results[0].address_components.filter(x => x.types.filter(t => t == 'country').length > 0)[0].short_name;
                var formattedAddress = responseJson.results[0].formatted_address
                setAddress(formattedAddress)
                // for City Name I used the administrative_area_level_2
                console.log('stateName: ', stateName)
                console.log('stateName2: ', formattedAddress)
            })
            .catch(err => {
                console.log('Ooops! ', err)
            })
    }

    return (
        <View style={styles.container}>
            <Header
                navigation={props.navigation}
                title="طلب صيانة"
                back={stack.length > 1 && back}
            />
            <View style={{ marginTop: 170, marginBottom: 20, alignItems: 'center' }}>
                <Progress.Bar progress={progress} width={350} color='#52c8a9' />
            </View>

            {
                stack[stack.length - 1] == 'firstScreen' ?
                    firstScreen()
                    : stack[stack.length - 1] == 'secondScreen' ?
                        secondScreen()
                        : stack[stack.length - 1] == 'lastScreen' &&
                        lastScreen()
            }
            {
                loadings.includes('maintenanceRequest') || loadings.includes('sendImage') &&
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large" color={primaryColors.persianGreen} />
                </View>
            }
        </View>
    );
}
