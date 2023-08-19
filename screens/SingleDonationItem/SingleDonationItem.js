// Package Import
import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux/';

// Styles Import
import globalStyle from '../../assets/style/globalStyle';
import style from './style';

// Components Import
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView
      style={[globalStyle.backgroundWhite, globalStyle.flex, globalStyle.text]}>
      <ScrollView showVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header
          type={1}
          title={donationItemInformation.name}
          color={'#022150'}
        />
        <Text style={style.description}>
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} onPress={() => console.log('Donate !!')} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
