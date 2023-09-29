import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/style/scaling';

const style = StyleSheet.create({
  container: {
    paddingHorizontal: horizontalScale(24),
    justifyContent: "center",
  },
  registrationBtn: {
    alignItems: "center",
  }
});

export default style;
