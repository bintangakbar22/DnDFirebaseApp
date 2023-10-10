import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const useFrontScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'FrontScreen'>>();
  const _handlerNavigateToRegistration = () => {
    navigation.navigate('RegisterScreen');
  };
  const _handlerNavigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  return {_handlerNavigateToRegistration, _handlerNavigateToLogin};
};

export {useFrontScreen};
