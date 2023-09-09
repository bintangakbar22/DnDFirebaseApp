import {StyleSheet} from 'react-native';
import React from 'react';
import {Button, Header, Input, MainView} from '@components/atoms';
import {useInputScreen} from './useInputScreen';

const InputScreen = () => {
  const {inputText, openNativeModal, setInputText} = useInputScreen();
  return (
    <MainView flex={1}>
      <Header label="Input" withoutBackButton />
      <MainView
        padding={16}
        justifyContent="center"
        alignItems="center"
        flex={1}>
        <Input
          label="Input"
          value={inputText}
          placeholder="Input Value Here"
          onChangeText={setInputText}
          icon={'message'}
        />
        <Button
          label="Submit"
          action={openNativeModal}
          style={styles.button}
          isDisabled={inputText === ''}
        />
      </MainView>
    </MainView>
  );
};

export {InputScreen};

const styles = StyleSheet.create({
  button: {
    width: '90%',
  },
});
