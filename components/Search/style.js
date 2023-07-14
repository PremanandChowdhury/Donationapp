import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';

const style = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    borderRadius: horizontalScale(15),
  },
  searchInput: {
    color: '#686C7A',
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
  },
});

export default style;
