import {showErrorToast, showSuccessToast} from '@constants/functional';
import {registerWithEmailPassword, IPayloadAuth} from '@firebase';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
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
});

const useRegisterScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'RegisterScreen'>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const _handlerRegister = async (values: IPayloadAuth) => {
    setIsLoading(true);
    registerWithEmailPassword(values)
      .then(() => {
        showSuccessToast('Register Berhasil!!');
        _handlerNavigateToLogin();
      })
      .catch((_: Error) => showErrorToast(_?.message))
      .finally(() => setIsLoading(false));
  };

  const _handlerNavigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return {
    _handlerNavigateToLogin,
    _handlerRegister,
    registerValidation,
    isLoading,
  };
};

export {useRegisterScreen};
