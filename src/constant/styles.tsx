import {StyleSheet} from 'react-native';
import Colors from './colors';
import Fonts from './fonts';

export const generalStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 200,
  },
  contentFlex: {flex: 1},
  row: {flexDirection: 'row'},
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowEvenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {flexDirection: 'column'},
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.84,
    elevation: 2,
  },
  RegularFz12_LH22_Fw400_Neutral100: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: Fonts.RegularPoppins,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontWeight: '400',
  },
  RegularFz12_LH22_Fw400_Neutral80: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: Fonts.RegularPoppins,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontWeight: '400',
  },
  RegularFz12_LH22_Fw400_Neutral60: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: Fonts.RegularPoppins,
    letterSpacing: 0.25,
    color: Colors.dark.neutral100,
    fontWeight: '400',
  },
  absolute: {
    position: 'absolute',
  },
  contentFlexWhite: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  backgroundWhite: {
    backgroundColor: Colors.white,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  card: {
    padding: 16,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
});
