import {ScrollView} from 'react-native';
import React from 'react';
import {Header, MainText, MainView, TransactionCard} from '@components/atoms';
import {useHomeScreen} from './useHomeScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@constants/colors';
import {Transaction} from './type';
import {generalStyles} from '@constants/styles';

const HomeScreen = () => {
  const {_handlerLogout, data, user} = useHomeScreen();

  return (
    <MainView flex={1}>
      <Header
        label="Transactions"
        withoutBackButton
        iconRight={
          <Icon name="logout" size={24} color={Colors.dark.neutral100} />
        }
        onPressIconRight={_handlerLogout}
      />
      <ScrollView contentContainerStyle={generalStyles.contentContainerStyle}>
        <MainView padding={16}>
          <MainText fontWeight="800" fontSize={18} marginTop={8}>
            Halo, {user?.user?.displayName ?? user?.user?.email ?? ''}
          </MainText>
          {data?.Transactions?.map((obj: Transaction) => (
            <TransactionCard data={data} obj={obj} />
          ))}
        </MainView>
      </ScrollView>
    </MainView>
  );
};

export {HomeScreen};
