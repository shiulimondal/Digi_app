// BottomNavigation_User.js
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from '../Constants/Colors';
import { Image } from 'react-native';
import { moderateScale } from "../Constants/PixelRatio";
import Home from '../Screens/Home/Index';
import Message from '../Screens/Message';
import MyAccount from '../Screens/My Account';
import { FONTS } from '../Constants/Fonts';
import Support from '../Screens/Help/Support';

const Bottom = createBottomTabNavigator();
const BottomNavigation_User = () => {
    return (
        <Bottom.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.buttonColor,
                tabBarInactiveTintColor: '#777',
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontFamily:FONTS.regular,
                    marginBottom: moderateScale(10),
                },
                tabBarStyle: {
                    backgroundColor: Colors.backgroundColor,
                    height: moderateScale(55),
                    paddingBottom: 0,
                },
            }}
        >
            <Bottom.Screen
                name="Home"
                component={Home}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={require('../assets/images/home.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(focused ? 23 : 20),
                                    width: moderateScale(focused ? 23 : 20),
                                    tintColor: focused ? Colors.buttonColor : undefined,
                                }}
                            />
                        );
                    },
                }}
            />
            <Bottom.Screen
                name="Message"
                component={Message}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={require('../assets/images/message.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(focused ? 23 : 20),
                                    width: moderateScale(focused ? 23 : 20),
                                    tintColor: focused ? Colors.buttonColor : undefined,
                                }}
                            />
                        );
                    },
                }}
            />
            <Bottom.Screen
                name="MyAccount"
                component={MyAccount}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'My Account',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={require('../assets/images/account.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(focused ? 23 : 20),
                                    width: moderateScale(focused ? 23 : 20),
                                    tintColor: focused ? Colors.buttonColor : undefined,
                                }}
                            />
                        );
                    },
                }}
            />
            <Bottom.Screen
                name="Support"
                component={Support}
                options={{
                    unmountOnBlur: true,
                    tabBarLabel: 'Help',
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            <Image
                                source={require('../assets/images/help.png')}
                                resizeMode='contain'
                                style={{
                                    height: moderateScale(focused ? 23 : 20),
                                    width: moderateScale(focused ? 23 : 20),
                                    tintColor: focused ? Colors.buttonColor : undefined,
                                }}
                            />
                        );
                    },
                }}
            />
        </Bottom.Navigator>
    );
};

export default BottomNavigation_User ;
