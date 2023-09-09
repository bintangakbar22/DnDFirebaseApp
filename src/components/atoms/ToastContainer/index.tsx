import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ToastConfigParams} from 'react-native-toast-message';

const ToastContainer: FC<ToastConfigParams<any>> = props => {
  if (props?.isVisible) {
    return (
      <View
        style={[
          styles.toastContainer,
          {
            backgroundColor:
              props.type === 'error'
                ? Colors.danger.base
                : props.type === 'warning'
                ? Colors.orange.base
                : Colors.success.light1,
          },
        ]}>
        <Text
          style={[
            styles.toastTitle,
            {
              color:
                props.type === 'warning'
                  ? Colors.dark.neutral100
                  : Colors.white,
            },
          ]}>
          {props.text1}
        </Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    zIndex: 999,
    bottom: -24,
    right: 16,
    left: 16,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.success.light1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toastTitle: {
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: Colors.black,
  },
});

export {ToastContainer};
