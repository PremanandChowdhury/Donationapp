import React from 'react';
import {Image, Pressable, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import globalStyle from '../../assets/style/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.header}>
        <View>
          <Text style={style.headerIntroText}>Hello,</Text>
          <View style={style.username}>
            <Header title={user.firstName + ' ' + user.lastName[0] + '. 👋'} />
          </View>
        </View>
        <Image
          source={{uri: user.uri}}
          style={style.profileImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={style.search}>
        <Search />
      </View>
      <Pressable
        style={style.bannerContainer}
        onPress={() => console.log('Linking!!! ')}>
        <Image
          style={style.bannerImage}
          source={require('../../assets/images/highlighted_image.png')}
          resizeMode="contain"
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
