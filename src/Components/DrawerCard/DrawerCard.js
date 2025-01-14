import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-basic-elements';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from '../../Constants/PixelRatio';
import { Colors } from '../../Constants/Colors';
import { FONTS } from '../../Constants/Fonts';
import { DrawerActions } from '@react-navigation/native';

const DrawerCard = ({ navigation }) => {

    const drawerScreen = [
        {
            img: require('../../assets/images/dhome.png'),
            title: 'Home',
            handleClick: 'DrawerHome'
        },
        {
            img: require('../../assets/images/duser.png'),
            title: 'My Profile',
            handleClick: 'MyProfile'
        },
        {
            img: require('../../assets/images/dbank.png'),
            title: 'My Bank Account',
            handleClick: 'MyBankAccount'
        },
        {
            img: require('../../assets/images/duser.png'),
            title: 'My Member',
            handleClick: 'MyMember'
        },
        {
            img: require('../../assets/images/dwallate.png'),
            title: 'My Income',
            handleClick: 'MyIncome'
        },
        {
            img: require('../../assets/images/dwork.png'),
            title: 'How It Works',
            handleClick: 'DrawerWorks'
        },
        {
            img: require('../../assets/images/dsupport.png'),
            title: 'Support',
            handleClick: 'Support'
        },
        {
            img: require('../../assets/images/dgroup.png'),
            title: 'About Us',
            handleClick: 'AboutUs'
        },
        {
            img: require('../../assets/images/dsettings.png'),
            title: 'Settings',
            handleClick: 'Settings'
        },
    ];

    const handleDrawerScreen = (item) => {
        if (item) {
            navigation.navigate(item.handleClick);
            navigation.dispatch(DrawerActions.closeDrawer())
        }
    }

    return (
        <View style={styles.container_sty}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable style={{ ...styles.main_view }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.user_circle}>
                            <Text style={{ fontSize: 20, color: '#fff' }}>U</Text>
                        </View>
                        <Text style={styles.user_name}>Sumqan Jana</Text>
                    </View>
                    <Icon name='right' type='AntDesign' size={22} />
                </Pressable>

                <View style={{ height: moderateScale(20) }} />
                {drawerScreen.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} shadow={false}
                            style={{ ...styles.card_sty }}
                            onPress={() => { handleDrawerScreen(item) }}>
                            <Image source={item.img} style={{ ...styles.notification_img, tintColor: '#fff' }} />
                            <Text style={{ ...styles.notification_txt, color: '#fff' }}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                })}

                <TouchableOpacity
                    onPress={() => logoutUser()}
                    style={{ ...styles.logout_view }}>
                    <Image source={require('../../assets/images/logout.png')} style={{ ...styles.notification_img }} />
                    <Text style={styles.logout_txt}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default DrawerCard;

const styles = StyleSheet.create({
    container_sty: {
        flex: 1,
    },
    user_name: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(15),
        marginLeft: moderateScale(10)
    },
    card_sty: {
        borderRadius: 0,
        alignItems: 'center',
        flexDirection: 'row',
        borderLeftWidth: 4,
        padding: moderateScale(10),
    },
    notification_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(12),
    },
    main_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(25),
        marginTop: moderateScale(25),
        width: '90%',
        alignSelf: 'center',
        backgroundColor: Colors.secondaryFont,
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(10),
        padding: moderateScale(6),
        justifyContent: 'space-between'
    },
    user_circle: {
        borderRadius: moderateScale(30),
        backgroundColor: Colors.buttonColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(50),
        width: moderateScale(50)
    },
    logout_view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: moderateScale(15),
        marginTop: moderateScale(20),
        marginBottom: moderateScale(20)
    },
    logout_txt: {
        fontFamily: FONTS.medium,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(12),
        color: Colors.secondaryFont
    },
    notification_img: {
        height: moderateScale(22),
        width: moderateScale(22),
        resizeMode: 'contain',
        tintColor: Colors.secondaryFont
    },
});
