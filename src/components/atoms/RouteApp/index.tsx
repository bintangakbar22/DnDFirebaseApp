/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {ToastContainer} from '../ToastContainer';
import Colors from '@constants/colors';
import {LoginScreen, RegisterScreen, SplashScreen} from '@components/screens';
import BottomTabNavigatior from './BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keys} from '@constants/keys';
const Stack = createStackNavigator<ParamList>();
type NavigatorProps = {
  showAPILog?: boolean;
};

export const Navigator: React.FC<NavigatorProps> = () => {
  const navigation: any = useNavigation();

  //handle No User
  const screenListeners = () => ({
    state: async () => {
      const dataUser = await AsyncStorage.getItem(Keys.dataUser);
      const currentRouteName = navigation?.getCurrentRoute()?.name;
      const listScreenDontNeetAuth = [
        'SplashScreen',
        'LoginScreen',
        'RegisterScreen',
      ];
      const isNotAuthScreen =
        listScreenDontNeetAuth?.includes(currentRouteName);
      if (!isNotAuthScreen && !dataUser) {
        navigation.navigate('SplashScreen', {});
        await AsyncStorage.clear();
      }
    },
  });

  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenListeners={screenListeners}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'SplashScreen'} component={SplashScreen} />
      <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
      <Stack.Screen name={'RegisterScreen'} component={RegisterScreen} />
      <Stack.Screen
        name={'BottomTabNavigator'}
        component={BottomTabNavigatior}
      />
    </Stack.Navigator>
  );
};

export const RouteApp = () => {
  const toastConfig = {
    success: (props: any) => <ToastContainer {...props} />,
    error: (props: any) => <ToastContainer {...props} type="error" />,
    warning: (props: any) => <ToastContainer {...props} type="warning" />,
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={Colors.white}
      />
      <GestureHandlerRootView style={styles.gestureHandlerStyle}>
        <NavigationContainer>
          <Navigator />
          <Toast
            config={toastConfig}
            position={'bottom'}
            visibilityTime={3000}
          />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
  gestureHandlerStyle: {
    flex: 1,
  },
});
