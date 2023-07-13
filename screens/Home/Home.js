import React from 'react';
import {SafeAreaView} from 'react-native';

import globalStyle from '../../assets/style/globalStyle';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A. 👋'} type={1} />
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('I am pressed!!');
        }}
      />
      <Button title={'Donate'} isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
