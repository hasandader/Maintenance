import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ActivityIndicator, ScrollView } from 'react-native';
import Button from '../../components/Button/index';
import ImagePicker from 'react-native-image-picker';
import Header from './components/Header';
import styles from './Style';
import { profilePhoto, locationMarker, Avatar } from '../../images/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { deviceHeight } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { fonts } from '../../theme/fonts';
import { getProfile } from '../../redux/actions/auth';
import { useSelector, useDispatch } from 'react-redux';

export default function Profile(props) {
    const maintenanceToken = useSelector(state => state.maintenanceAuth.maintenanceToken);
    const mProfile = useSelector(state => state.maintenanceAuth.profile);
    const loadings = useSelector(state => state.ui.loadings);
    console.log(deviceHeight())
    const [edit, setEdit] = useState(false)
    const [email, setEmail] = useState('example@gmail.com');
    // const [location, setLocation] = useState(userData.address);
    const [name, setName] = useState('عبد العزيز  غانم');
    const [image, setImage] = useState('');
    const [base64Image, setBase64Image] = useState('');
    const [profile, setProfile] = useState([]);

    const dispatch = useDispatch();

    const profileHandler = useCallback(() => {
        dispatch(getProfile(maintenanceToken));
    }, [dispatch]);

    useEffect(() => {
        profileHandler();
    }, []);

    useEffect(() => {
        if (mProfile) {
            setProfile(mProfile);
        };
    }, [mProfile]);

    function imagePicker() {
        ImagePicker.showImagePicker({
            title: "إختر صورة أو قم بالتقاط صورة جديدة",
            cancelButtonTitle: "إلغاء",
            takePhotoButtonTitle: "إلتقاط صورة...",
            chooseFromLibraryButtonTitle: "إختيار من الإستيديو...",
            mediaType: 'photo',
            maxWidth: 1920
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
                setBase64Image(`data:image/jpeg;base64,${response.data}`);
                setImage(source);
                console.log(response.fileSize, "Base64: ", 'data:image/jpeg;base64,' + response.data);

            }
        });
    }


    const content = (
        <View>
            <Text style={styles.text}>الايميل  </Text>
            <TextInput
                style={styles.engText}
                value={profile && profile.email}
                onChangeText={(value) => setEmail(value)}
                editable={edit}
            />
            <Text style={styles.text}>اللغة</Text>
            <Text style={[styles.text, { backgroundColor: primaryColors.white }]}>العربية</Text>
            <Text style={styles.text}>رقم الجوال </Text>
            <Text style={[styles.text, { paddingTop: 10, backgroundColor: primaryColors.white, fontFamily: fonts.medium }]}>{profile && profile.mobile}</Text>
            {/* <Text style={styles.text}>الموقع </Text>
            <TouchableOpacity style={styles.locationWraper} onPress={() => props.navigation.navigate('MapStack', {
                screen: 'MapSearch',
                params: { comingFrom: 'profile' }
            })} disabled={!edit}>
                <Icon name="keyboard-arrow-left" size={30} color="#999999" />
                <Text style={[styles.text, { width: '80%', paddingRight: 0 }]}>تحديد موقعي على الخريطة</Text>
                <Image source={locationMarker} style={{ height: 23, tintColor: primaryColors.yellow, width: '5%' }} resizeMode='contain' />
            </TouchableOpacity> */}
            {/* {
                edit ?
                    <View style={styles.subBtnWraper}>
                        <Button
                            onPress={() => { setEdit(!edit); }}
                            title='إلغاء'
                            style={{ width: '45%' }}
                        />
                        <Button
                            onPress={() => { setEdit(!edit); }}
                            title='تم'
                            style={{ width: '45%' }}
                        />
                    </View>
                    :
                    <Button
                        onPress={() => { setEdit(!edit); }}
                        title='تغيير الاعدادات'
                        style={styles.button}
                    />
            } */}
        </View>
    );

    return (
        <View style={styles.container}>
            <Header
                navigation={props.navigation}
                title="الملف الشخصي "
            // back={props.navigation.goBack()}
            />
            {
                loadings.includes('getProfile') ?
                    <View style={styles.activityIndicator2}>
                        <ActivityIndicator size="large" color={primaryColors.persianGreen} />
                    </View>
                    :
                    Object.keys(profile).length > 0 &&
                    <>
                        <View>
                            <View style={styles.profileTopWraper}>
                                {/* <TouchableOpacity style={styles.textButton} >
                                    <Text style={styles.changePassTxt}> تغيير كلمة المرور</Text>
                                </TouchableOpacity> */}
                                <TextInput
                                    style={styles.nameText}
                                    value={profile.name}
                                    onChangeText={(value) => setName(value)}
                                    editable={edit}
                                />
                                {
                                    profile.image ?
                                        <Image source={{ uri: profile.image }} style={styles.profileImage} resizeMode='cover' />
                                        :
                                        <Avatar />
                                }
                            </View>
                            {
                                edit ?
                                    <TouchableOpacity style={styles.cameraWraper} onPress={() => imagePicker()}>
                                        <Icon name="add-a-photo" size={17} color={primaryColors.biscay} />
                                    </TouchableOpacity>
                                    : null
                            }
                        </View>
                        {
                            deviceHeight() <= 700 ?
                                <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                                    {content}
                                </ScrollView>
                                :
                                content
                        }
                    </>
            }
        </View>
    );
}
