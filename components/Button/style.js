import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(45),
    marginVertical: verticalScale(20),
  },
  disabled: {
    opacity: 0.5,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
  },
});

export default style;
