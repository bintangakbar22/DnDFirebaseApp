import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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
import {Formik} from 'formik';
import {useRegisterScreen} from './useRegisterScreen';

const RegisterScreen = () => {
  const {
    _handlerNavigateToLogin,
    _handlerRegister,
    registerValidation,
    isLoading,
  } = useRegisterScreen();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <MainView flexDirection="row" alignItems="center">
          <Text style={styles.title}>DnD App</Text>
        </MainView>
        <Text style={styles.welcomeTitle}>
          {`Lengkapi data untuk \n membuat akun`}
        </Text>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={registerValidation}
          onSubmit={values => _handlerRegister(values)}>
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
                  placeholder="buat password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  error={errors.password}
                  secureTextEntry
                  isPassword
                />
              </MainView>
              <Button label="Registrasi" action={handleSubmit} />
            </MainView>
          )}
        </Formik>
        <TouchableOpacity onPress={_handlerNavigateToLogin}>
          <MainText>
            {`sudah punya akun? login`}{' '}
            <MainText color={Colors.danger.base}>di sini</MainText>
          </MainText>
        </TouchableOpacity>
      </ScrollView>
      {isLoading ? <LoadingIndicator /> : null}
    </View>
  );
};

export {RegisterScreen};

const styles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
    flexGrow: 1,
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
