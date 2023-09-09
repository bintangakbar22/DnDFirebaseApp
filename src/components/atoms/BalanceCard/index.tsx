import {
  ImageBackground,
  Pressable,
  PressableProps,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {MainText} from '../MainComponent';
import Colors from '@constants/colors';
import {backgroundSaldo} from '@assets/images';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '@constants/fonts';
import {convertToRupiah} from '@constants/functional';

interface Iprops {
  name?: string;
  value?: any;
  onPress?: PressableProps['onPress'];
  isSecureValue?: boolean;
  secured?: boolean;
}
const BalanceCard = (props: Iprops) => {
  const [isSecureText, setIsSecureText] = useState(props?.isSecureValue);
  const [value, setValue] = useState<any>(props?.value);

  useEffect(() => {
    const stringValue = props?.value?.toString();
    const lengthValue = stringValue?.length;

    if (isSecureText) {
      setValue('Rp ' + '*'.repeat(lengthValue));
    } else {
      setValue(convertToRupiah(props?.value));
    }
  }, [isSecureText, props?.value]);

  return (
    <ImageBackground
      style={styles.card}
      source={backgroundSaldo}
      imageStyle={styles.imageStyle}>
      <MainText alignSelf={'flex-start'} color={Colors.white}>
        {'Saldo anda'}
      </MainText>
      <MainText
        alignSelf={'flex-start'}
        color={Colors.white}
        paddingVertical={12}
        style={styles.balance}>
        {`${value}`}
      </MainText>
      {props?.secured ? (
        <Pressable
          style={styles.seeBalance}
          onPress={() => setIsSecureText(val => !val)}>
          <MainText
            alignSelf={'flex-start'}
            color={Colors.white}
            fontSize={12}
            paddingRight={8}>
            {isSecureText ? 'Lihat Saldo' : 'Tutup Saldo'}
          </MainText>
          <Icon
            name={isSecureText ? 'eye-outline' : 'eye-off-outline'}
            size={12}
            color={Colors.white}
          />
        </Pressable>
      ) : null}
    </ImageBackground>
  );
};

export {BalanceCard};
const styles = StyleSheet.create({
  card: {
    padding: 16,
  },
  imageStyle: {
    borderRadius: 12,
  },
  container: {
    overflow: 'hidden',
  },
  balance: {
    fontSize: 22,
    lineHeight: 24,
    letterSpacing: 0.25,
    fontFamily: Fonts.BoldPoppins,
    fontWeight: '800',
  },
  seeBalance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
