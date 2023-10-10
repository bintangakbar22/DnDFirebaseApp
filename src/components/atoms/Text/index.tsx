import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import * as React from 'react';
import {
  Text as DefaultText,
  TextStyle,
  TextProps as ITextProps,
} from 'react-native';

export const styles = {
  default: {
    fontFamily: Fonts.RegularRoboto,
    color: Colors.dark.neutral100,
    fontSize: 14,
  },
  bold: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.BoldRoboto,
    fontWeight: 'bold',
  } as TextStyle,
  italic: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.ItalicRoboto,
    fontWeight: '400',
  } as TextStyle,
  boldItalic: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.BoldItalicRoboto,
    fontWeight: 'bold',
  } as TextStyle,
  semiBold: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.SemiBoldRoboto,
    fontWeight: '600',
  } as TextStyle,
  lineHeightBody: {lineHeight: 24} as TextStyle,

  montserratBoldItalic: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.BoldItalicMonserrat,
    fontWeight: 'bold',
  } as TextStyle,
  montserratBold: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.BoldMontserrat,
    fontWeight: 'bold',
  } as TextStyle,
  montserratSemiBold: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.SemiBoldMontserrat,
    fontWeight: '600',
  } as TextStyle,
  montserratRegular: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.RegularMontserrat,
    fontWeight: '400',
  } as TextStyle,
  montserratItalic: {
    color: Colors.dark.neutral100,
    fontSize: 14,
    fontFamily: Fonts.ItalicMontserrat,
    fontWeight: '400',
    fontStyle: 'italic',
  } as TextStyle,
};

interface TextProps extends ITextProps {
  children?: React.ReactNode;
  style?: TextStyle;
  fontSize?: number;
  type?: 'body' | 'label' | string;
  family?: 'Montserrat' | 'Roboto';
  fontStyle?: 'default' | 'Bold' | 'SemiBold' | 'Italic' | 'BoldItalic';
  color?: string;
}

export const Text: React.FC<TextProps & TextStyle> = props => {
  const {
    children,
    color = Colors.dark.neutral100,
    fontSize,
    type,
    family,
    style,
    ...rest
  } = props;

  const dynamicStyle: TextStyle = {
    ...(props?.family === 'Roboto' && props?.fontStyle === 'Bold'
      ? styles.bold
      : props?.family === 'Roboto' && props?.fontStyle === 'BoldItalic'
      ? styles.boldItalic
      : props?.family === 'Roboto' && props?.fontStyle === 'Italic'
      ? styles.italic
      : props?.family === 'Roboto' && props?.fontStyle === 'SemiBold'
      ? styles.semiBold
      : props?.family === 'Montserrat' && props?.fontStyle === 'Bold'
      ? styles.montserratBold
      : props?.family === 'Montserrat' && props?.fontStyle === 'BoldItalic'
      ? styles.montserratBoldItalic
      : props?.family === 'Montserrat' && props?.fontStyle === 'Italic'
      ? styles.montserratItalic
      : props?.family === 'Montserrat' && props?.fontStyle === 'SemiBold'
      ? styles.montserratSemiBold
      : props?.family === 'Montserrat'
      ? styles.montserratRegular
      : styles.default),
    fontSize: fontSize ? fontSize : props?.type === 'body' ? 17 : 13,
    color: color,
    ...rest,
  };

  return <DefaultText style={[dynamicStyle, style]}>{children}</DefaultText>;
};
