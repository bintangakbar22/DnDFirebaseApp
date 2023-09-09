/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '@constants/colors';
import {HomeScreen, TopUpScreen, TransactionScreen} from '@components/screens';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const BottomTabNavigatior = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({color, size}) => {
          if (route.name === 'HomeScreen') {
            return <Icon name={'home'} size={size} color={color} />;
          }
          if (route.name === 'InputScreen') {
            return <Icon name={'cash-100'} size={size} color={color} />;
          }
          if (route.name === 'DnDcreen') {
            return <Icon name={'card-outline'} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.disabled.text,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: Colors.white,
          height: 60,
          borderTopWidth: 0.5,
          borderColor: Colors.disabled.text,
          paddingHorizontal: 0,
          bottom: 0,
        },
        tabBarItemStyle: {
          height: 40,
          marginHorizontal: 10,
          alignSelf: 'center',
        },
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarLabel: 'Transaction'}}
      />
      <Tab.Screen
        name="InputScreen"
        component={TopUpScreen}
        options={{tabBarLabel: 'Input'}}
      />
      <Tab.Screen
        name="TransactionScreen"
        component={TransactionScreen}
        options={{tabBarLabel: 'Drag&Drop'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigatior;
