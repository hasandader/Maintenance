import React, { useState, useCallback, useEffect } from 'react';
import { View, ActivityIndicator, ScrollView, Text } from 'react-native';
import Header from './components/index';
import DetailsCard from "./components/detailsCard";
import styles from './Style';
import { SliderBox } from "react-native-image-slider-box";
import { deviceWidth, deviceHeight } from '../../lib/utility';
import { primaryColors } from '../../theme/colors';
import { useSelector, useDispatch } from 'react-redux';
import { getTicketDetails } from '../../redux/actions/maintenance';
import Modal from "react-native-modal";
import RNPickerSelect from 'react-native-picker-select';
import { pickerSelect } from './Style';
import { ArrowDown } from '../../images/index';
import Button from '../../components/Button/index';

const providers = require('../../data/dummyData/providers.json');
export default function RequestDetails(props) {
    const ticketID = props.navigation.getParam('ticketID');

    const maintenanceToken = useSelector(state => state.maintenanceAuth.maintenanceToken);
    const ticketDetails = useSelector(state => state.maintenance.ticketDetails);
    const loadings = useSelector(state => state.ui.loadings);

    const [details, setDetails] = useState({});

    const [images, setImages] = useState(null);
    const [requestInfo, setRequestInfo] = useState({});
    const [tenantInfo, setTenantInfo] = useState({});
    const [realEstateInfo, setRealEstateInfo] = useState({});

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState(null);

    const dispatch = useDispatch();

    const ticketDetailsHandler = useCallback(() => {
        dispatch(getTicketDetails(maintenanceToken, ticketID));
    }, [dispatch]);

    useEffect(() => {
        ticketDetailsHandler();
    }, []);

    const [providerData, setProviderData] = useState({
        title: 'بيانات المزود',
        data: [
            { key: '0', attribute: 'مزود الخدمة', value: 'فواز القحطاني' },
            { key: '1', attribute: 'حالة الطلب', value: 'مرفض' },
            { key: '2', attribute: 'ملاحظة', value: 'تم رفض الطلب   لعدم  إمكانية الوصول للمستخدم' },
            { key: '3', attribute: 'رقم الجوال', value: '0599059059' },
            { key: '4', attribute: 'العنوان', value: 'الروابي / الرياض / السعودية' },
        ]
    })

    useEffect(() => {
        const requestData = {
            title: 'بيانات الطلب',
            data: [
                { key: '0', attribute: 'التصنيف', value: 'تنظيف' },
                { key: '1', attribute: 'الحالة', value: 'قيد الإنتظار' },
                { key: '2', attribute: 'ملاحظات', value: 'ملاحظة 4' }
            ]
        }

        // const providerData = {
        //     title: 'بيانات المزود',
        //     data: [
        //         { key: '0', attribute: 'إسم المستأجر', value: 'فواز القحطاني' },
        //         { key: '1', attribute: 'رقم الجوال', value: '0599059059' },
        //     ]
        // }

        const renterData = {
            title: 'بيانات المستأجر',
            data: [
                { key: '0', attribute: 'إسم المستأجر', value: 'فواز القحطاني' },
                { key: '1', attribute: 'رقم الجوال', value: '0599059059' },
            ]
        }

        const estateData = {
            title: 'بيانات العقار',
            data: [
                { key: '0', attribute: 'العقار', value: 'الأول' },
                { key: '1', attribute: 'الوحدة', value: 'السابعة' },
                { key: '2', attribute: 'العنوان', value: 'الروابي / الرياض / السعودية' },
            ]
        }

        if (ticketDetails) {
            setDetails(ticketDetails);
            if (ticketDetails.image) {
                setImages([ticketDetails.image]);
            } else {
                setImages([''])
            }

            requestData.data[0].value = ticketDetails.categories.name_ar;
            requestData.data[1].value = ticketDetails.status_name;
            requestData.data[2].value = ticketDetails.notes;

            renterData.data[0].value = ticketDetails.renters.name;
            renterData.data[1].value = ticketDetails.renters.mobile;

            estateData.data[0].value = ticketDetails.property;
            estateData.data[1].value = ticketDetails.unit;
            estateData.data[2].value = ticketDetails.property_location;

            setRequestInfo(requestData);
            setTenantInfo(renterData);
            setRealEstateInfo(estateData);
        }
    }, [ticketDetails]);

    return (
        <View style={[styles.container, { backgroundColor: primaryColors.lightWhiteSmoke }]}>
            <Header
                navigation={props.navigation}
                title="تفاصيل الطلب"
                back
                diffColor
            />
            {
                loadings.includes('getTicketDetails') ?
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={primaryColors.persianGreen} />
                    </View>
                    :
                    Object.keys(details).length > 0 &&
                    <ScrollView contentContainerStyle={{ paddingBottom: deviceHeight() * 0.14, paddingTop: 10 }}>
                        <View style={{ alignItems: 'center', borderWidth: 0, height: 175, marginBottom: 10 }} >
                            <SliderBox
                                images={images}
                                sliderBoxHeight={175}
                                parentWidth={deviceWidth() * 0.85}
                                ImageComponentStyle={{ borderRadius: 6, backgroundColor: primaryColors.grey }}
                                disableOnPress
                                dotColor={primaryColors.yellow}
                                inactiveDotColor="#FFE498"
                                imageLoadingColor="#057a80"
                            />
                        </View>
                        <DetailsCard information={requestInfo} />
                        <DetailsCard information={providerData} edits onEdit={() => setModalVisible(true)} />
                        <DetailsCard information={tenantInfo} />
                        <DetailsCard information={realEstateInfo} />
                    </ScrollView>
            }
            <Modal isVisible={modalVisible}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>اختر مزود الخدمة</Text>
                    <View style={styles.pickerWraper}>
                        <RNPickerSelect
                            placeholder={{
                                "label": "مزود الخدمة",
                                "value": { text: null, key: null }
                            }}
                            onValueChange={value => {
                                setSelectedProvider(value);
                                providerData.data[0].value = value
                                setProviderData(providerData);
                                console.log('value: ', value)
                            }}
                            onDonePress={() => {
                                setModalVisible(false);
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
                    <Button
                        onPress={() => {
                            setModalVisible(false);
                        }}
                        title="الغاء"
                        titleStyle={styles.buttonText}
                        style={styles.buttonWraper}
                    />
                </View>
            </Modal>
        </View>
    );
}
