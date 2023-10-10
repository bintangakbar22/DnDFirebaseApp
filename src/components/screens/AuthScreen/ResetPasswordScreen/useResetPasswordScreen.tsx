/* eslint-disable react-hooks/exhaustive-deps */
import {showErrorToast, showSuccessToast} from '@constants/functional';
import {Keys} from '@constants/keys';
import {
  FirebaseUserCredential,
  // IPayloadAuth,
  // loginWithEmailPassword,
  signInWithGoogle,
} from '@firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback, useState} from 'react';
import * as yup from 'yup';

interface IPayloadReset {
  email: string;
}

const loginValidation = yup.object().shape({
  email: yup.string().email().required('Email is Required!'),
});

const useResetPasswordScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'ResetPasswordScreen'>>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValidReset, setIsValidReset] = useState<boolean>(false);
  const [verificationCode, setVerificationCOde] = useState<string>('');
  const [confirm, setConfirm] = useState<any>(null);

  const _handlerReset = useCallback(async (values: IPayloadReset) => {
    setIsValidReset(true);
    //setIsLoading(true);
    // loginWithEmailPassword(values)
    //   .then((res: FirebaseUserCredential) => _handlerSetProfile(res))
    //   .catch((_: Error) => showErrorToast(_?.message))
    //   .finally(() => setIsLoading(false));
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

  const _handlerNavigateToLogin = () => {
    navigation.navigate('LoginScreen');
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
    _handlerReset,
    _handlerNavigateToLogin,
    _handlerWithGoogle,
    isLoading,
    verificationCode,
    setVerificationCOde,
    confirm,
    setConfirm,
    verifyCode,
    isValidReset,
    setIsValidReset,
  };
};

export {useResetPasswordScreen};
