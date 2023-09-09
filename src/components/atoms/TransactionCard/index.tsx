import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MainText, MainView} from '../MainComponent';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {convertToRupiah} from '@constants/functional';
import {generalStyles} from '@constants/styles';
import {
  ICollectionData,
  Price,
  Product,
  Transaction,
  Type,
  User,
} from '@components/screens/HomeScreen/type';

interface Iprops {
  obj: Transaction;
  data: ICollectionData;
}
const TransactionCard = (props: Iprops) => {
  const product = props?.data?.Product?.find(
    (prd: Product) => prd?.id === props?.obj?.productId,
  );
  const types = props?.data?.Types?.find(
    (typ: Type) => typ?.id === product?.typeId,
  );
  const users = props?.data?.Users?.find(
    (usr: User) => usr?.id === props?.obj?.userId,
  );
  const prices = props?.data?.Prices?.find(
    (prc: Price) => prc?.productId === product?.id,
  );

  return (
    <View style={styles.card}>
      <MainView>
        <MainText style={styles.balance} color={types?.color}>
          {product?.name} ({types?.name})
        </MainText>
        <MainText
          style={styles.balance}
          paddingTop={12}
          color={Colors.success.base}>
          {convertToRupiah(prices?.points ?? 0 * props?.obj?.total ?? 0)}
        </MainText>
        <MainText paddingTop={12}>
          User : {users?.name} ({users?.id})
        </MainText>
      </MainView>
      <MainText color={types?.color}>Transaction #{props?.obj?.id}</MainText>
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
