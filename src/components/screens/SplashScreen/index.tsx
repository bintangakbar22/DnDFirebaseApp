/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Fonts from '@constants/fonts';
import Colors from '@constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainView} from '@components/atoms';
import FastImage from 'react-native-fast-image';
import {Logo} from '@assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Keys} from '@constants/keys';

const SplashScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'SplashScreen'>>();

  const [alreadyLogged, setAlreadyLogged] = useState<boolean>(false);

  const _handlerGetLogged = async () => {
    const token = await AsyncStorage.getItem(Keys.dataUser);
    if (token && token !== '') {
      setAlreadyLogged(true);
    }
  };

  useEffect(() => {
    _handlerGetLogged();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (alreadyLogged) {
        navigation.replace('BottomTabNavigator');
        return;
      }
      navigation.replace('LoginScreen');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [alreadyLogged]);

  return (
    <MainView style={styles.container}>
      <Text style={styles.title}>Dnd App</Text>
      <Text style={styles.titleName}>[Muhammad Bintang Al Akbar]</Text>
    </MainView>
  );
};

export {SplashScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '800',
    fontSize: 28,
    color: Colors.black,
    textTransform: 'uppercase',
    lineHeight: 34,
    textAlign: 'center',
    paddingVertical: 16,
  },
  titleName: {
    fontFamily: Fonts.RegularPoppins,
    fontWeight: '400',
    fontSize: 12,
    color: Colors.black,
    lineHeight: 16.2,
    textAlign: 'center',
  },
  image: {
    width: 125,
    height: 125,
  },
});
