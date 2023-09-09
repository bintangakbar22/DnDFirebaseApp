import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '@constants/colors';
import Fonts from '@constants/fonts';
import {MainText, MainView} from '../MainComponent';

interface Iprops {
  label?: string;
  icon?: any;
  placeholder: string;
  onChangeText: any;
  value: any;
  error?: any;
  secureTextEntry?: boolean;
  onPress?: any;
  numeric?: boolean;
  isPassword?: boolean;
  isEmail?: boolean;
  isDisabled?: boolean;
}
const Input = ({
  label,
  icon,
  placeholder,
  onChangeText,
  value,
  error,
  secureTextEntry,
  numeric,
  isPassword,
  isEmail,
  isDisabled,
}: Iprops) => {
  const [isSecureText, setIsSecureText] = useState(secureTextEntry);
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.Container}>
      {label ? <MainText style={styles.label}>{label}</MainText> : null}
      <View
        style={{
          ...styles.Content,
          borderColor: error
            ? Colors.danger.base
            : isActive
            ? Colors.black
            : Colors.disabled.text,
        }}>
        <MainView flexDirection="row">
          {icon ? (
            <Icon
              style={styles.iconLeft}
              name={icon}
              size={16}
              color={error ? Colors.danger.base : Colors.disabled.text}
            />
          ) : null}
          {numeric ? (
            <TextInput
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
              style={[styles.Input]}
              keyboardType="numeric"
              placeholder={placeholder}
              onChangeText={onChangeText}
              value={value}
              editable={!isDisabled}
              secureTextEntry={isSecureText}
              placeholderTextColor={Colors.disabled.text}
              maxLength={10}
            />
          ) : (
            <TextInput
              onFocus={() => setIsActive(true)}
              onBlur={() => setIsActive(false)}
              style={[styles.Input]}
              keyboardType={isEmail ? 'email-address' : undefined}
              placeholder={placeholder}
              onChangeText={onChangeText}
              value={value}
              editable={!isDisabled}
              secureTextEntry={isSecureText}
              placeholderTextColor={Colors.disabled.text}
            />
          )}
        </MainView>
        {isPassword ? (
          <TouchableOpacity
            style={styles.iconRight}
            onPress={() => {
              setIsSecureText(val => !val);
            }}>
            <Icon
              name={isSecureText ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color={Colors.disabled.text}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text style={styles.Text}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 8,
    fontFamily: Fonts.BoldPoppins,
    fontWeight: '800',
  },
  iconRight: {justifyContent: 'center'},
  iconLeft: {
    alignSelf: 'center',
  },
  Container: {
    // alignItems: 'center',
  },
  Content: {
    backgroundColor: Colors.white,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
    paddingHorizontal: 16,
    marginVertical: 4,
    width: '100%',
    alignSelf: 'center',
  },
  Input: {
    width: '85%',
    paddingVertical: 6,
    fontFamily: Fonts.RegularPoppins,
    fontSize: 14,
    lineHeight: 22,
    color: Colors.black,
    marginLeft: 4,
    letterSpacing: 0.25,
  },
  Text: {
    fontFamily: Fonts.RegularPoppins,
    fontSize: 10,
    color: Colors.danger.base,
    textAlign: 'right',
    marginVertical: 3,
    width: '100%',
  },
});

export {Input};
