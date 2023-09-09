import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MainText, MainView} from '../MainComponent';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {convertToRupiah} from '@constants/functional';
import {generalStyles} from '@constants/styles';
import dayjs from 'dayjs';

interface Iprops {
  date: string | null | undefined;
  value: number | null | undefined;
  desc: string | null | undefined;
  type: 'TOPUP' | 'PAYMENT' | null;
}
const TransactionCard = (props: Iprops) => {
  return (
    <View style={styles.card}>
      <MainView>
        <MainText
          color={
            props?.type === 'TOPUP' ? Colors.success.base : Colors.danger.base
          }
          style={styles.balance}>
          {`${props?.type === 'TOPUP' ? '+' : '-'} ${convertToRupiah(
            props?.value ?? 0,
          )}`}
        </MainText>
        <MainText paddingTop={12}>
          {dayjs(props?.date).format('DD MMMM YYYY HH:mm WIB')}
        </MainText>
      </MainView>
      <MainText>{props?.desc}</MainText>
    </View>
  );
};

export {TransactionCard};
const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: Colors.white,
    ...generalStyles.shadowProp,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  balance: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.25,
    fontFamily: Fonts.BoldPoppins,
    fontWeight: '800',
  },
});
