import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import globalStyle from '../../assets/style/globalStyle';
import style from './style';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);

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
      <View style={style.categoryHeader}>
        <Header title={'Select Category'} type={2} />
      </View>
      <View style={style.categories}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categories.categories}
          renderItem={({item}) => (
            <View style={style.categoryItem} key={item.categoryId}>
              <Tab
                tabId={item.categoryId}
                onPress={value => dispatch(updateSelectedCategoryId(value))}
                title={item.name}
                isInactive={item.categoryId !== categories.selectedCategoryId}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
