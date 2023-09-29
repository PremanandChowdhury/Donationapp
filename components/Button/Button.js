import {Text, Pressable} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

const Button = props => {
  return (
    <Pressable
      style={[style.button, props.isDisabled && style.disabled]}
      disabled={props.isDisabled}
      onPress={() => props.onPress()}>
      <Text style={style.buttonTitle}>{props.title}</Text>
    </Pressable>
  );
};

Button.defaultprops = {
  isDisabled: false,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
