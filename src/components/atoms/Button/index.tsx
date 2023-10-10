import Colors from '@constants/colors';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
} from 'react-native';
import {MainView} from '../MainComponent';

export type ButtonProps = {
  label?: string;
  icon?: any;
  color?: string;
  background?: string;
  action?: () => void;
  top?: number;
  iconLeft?: any;
  bottom?: number;
  borderWidth?: number;
  borderColor?: string;
  isDisabled?: boolean;
  style?: TouchableOpacityProps['style'];
  outline?: boolean;
  danger?: boolean;
  success?: boolean;
  primaryLight?: boolean;
  fontSize?: number;
  customDisabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
};

const Button = ({
  label,
  icon,
  color = Colors.white,
  background = Colors.primary.base,
  action,
  top = 0,
  bottom = 0,
  isDisabled = false,
  outline = false,
  style = {},
  danger = false,
  success = false,
  primaryLight = false,
  fontSize = 16,
  borderColor = Colors.primary.base,
  borderWidth = 0,
  customDisabled = false,
  iconLeft,
  textStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={customDisabled || isDisabled}
      onPress={action}
      style={[
        styleProps(
          isDisabled,
          top,
          bottom,
          background,
          color,
          outline,
          danger,
          success,
          primaryLight,
          fontSize,
          borderColor,
          borderWidth,
        ).container,
        style,
      ]}>
      {iconLeft && (
        <MainView marginRight={10} backgroundColor={background}>
          {iconLeft}
        </MainView>
      )}
      {icon && <Image source={icon} style={styles.icon} />}
      <Text
        style={[
          styleProps(
            isDisabled,
            top,
            bottom,
            background,
            color,
            outline,
            danger,
            success,
            primaryLight,
            fontSize,
            borderColor,
            borderWidth,
          ).text,
          textStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    marginRight: 8,
    resizeMode: 'contain',
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
  },
});

const styleProps = (
  isDisabled: boolean,
  top: number,
  bottom: number,
  background: string,
  color: string,
  outline: boolean,
  danger: boolean,
  success: boolean,
  primaryLight: boolean,
  fontSize: number,
  borderColor: string,
  borderWidth: number,
) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: 4,
      backgroundColor: isDisabled
        ? '#F0F0F0'
        : outline
        ? Colors.white
        : danger
        ? Colors.danger.light2
        : success
        ? Colors.success.light1
        : primaryLight
        ? Colors.primary.light3
        : background,
      borderColor: isDisabled
        ? 'transparent'
        : outline
        ? Colors.primary.base
        : borderColor
        ? borderColor
        : '#C2185B',
      marginTop: top,
      marginBottom: bottom,
      borderWidth: outline ? 1 : borderWidth ? borderWidth : 0,
      paddingVertical: 12,
    },
    text: {
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: fontSize,
      fontWeight: '700',
      fontFamily: 'Roboto-SemiBold',
      color: isDisabled
        ? Colors.dark.neutral100
        : outline || primaryLight
        ? Colors.primary.base
        : danger
        ? Colors.danger.base
        : success
        ? Colors.white
        : color,
    },
  });

export {Button};
