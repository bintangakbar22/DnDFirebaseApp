/* eslint-disable react-hooks/exhaustive-deps */
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const useHomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'HomeScreen'>>();

  return {
    navigation,
  };
};

export {useHomeScreen};
