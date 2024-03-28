import { Dimensions, Platform, PixelRatio } from 'react-native';

const getWindow = () => Dimensions.get('window');
const getPlatformOs = () => Platform.OS;

export const deviceHeight = () => {
    return getWindow().height;
};

export const deviceWidth = () => {
    return getWindow().width;
};

export const isPlatformIos = () => {
    return getPlatformOs() === 'ios';
};

export const isPlatformAndroid = () => {
    return getPlatformOs() === 'android';
};

export const isIPhoneX = () => {
    return getWindow().height == 812 || getWindow().width == 812;
};
