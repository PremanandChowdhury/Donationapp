import React from 'react';
import {SafeAreaView, View} from 'react-native';

import globalStyle from '../../assets/style/globalStyle';

import Header from '../../components/Header/Header';
// import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A. 👋'} type={1} />
      <View>
        <Tab title={'Highlight'} />
        <Tab title={'Lifestyle'} isInactive={true} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
