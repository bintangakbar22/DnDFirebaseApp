/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {useCallback, useEffect} from 'react';
import * as yup from 'yup';

const registerValidation = yup.object().shape({
  email: yup
    .string()
    .email('Please Enter Valid Email!')
    .required('Email is Required!'),
  password: yup
    .string()
    .required('Password is Required!')
    .min(8, 'Password must be at least 8 characters long')
    .matches(
      /^(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter',
    ),
  first_name: yup.string().required('Nama Depan is Required!'),
  last_name: yup.string().required('Nama Belakang is Required!'),
  confirmPassword: yup
    .string()
    .required('Confirm Password is Required!')
    .oneOf([yup.ref('password')], 'Password Tidak Sama'),
});

const useRegisterScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'RegisterScreen'>>();

  const _handlerRegister = useCallback(values => {
    const newValues = {
      email: values.email,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
    };
  }, []);

  const _handlerNavigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return {
    _handlerNavigateToLogin,
    _handlerRegister,
    registerValidation,
  };
};

export {useRegisterScreen};
