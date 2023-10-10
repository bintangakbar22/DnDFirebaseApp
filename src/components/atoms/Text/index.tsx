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
    fontStyle,
    style,
    ...rest
  } = props;

  const dynamicStyle: TextStyle = {
    ...(family === 'Roboto' && fontStyle === 'Bold'
      ? styles.bold
      : family === 'Roboto' && fontStyle === 'BoldItalic'
      ? styles.boldItalic
      : family === 'Roboto' && fontStyle === 'Italic'
      ? styles.italic
      : family === 'Roboto' && fontStyle === 'SemiBold'
      ? styles.semiBold
      : family === 'Montserrat' && fontStyle === 'Bold'
      ? styles.montserratBold
      : family === 'Montserrat' && fontStyle === 'BoldItalic'
      ? styles.montserratBoldItalic
      : family === 'Montserrat' && fontStyle === 'Italic'
      ? styles.montserratItalic
      : family === 'Montserrat' && fontStyle === 'SemiBold'
      ? styles.montserratSemiBold
      : family === 'Montserrat'
      ? styles.montserratRegular
      : styles.default),
    fontSize: fontSize ? fontSize : type === 'body' ? 17 : 13,
    color: color,
    ...rest,
  };

  return <DefaultText style={[dynamicStyle, style]}>{children}</DefaultText>;
};
