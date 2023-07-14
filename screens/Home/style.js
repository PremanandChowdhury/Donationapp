import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/style/scaling';

const style = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(14),
  },
});

export default style;
