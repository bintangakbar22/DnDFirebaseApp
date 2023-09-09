import React from 'react';
import {generalStyles} from '@constants/styles';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import Fonts from '@constants/fonts';
import Colors from '@constants/colors';

interface MainViewProps extends ViewStyle {
  p?: number;
  m?: number;
  children?: React.ReactNode;
  style?: ViewStyle;
}

const MainView: React.FC<MainViewProps> = props => {
  const {children, ...otherProps} = props;
  const dynamicStyle: ViewStyle = {
    padding: props?.p,
    margin: props?.m,
    ...otherProps,
  };

  return (
    <View style={[generalStyles.container, dynamicStyle, props?.style]}>
      {children}
    </View>
  );
};

interface MainTextProps {
  p?: number;
  m?: number;
  children?: any;
  style?: TextStyle;
  type?: 'SemiBold' | 'Regular' | 'Bold';
}

const MainText: React.FC<MainTextProps & TextStyle> = props => {
  const {children, style, ...otherProps} = props;
  const dynamicStyle: TextStyle = {
    padding: props?.p,
    margin: props?.m,
    fontFamily:
      props?.fontFamily ?? props?.type === 'SemiBold'
        ? Fonts.SemiBoldPoppins
        : props?.type === 'Bold'
        ? Fonts.BoldPoppins
        : Fonts.RegularPoppins,
    fontWeight:
      props?.type === 'SemiBold' || props?.type === 'Bold' ? '600' : '400',
    fontSize: props?.fontSize ?? 14,
    lineHeight: props?.lineHeight ?? 18,
    letterSpacing: props?.letterSpacing ?? 0.25,
    color: props?.color ?? Colors.dark.neutral100,
    ...otherProps,
  };

  return <Text style={[dynamicStyle, props?.style]}>{children}</Text>;
};

export {MainView, MainText};
