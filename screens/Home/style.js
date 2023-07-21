import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/style/scaling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  search: {
    marginTop: verticalScale(10),
    marginHorizontal: horizontalScale(24),
  },
  bannerContainer: {
    marginHorizontal: horizontalScale(24),
  },
  bannerImage: {
    width: '100%',
    height: verticalScale(160),
  },
});

export default style;
