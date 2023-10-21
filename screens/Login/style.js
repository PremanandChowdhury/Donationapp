import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../assets/style/scaling';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(24),
    justifyContent: "center",
  },
  registrationBtn: {
    alignItems: "center",
  },
  toastStyle : {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    textAlign: "center"
  },
  error: {
    color: '#FF0000',
  },
});

export default style;
