/* eslint-disable react-hooks/exhaustive-deps */
import {showErrorToast, showSuccessToast} from '@constants/functional';
import {Keys} from '@constants/keys';
import {
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

  return {
    loginValidation,
    _handlerLogin,
    _handlerNavigateToRegistration,
    _handlerWithGoogle,
    isLoading,
  };
};

export {useLoginScreen};
