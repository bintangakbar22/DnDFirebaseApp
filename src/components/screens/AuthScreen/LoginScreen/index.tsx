import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
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
import {Background} from '@assets/images';
import {generalStyles} from '@constants/styles';
import {Formik} from 'formik';

const LoginScreen = () => {
  const {_handlerNavigateToReset, isLoading, _handlerLogin, loginValidation} =
    useLoginScreen();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        style={generalStyles.contentFlexWhite}>
        <ScrollView contentContainerStyle={styles.sv}>
          <Text style={styles.title}>Masuk Akun</Text>
          <Text style={styles.welcomeTitle}>
            Silahkan login dengan ID Marking & Password Anda
          </Text>
          <Formik
            initialValues={{idMarking: '', password: ''}}
            validationSchema={loginValidation}
            onSubmit={values => _handlerLogin(values)}>
            {({handleChange, handleSubmit, values, errors}) => (
              <MainView marginVertical={32}>
                <Input
                  label="ID Marking"
                  placeholder="123/WC/"
                  value={values?.idMarking}
                  onChangeText={handleChange('idMarking')}
                  error={errors?.idMarking}
                />
                <Input
                  label="Password"
                  placeholder=""
                  value={values?.password}
                  onChangeText={handleChange('password')}
                  error={errors?.password}
                  secureTextEntry
                />
                <Button label="Sign In" action={handleSubmit} />
              </MainView>
            )}
          </Formik>
          <TouchableOpacity onPress={_handlerNavigateToReset}>
            <MainText style={styles.resetPasswordText}>Reset Password</MainText>
          </TouchableOpacity>
          {isLoading ? <LoadingIndicator /> : null}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export {LoginScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sv: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 25,
  },
  signInButton: {
    marginTop: 25,
    marginBottom: 100,
    width: '75%',
    alignSelf: 'center',
  },
  title: {
    fontFamily: Fonts.SemiBoldMontserrat,
    fontWeight: '700',
    fontSize: 28,
    color: Colors.dark.neutral100,
    lineHeight: 32,
    textAlign: 'left',
  },
  welcomeTitle: {
    fontFamily: Fonts.RegularRoboto,
    fontWeight: '400',
    fontSize: 17,
    color: Colors.dark.neutral100,
    lineHeight: 24,
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingTop: 15,
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
  resetPasswordText: {
    fontFamily: Fonts.BoldRoboto,
    color: Colors.secondary.light1,
    fontWeight: '700',
    fontSize: 13,
    lineHeight: 15.23,
    textAlign: 'center',
  },
});
