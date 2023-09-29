import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/style/scaling';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(24),
    justifyContent: "center",
  },
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  toastStyle : {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    textAlign: "center"
  },
  error: {
    color: '#FF0000',
  },
  success: {
    color: '#28a745',
  }
});

export default style;
