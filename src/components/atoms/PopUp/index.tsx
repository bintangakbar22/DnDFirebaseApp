import Colors from '@constants/colors';
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Modal,
  Image,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import Fonts from '@constants/fonts';

export type PopUpProps = {
  show?: boolean;
  title?: string;
  styleTitle?: any;
  subtitle?: string;
  titleCancel?: string | null;
  titleConfirm?: string;
  actionCancel?: any;
  actionConfirm?: any;
  disabledActionConfirm?: boolean;
  disabledActionCancel?: boolean;
  png?: any;
  buttonPosition?: 'horizontal' | 'vertical';
  additionalContent?: React.ReactNode;
  modalView?: StyleProp<ViewStyle>;
  type?: any;
};

const PopUp = ({
  show,
  title,
  subtitle,
  titleCancel,
  titleConfirm,
  actionCancel,
  actionConfirm,
  png,
  buttonPosition = 'vertical',
  ...props
}: PopUpProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={actionCancel}>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, props.modalView]}>
          {png ? <Image style={styles.iconPng} source={png} /> : null}
          {subtitle ? (
            <Text style={[styles.desc, {fontFamily: Fonts.SemiBoldPoppins}]}>
              {subtitle}
            </Text>
          ) : null}
          <Text style={[styles.title, props.styleTitle]}>{title}</Text>
          {props.additionalContent}
          <View style={[styles.buttonContainer, styles[buttonPosition]]}>
            {titleConfirm && (
              <TouchableOpacity
                style={[
                  styles.button,
                  props.disabledActionConfirm && styles.btnDisabled,
                ]}
                onPress={actionConfirm}
                disabled={props.disabledActionConfirm}>
                <Text
                  style={[
                    styles.textStyleOpen,
                    props.disabledActionConfirm && styles.btnLabelDisabled,
                  ]}>
                  {titleConfirm}
                </Text>
              </TouchableOpacity>
            )}
            {titleCancel && (
              <TouchableOpacity
                style={[
                  styles.button,
                  props.disabledActionConfirm && styles.btnDisabled,
                ]}
                disabled={props.disabledActionCancel}
                onPress={actionCancel}>
                <Text
                  style={[
                    styles.textStyleClose,
                    props.disabledActionConfirm && styles.btnLabelDisabled,
                  ]}>
                  {titleCancel}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColorModal,
  },
  modalView: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    display: 'flex',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonOpen: {},
  buttonClose: {
    backgroundColor: Colors.white,
    color: Colors.primary.base,
  },
  textStyleClose: {
    color: Colors.disabled.text,
    textAlign: 'center',
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '800',
  },
  textStyleOpen: {
    color: Colors.danger.base,
    textAlign: 'center',
    fontFamily: Fonts.SemiBoldPoppins,
    fontWeight: '800',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
    color: Colors.dark.neutral100,
    fontFamily: Fonts.SemiBoldPoppins,
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark.neutral100,
    lineHeight: 22,
    fontFamily: Fonts.RegularPoppins,
    marginTop: 16,
  },
  iconConfirm: {
    width: 25,
    height: 25,
    margin: 5,
    resizeMode: 'contain',
  },
  iconPng: {
    width: 48,
    height: 48,
  },
  horizontal: {
    flexDirection: 'row',
  },
  vertical: {
    flexDirection: 'column',
  },
  btnDisabled: {
    backgroundColor: Colors.dark.neutral40,
    borderColor: 'transparent',
  },
  btnLabelDisabled: {
    color: Colors.dark.neutral60,
  },
});

export {PopUp};
