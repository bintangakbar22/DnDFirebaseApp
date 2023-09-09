import {FirebaseUserCredential, database, signOutFromGoogle} from '@firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect, useState} from 'react';
import {ICollectionData} from './type';
import Orientation from 'react-native-orientation-locker';
import {Keys} from '@constants/keys';
const useHomeScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<ParamList, 'HomeScreen'>>();
  const isFocused = useIsFocused();
  const [data, setData] = useState<ICollectionData | null>(null);
  const [user, setUser] = useState<FirebaseUserCredential | null>(null);

  const _handlerLogout = async () => {
    await signOutFromGoogle();
    await AsyncStorage.clear();
    navigation.replace('LoginScreen');
  };

  const fetchData = async () => {
    const userData = await AsyncStorage.getItem(Keys.dataUser);
    if (userData) {
      setUser(JSON.parse(userData));
    }
    database
      .ref()
      .once('value')
      .then((snapshot: any) => {
        setData(snapshot.val());
      });
  };

  useEffect(() => {
    if (isFocused) {
      Orientation.lockToPortrait();
    }
  }, [isFocused]);

  useEffect(() => {
    fetchData();
  }, []);

  return {
    navigation,
    _handlerLogout,
    data,
    user,
  };
};

export {useHomeScreen};
