import {
  StyleSheet,
  Text,
  Modal,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Fonts from '@constants/fonts';
import Colors from '@constants/colors';
import {Button, Input, LoadingIndicator, MainView} from '@components/atoms';
import {Background} from '@assets/images';
import {generalStyles} from '@constants/styles';
import {Formik} from 'formik';
import {useResetPasswordScreen} from './useResetPasswordScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Iprops {
  action: () => void;
}
const SuccessResetBackground = (props: Iprops) => {
  return (
    <Modal transparent={true} visible={true}>
      <View style={styles.containerModal}>
        <Icon name="check-circle-outline" color={Colors.white} size={100} />
        <Text style={styles.titleSuccess}>{`Reset Password \nBerhasil!`}</Text>
        <Text style={styles.secondTitleSuccess}>
          Silahkan cek email anda untuk instruksi selanjutnya
        </Text>
        <Button
          label="Halaman Login"
          action={props?.action}
          style={styles.goToLoginButton}
        />
      </View>
    </Modal>
  );
};

const ResetPasswordScreen = () => {
  const {
    isLoading,
    _handlerReset,
    loginValidation,
    isValidReset,
    _handlerNavigateToLogin,
  } = useResetPasswordScreen();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Background}
        style={generalStyles.contentFlexWhite}>
        <ScrollView contentContainerStyle={styles.sv}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.welcomeTitle}>
            Instruksi reset password akan dikirim ke email anda
          </Text>
          <Formik
            initialValues={{email: ''}}
            validationSchema={loginValidation}
            onSubmit={values => _handlerReset(values)}>
            {({handleChange, handleSubmit, values, errors}) => (
              <MainView marginVertical={32}>
                <Input
                  label="Masukkan email"
                  placeholder=""
                  value={values?.email}
                  onChangeText={handleChange('email')}
                  error={errors?.email}
                />
                <Button
                  label="Reset Password"
                  action={handleSubmit}
                  style={styles.signInButton}
                />
              </MainView>
            )}
          </Formik>
          {isValidReset ? (
            <SuccessResetBackground action={_handlerNavigateToLogin} />
          ) : null}
          {isLoading ? <LoadingIndicator /> : null}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export {ResetPasswordScreen};

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
  },
  goToLoginButton: {
    marginTop: 50,
    width: '75%',
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
  containerModal: {
    backgroundColor: Colors.backgroundColorModal,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  titleSuccess: {
    fontFamily: Fonts.SemiBoldMontserrat,
    fontWeight: '700',
    fontSize: 26,
    color: Colors.white,
    lineHeight: 32,
    textAlign: 'center',
    paddingTop: 15,
  },
  secondTitleSuccess: {
    fontFamily: Fonts.SemiBoldRoboto,
    fontWeight: '400',
    fontSize: 17,
    color: Colors.white,
    lineHeight: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
});
