import {StyleSheet} from 'react-native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    borderRadius: horizontalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(22),
  },
  title: {
    color: '#ffffff',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(12),
  },
});

export default style;
