import {Text, Pressable} from 'react-native';
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';

import style from './style';
import {horizontalScale} from '../../assets/style/scaling';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);

  const paddingHorizontal = 33;

  const tabWidth = {width: horizontalScale(paddingHorizontal * 2 + width)};

  return (
    <Pressable
      style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]}
      disabled={props.isInactive}
      onPress={() => props.onPress()}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.tabTitle, props.isInactive && style.inactiveTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};

Tab.propTypes = {
  isInactive: false,
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  isInactive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;
