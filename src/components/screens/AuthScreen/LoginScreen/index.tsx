import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import Fonts from '@constants/fonts';
import Colors from '@constants/colors';
import {
  Button,
  Input,
  LoadingIndicator,
  MainText,
  MainView,
} from '@components/atoms';
import {useLoginScreen} from './useLoginScreen';
import {GoogleSigninButton} from 'react-native-google-signin';

const LoginScreen = () => {
  const {
    _handlerNavigateToRegistration,
    _handlerWithGoogle,
    isLoading,
    phoneNumber,
    setPhoneNumber,
    otp,
    setOTP,
    _handlerSendOTP,
    confirm,
    verifyCode,
  } = useLoginScreen();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.sv}>
        <MainView flexDirection="row" alignItems="center">
          <Text style={styles.title}>DnD App</Text>
        </MainView>
        <Text style={styles.welcomeTitle}>
          {`Masuk atau buat akun \n untuk memulai`}
        </Text>

        <MainView marginVertical={32}>
          {!confirm ? (
            <Input
              icon={'phone'}
              placeholder="masukan no hp anda"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              error={''}
            />
          ) : (
            <Input
              icon={'phone'}
              placeholder="masukan otp"
              value={otp}
              onChangeText={setOTP}
              error={''}
            />
          )}
          <Button
            label="Masuk"
            action={async () => {
              try {
                if (!confirm) {
                  _handlerSendOTP();
                  return;
                }
                await verifyCode(otp);
              } catch (error) {}
            }}
          />
        </MainView>
        <GoogleSigninButton
          style={styles.googleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={_handlerWithGoogle}
        />
        <TouchableOpacity onPress={_handlerNavigateToRegistration}>
          <MainText>
            {`belum punya akun? registrasi`}{' '}
            <MainText color={Colors.danger.base}>di sini</MainText>
          </MainText>
        </TouchableOpacity>
        {isLoading ? <LoadingIndicator /> : null}
      </ScrollView>
    </View>
  );
};

export {LoginScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  sv: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '800',
    fontSize: 20,
    color: Colors.black,
    textTransform: 'uppercase',
    lineHeight: 24,
    textAlign: 'center',
    paddingLeft: 8,
  },
  welcomeTitle: {
    fontFamily: Fonts.BoldPoppins,
    fontWeight: '800',
    fontSize: 28,
    color: Colors.black,
    lineHeight: 32,
    textAlign: 'center',
    paddingTop: 32,
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
    width: 30,
    height: 30,
  },
  googleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    height: 60,
    marginBottom: 16,
  },
});
