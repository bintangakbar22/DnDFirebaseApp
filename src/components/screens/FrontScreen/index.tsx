import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, MainView, TransparentBar} from '@components/atoms';
import {Background, LOGO} from '@assets/images';
import {generalStyles} from '@constants/styles';
import Fonts from '@constants/fonts';
import Colors from '@constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useFrontScreen} from './useFrontScreen';

const FrontScreen = () => {
  const {_handlerNavigateToRegistration, _handlerNavigateToLogin} =
    useFrontScreen();
  return (
    <MainView flex={1}>
      <TransparentBar />
      <ImageBackground
        source={Background}
        style={generalStyles.contentFlexWhite}>
        <ScrollView
          contentContainerStyle={[
            generalStyles.contentContainerStyle,
            styles.container,
          ]}>
          <Image source={LOGO} style={styles.logo} />
          <View style={styles.middleContainer}>
            <Text style={styles.welcomeText}>
              Selamat Datang di Wilopocargo Mobile
            </Text>
            <Text style={styles.secondText}>
              Semua kebutuhan impor anda berada dalam genggaman
            </Text>
            <View style={styles.buttonContainer}>
              <Button
                label="Sign In"
                action={_handlerNavigateToLogin}
                outline
              />
              <Button
                label="Login with Apple ID"
                background={Colors.dark.neutral100}
                top={15}
                icon={<Icon name={'apple'} size={22} color={Colors.white} />}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.notRegisteredText}>Belum terdaftar?</Text>
            <TouchableOpacity onPress={_handlerNavigateToRegistration}>
              <Text style={styles.createText}>Buat Marking Code Sekarang</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </MainView>
  );
};

export {FrontScreen};
const styles = StyleSheet.create({
  logo: {alignSelf: 'center', marginTop: 56},
  container: {
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  },
  middleContainer: {
    marginVertical: 80,
  },
  buttonContainer: {
    marginTop: 38,
    paddingHorizontal: 38,
  },
  welcomeText: {
    fontFamily: Fonts.RegularMontserrat,
    color: Colors.dark.neutral100,
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'left',
  },
  secondText: {
    fontFamily: Fonts.RegularRoboto,
    color: Colors.dark.neutral80,
    fontWeight: '400',
    fontSize: 17,
    textAlign: 'left',
    lineHeight: 24,
    paddingTop: 15,
  },
  buttonApple: {
    backgroundColor: Colors.dark.neutral100,
    marginTop: 15,
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notRegisteredText: {
    fontFamily: Fonts.BoldRoboto,
    color: Colors.dark.neutral60,
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15.23,
  },
  createText: {
    fontFamily: Fonts.BoldRoboto,
    color: Colors.secondary.light1,
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15.23,
  },
});
