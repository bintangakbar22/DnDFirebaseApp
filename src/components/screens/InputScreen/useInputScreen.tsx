import {useIsFocused} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {NativeModules, NativeEventEmitter} from 'react-native';
import Orientation from 'react-native-orientation-locker';
const useInputScreen = () => {
  const [inputText, setInputText] = useState<string>('');
  const isFocused = useIsFocused();
  const openNativeModal = () => {
    const {MyModalModule} = NativeModules;
    MyModalModule.showInputModal(inputText ?? 'Hello, Native Module!');
    const eventEmitter = new NativeEventEmitter(MyModalModule);

    eventEmitter.addListener('onInputResult', event => {
      console.log('Hasil input:', event.result);
    });
  };

  useEffect(() => {
    if (isFocused) {
      Orientation.lockToPortrait();
    }
  }, [isFocused]);

  return {inputText, openNativeModal, setInputText};
};

export {useInputScreen};
