import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Fonts from '@constants/fonts';
import Colors from '@constants/colors';
import {Button, Input, MainText, MainView} from '@components/atoms';
import {Formik} from 'formik';
import {useLoginScreen} from './useLoginScreen';

const LoginScreen = () => {
  const {loginValidation, _handlerLogin, _handlerNavigateToRegistration} =
    useLoginScreen();

  return (
    <View style={styles.container}>
      <MainView flexDirection="row" alignItems="center">
        <Text style={styles.title}>DnD App</Text>
      </MainView>
      <Text style={styles.welcomeTitle}>
        {`Masuk atau buat akun \n untuk memulai`}
      </Text>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={loginValidation}
        onSubmit={values => _handlerLogin(values)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <MainView marginVertical={32} padding={16}>
            <MainView marginBottom={32}>
              <Input
                icon={'email-outline'}
                isEmail
                placeholder="masukan email anda"
                value={values.email}
                onChangeText={handleChange('email')}
                error={errors.email}
              />
              <Input
                icon={'lock-outline'}
                placeholder="masukan password anda"
                value={values.password}
                onChangeText={handleChange('password')}
                error={errors.password}
                secureTextEntry
                isPassword
              />
            </MainView>
            <Button label="Masuk" action={handleSubmit} />
          </MainView>
        )}
      </Formik>
      <TouchableOpacity onPress={_handlerNavigateToRegistration}>
        <MainText>
          {`belum punya akun? registrasi`}{' '}
          <MainText color={Colors.danger.base}>di sini</MainText>
        </MainText>
      </TouchableOpacity>
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
});
