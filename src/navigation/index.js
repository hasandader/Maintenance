import React, { Component } from 'react';
import { Image, I18nManager, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import {
    Categories, ElectricMaintenance, RequestDetails,
    Request, Menu, Profile, Map, Login, IntroSlides,
    Notifications
} from '../features/index';
import {
    ActiveAddition, InactiveAddition,
    InactiveMenu, ActiveMenu, InactiveHome,
    ActiveHome, ActiveProfile, InactiveProfile,
    Bell, ActiveBell
} from '../images/index';
import { primaryColors } from '../theme/colors';
import { fonts } from '../theme/fonts';
import TabButton from './TabButton';

const CategoryStack = createStackNavigator(
    {
        Categories: {
            screen: Categories,
        },
        ElectricMaintenance: {
            screen: ElectricMaintenance
        },
        RequestDetails: {
            screen: RequestDetails
        },
    },
    {
        headerMode: 'none',
    }
);
CategoryStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        focused ?
            <TabButton
                image={
                    <ActiveHome />
                } />
            :
            <InactiveHome />
    ),
    tabBarLabel: 'التصنيفات',
};

const RequestStack = createStackNavigator(
    {
        Request: {
            screen: Request,
        },
        Map: {
            screen: Map
        }
    },
    {
        headerMode: 'none',
    }
);
RequestStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        focused ?
            <TabButton
                image={
                    <ActiveAddition />
                } />
            :
            <InactiveAddition />
    ),
    tabBarLabel: 'إضافة'
};

const NotificationsStack = createStackNavigator(
    {
        Notifications: {
            screen: Notifications,
        },
    },
    {
        headerMode: 'none',
    }
);
NotificationsStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        focused ?
            <TabButton
                image={
                    <ActiveBell />
                } />
            :
            <Bell />
    ),
    tabBarLabel: 'الإشعارات'
};

const MenuStack = createStackNavigator(
    {
        Menu: {
            screen: Menu,
        },
        Profile: {
            screen: Profile,
        }
    },
    {
        headerMode: 'none',
    }
);
MenuStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        focused ?
            <TabButton
                image={
                    <ActiveMenu />
                } />
            :
            <InactiveMenu />
    ),
    tabBarLabel: 'القائمة',
};

export const AppTab = createBottomTabNavigator(
    {
        Category: { screen: CategoryStack },
        Request: { screen: RequestStack },
        Notifications: { screen: NotificationsStack },
        Menu: { screen: MenuStack },
    },
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 15,
                fontFamily: fonts.regular,
                color: primaryColors.dimGray,
            },

            style: {
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
                position: 'absolute',
                borderTopWidth: 0,
                height: 80,
                flexDirection: I18nManager.isRTL ? 'row' : 'row-reverse',

                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: -3,
                },
                shadowOpacity: 0.05,
                shadowRadius: 5,

                elevation: 15,

            },

            tabStyle: {
                marginTop: 10,
            }
        },
    },
);

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login
        },
    },
    {
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {},
            headerTitleStyle: {},
        }),
        initialRouteName: 'Login',
    }
);

const IntroStack = createStackNavigator(
    {
        IntroSlides: {
            screen: IntroSlides
        },
    },
    {
        headerMode: 'none',
        navigationOptions: ({ navigation }) => ({
            headerStyle: {},
            headerTitleStyle: {},
        }),
        initialRouteName: 'IntroSlides',
    }
);

export const IntroStacks = createAppContainer(IntroStack);
export const AuthStacks = createAppContainer(AuthStack);
export const AppStacks = createAppContainer(AppTab);