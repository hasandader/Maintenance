import React, { useState, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import Button from '../../components/Button/index';
import styles from './Style';
import { tailLogo, Lock, Email, loginTop } from '../../images/index';
import { useSelector, useDispatch } from 'react-redux';
import { maintenanceLogin } from '../../redux/actions/auth';
import { primaryColors } from '../../theme/colors';
import { deviceHeight, deviceWidth } from '../../lib/utility';

export default function LogInScreen(props) {
    const isLoading = useSelector(state => state.ui.isLoading);
    const errorMessage = useSelector(state => state.maintenanceAuth.errorMessage);

    const [phoneNum, setPhoneNum] = useState('');
    const [password, setPassword] = useState('');

    const [passwordErr, setPasswordErr] = useState('');

    const dispatch = useDispatch();

    const loginHandler = useCallback(() => {
        const loginData = {
            mobile: phoneNum,
            password: password,
        }
        dispatch(maintenanceLogin(loginData));

    }, [dispatch, phoneNum, password]);

    useEffect(() => {

        if (errorMessage) {
            setPasswordErr(errorMessage);
        }

    }, [passwordErr, errorMessage]);

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior='position'>
                <StatusBar barStyle="light-content" />
                <Image source={loginTop} style={{ height: deviceHeight() * 0.42, width: deviceWidth() }} resizeMode='cover' />
                <View>
                    <View style={styles.inputWraper}>
                        <Email />
                        <TextInput
                            placeholder="البريد الإلكتروني "
                            value={phoneNum}
                            onChangeText={(value) => setPhoneNum(value)}
                            placeholderTextColor={primaryColors.veryLightGrey}
                            style={styles.inputText}
                            keyboardType='phone-pad'
                        />
                    </View>
                </View>
                <View>
                    <View style={[styles.inputWraper, { marginTop: 20, }]}>
                        <Lock />
                        <TextInput
                            ref={(ref) => passwordInput = ref}
                            placeholder="كلمة المرور "
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            placeholderTextColor={primaryColors.veryLightGrey}
                            style={styles.inputText}
                            secureTextEntry
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    {
                        !passwordErr ? null :
                            <Text style={styles.errorTxt}>{passwordErr}</Text>
                    }
                </View>
                <Button
                    onPress={() => {
                        loginHandler();
                        passwordInput.focus();
                    }}
                    title="تسجيل الدخول"
                    titleStyle={styles.buttonText}
                    style={styles.buttonWraper}
                    disabled={isLoading}
                />
                {
                    isLoading &&
                    <View style={styles.activityIndicator}>
                        <ActivityIndicator size="large" color={primaryColors.persianGreen} />
                    </View>
                }
            </KeyboardAvoidingView>
            <View style={{ flex: 1 }} />
            <View style={styles.screenBottom}>
                <Text style={styles.tailText}>Powerd By Asaas</Text>
                <Image source={tailLogo} style={styles.tailLogo} resizeMode='contain' />
            </View>
        </View>
    );
}
