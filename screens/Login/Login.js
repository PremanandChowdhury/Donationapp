// Package Import
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';

// Styles Import
import globalStyle from '../../assets/style/globalStyle';
import style from './style';

// Component Import
import Input from '../../components/Input/Input';
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import {Routes} from "../../navigation/Routes";

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('email', email);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={[style.container, globalStyle.flex]}>
          <View style={globalStyle.mb_24}>
            <Header type={1} title={'Welcome Back'}/>
          </View>
          <View style={globalStyle.mb_24}>
            <Input
              keyboardType={'email-address'}
              label={'Email'}
              placeholder={'Enter your email.. '}
              secureTextEntry={false}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={globalStyle.mb_24}>
            <Input
              label={'Password'}
              placeholder={'******'}
              secureTextEntry={true}
              onChangeText={value => setPassword(value)}
            />
          </View>
          <View style={globalStyle.mb_24}>
              <Button title={'Login'} />
          </View>
          <Pressable style={style.registrationBtn} onPress={()=> navigation.navigate(Routes.Registration)}>
              <Header color={'#156CF7'} type={3} title={"Don't have an account ?"}/>
          </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
