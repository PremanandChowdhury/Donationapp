import {StyleSheet} from 'react-native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(40),
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  tabTitle: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
