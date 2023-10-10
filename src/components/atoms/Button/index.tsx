import Colors from '@constants/colors';
import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
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
  type?:
    | 'Primary'
    | 'Primary-Hover'
    | 'Primary-Active'
    | 'Secondary'
    | 'Secondary-Hover'
    | 'Secondary-Active';
  outline?: boolean;
  imageIcon?: any;
  bottom?: number;
  borderWidth?: number;
  borderColor?: string;
  isDisabled?: boolean;
  fontSize?: number;
  customDisabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
  font?:
    | 'Roboto-Semibold'
    | 'Roboto-Bold'
    | 'Roboto-Regular'
    | 'Roboto-BoldItalic'
    | 'Montserrat-Semibold'
    | 'Montserrat-Bold'
    | 'Montserrat-Regular'
    | 'Montserrat-BoldItalic';
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
  fontSize = 16,
  borderColor = Colors.primary.base,
  borderWidth = 0,
  customDisabled = false,
  imageIcon,
  textStyle,
  type,
  outline = false,
  font = 'Roboto-Regular',
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
          fontSize,
          borderColor,
          borderWidth,
          type,
          outline,
          font,
        ).container,
      ]}>
      {icon && (
        <MainView marginRight={10} backgroundColor={background}>
          {icon}
        </MainView>
      )}
      {imageIcon && <Image source={icon} style={styles.icon} />}
      <Text
        style={[
          styleProps(
            isDisabled,
            top,
            bottom,
            background,
            color,
            fontSize,
            borderColor,
            borderWidth,
            type,
            outline,
            font,
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
  fontSize: number,
  borderColor: string,
  borderWidth: number,
  type:
    | 'Primary'
    | 'Primary-Hover'
    | 'Primary-Active'
    | 'Primary-Outline'
    | 'Secondary'
    | 'Secondary-Hover'
    | 'Secondary-Active'
    | undefined,
  outline: boolean,
  font:
    | 'Roboto-Semibold'
    | 'Roboto-Bold'
    | 'Roboto-Regular'
    | 'Roboto-BoldItalic'
    | 'Montserrat-Semibold'
    | 'Montserrat-Bold'
    | 'Montserrat-Regular'
    | 'Montserrat-BoldItalic',
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
        : type === 'Primary'
        ? Colors.primary.base
        : type === 'Secondary'
        ? Colors.secondary.base
        : type === 'Primary-Hover'
        ? Colors.primary.light2
        : type === 'Secondary-Hover' || type === 'Secondary-Active'
        ? Colors.secondary.light2
        : type === 'Primary-Active'
        ? Colors.primary.light1
        : background,
      borderColor: isDisabled
        ? 'transparent'
        : outline || type === 'Primary-Hover'
        ? Colors.primary.base
        : type === 'Secondary-Active'
        ? Colors.secondary.light2
        : Colors.secondary.base
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
      fontFamily: font,
      color: isDisabled
        ? Colors.dark.neutral100
        : outline
        ? Colors.primary.base
        : color,
    },
  });

export {Button};
