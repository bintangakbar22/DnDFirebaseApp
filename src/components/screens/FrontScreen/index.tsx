import {
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {Button, MainView, TransparentBar} from '@components/atoms';
import {Background, LOGO} from '@assets/images';
import {generalStyles} from '@constants/styles';
import Fonts from '@constants/fonts';
import Colors from '@constants/colors';

const FrontScreen = () => {
  return (
    <MainView flex={1}>
      <TransparentBar />
      <ImageBackground
        source={Background}
        style={generalStyles.contentFlexWhite}>
        <ScrollView
          contentContainerStyle={[
            generalStyles.contentContainerStyle,
            styles.container,
          ]}>
          <Image source={LOGO} style={styles.logo} />
          <View style={styles.middleContainer}>
            <Text style={styles.welcomeText}>
              Selamat Datang di Wilopocargo Mobile
            </Text>
            <Text style={styles.secondText}>
              Semua kebutuhan impor anda berada dalam genggaman
            </Text>
            <View style={styles.buttonContainer}>
              <Button label="Sign In" />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </MainView>
  );
};

export {FrontScreen};
const styles = StyleSheet.create({
  logo: {alignSelf: 'center', marginTop: 56},
  container: {
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  middleContainer: {
    marginVertical: 100,
  },
  buttonContainer: {
    marginTop: 38,
    paddingHorizontal: 38,
  },
  welcomeText: {
    fontFamily: Fonts.RegularMontserrat,
    color: Colors.dark.neutral100,
    fontWeight: '700',
    fontSize: 26,
    textAlign: 'left',
  },
  secondText: {
    fontFamily: Fonts.RegularRoboto,
    color: Colors.dark.neutral80,
    fontWeight: '400',
    fontSize: 17,
    textAlign: 'left',
    lineHeight: 24,
    paddingTop: 15,
  },
});
