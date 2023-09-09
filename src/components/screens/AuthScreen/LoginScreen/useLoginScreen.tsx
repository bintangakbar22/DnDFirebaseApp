/* eslint-disable react-hooks/exhaustive-deps */
import {Keys} from '@constants/keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCallback} from 'react';
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

  const _handlerLogin = useCallback(values => {}, []);

  const _handlerSetProfile = async (token: string) => {
    await AsyncStorage.setItem(Keys.token, token);
  };

  const _handlerNavigateToRegistration = () => {
    navigation.navigate('RegisterScreen');
  };

  return {
    loginValidation,
    _handlerLogin,
    _handlerNavigateToRegistration,
  };
};

export {useLoginScreen};
