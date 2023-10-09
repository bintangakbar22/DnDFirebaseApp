/* eslint-disable react-hooks/exhaustive-deps */
import {showErrorToast, showSuccessToast} from '@constants/functional';
import {Keys} from '@constants/keys';
import firebase, {
  FirebaseUserCredential,
  IPayloadAuth,
  loginWithEmailPassword,
  signInWithGoogle,
} from '@firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback, useState} from 'react';
import * as yup from 'yup';

const loginValidation = yup.object().shape({
  email: yup
    .string()
    .email('Please Enter Valid Email!')
    .required('Email is Required!'),
  password: yup.string().required('Password is Required!'),
});

const useLoginScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'LoginScreen'>>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>('+62');
  const [otp, setOTP] = useState<string>('');
  const [verificationCode, setVerificationCOde] = useState<string>('');
  const [confirm, setConfirm] = useState<any>(null);

  const _handlerLogin = useCallback(async (values: IPayloadAuth) => {
    setIsLoading(true);
    loginWithEmailPassword(values)
      .then((res: FirebaseUserCredential) => _handlerSetProfile(res))
      .catch((_: Error) => showErrorToast(_?.message))
      .finally(() => setIsLoading(false));
  }, []);

  const _handlerWithGoogle = () => {
    setIsLoading(true);
    signInWithGoogle()
      .then(
        (res: FirebaseUserCredential | undefined) =>
          res && _handlerSetProfile(res),
      )
      .catch((_: Error) => showErrorToast(_?.message))
      .finally(() => setIsLoading(false));
  };

  const _handlerSetProfile = async (
    dataUser: FirebaseUserCredential | undefined,
  ) => {
    showSuccessToast('Login Berhasil!!');
    await AsyncStorage.setItem(Keys.dataUser, JSON.stringify(dataUser));
    navigation.replace('BottomTabNavigator');
  };

  const _handlerNavigateToRegistration = () => {
    navigation.navigate('RegisterScreen');
  };

  const _handlerSendOTP = async () => {
    try {
      await firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber)
        .then(confirmResult => {
          setConfirm(confirmResult);
        })
        .catch(error => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  const verifyCode = async (code: string) => {
    try {
      await confirm
        .confirm(code)
        .then((res: FirebaseUserCredential) => _handlerSetProfile(res))
        .catch((_: Error) => showErrorToast(_?.message))
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.error(error);
    }
  };

  return {
    loginValidation,
    _handlerLogin,
    _handlerNavigateToRegistration,
    _handlerWithGoogle,
    isLoading,
    phoneNumber,
    setPhoneNumber,
    otp,
    setOTP,
    _handlerSendOTP,
    verificationCode,
    setVerificationCOde,
    confirm,
    setConfirm,
    verifyCode,
  };
};

export {useLoginScreen};
