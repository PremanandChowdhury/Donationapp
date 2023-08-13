import React, {useEffect, useState} from 'react';
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
  const donations = useSelector(state => state.donations);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const categoryPageSize = 4;

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize),
    );
    setCategoryPage(prev => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  console.log('Donations ', donations);

  // Pagination Function
  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex >= items.length) {
      return [];
    }

    return items.slice(startIndex, endIndex);
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.header}>
        <View>
          <Text style={style.headerIntroText}>Hello,</Text>
          <View style={style.username}>
            <Header
              title={user.firstName + ' ' + user.lastName[0] + '. 👋'}
              color={'#000'}
            />
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
        <Header title={'Select Category'} type={2} color={'#000'} />
      </View>
      <View style={style.categories}>
        <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingCategories) {
              return;
            }
            console.log(
              `USER REACHED END OF THE LIST, FETCHING MORE DATA FOR PAGE NO ${categoryPage}`,
            );
            setIsLoadingCategories(true);
            let newData = pagination(
              categories.categories,
              categoryPage,
              categoryPageSize,
            );
            if (newData.length > 0) {
              setCategoryList(prevState => [...prevState, ...newData]);
              setCategoryPage(prevState => prevState + 1);
            }
            setIsLoadingCategories(false);
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categoryList}
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
