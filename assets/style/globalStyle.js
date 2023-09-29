import {StyleSheet} from 'react-native';
import {verticalScale} from "./scaling";

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#ffffff',
  },
  flex: {
    flex: 1,
  },
  mb_24: {
    marginBottom: verticalScale(24)
  }
});

export default globalStyle;
