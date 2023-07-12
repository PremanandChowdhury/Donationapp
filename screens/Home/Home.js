import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import globalStyle from '../../assets/style/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View>
        <Text>Home here</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
