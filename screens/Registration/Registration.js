// Package Import
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';

// Styles Import
import globalStyle from '../../assets/style/globalStyle';
import style from './style';

// Component Import
import Input from '../../components/Input/Input';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';

// External Import
import {createUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showVerticalScrollIndicator={false}
        contentContainerStyle={[style.container, globalStyle.flex]}>
        <View style={globalStyle.mb_24}>
          <Header type={1} title={'Hello and Welcome!'} />
        </View>
        <View style={globalStyle.mb_24}>
          <Input
            label={'First & Last Name'}
            placeholder={'Enter your full name'}
            onChangeText={value => setFullName(value)}
          />
        </View>
        <View style={globalStyle.mb_24}>
          <Input
            label={'Email'}
            placeholder={'Enter your email'}
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
        {error.length > 0 && (
          <Text style={[style.error, style.toastStyle]}>{error}</Text>
        )}
        {success.length > 0 && (
          <Text style={[style.success, style.toastStyle]}>{success}</Text>
        )}
        <View style={globalStyle.mb_24}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length < 5 || password.length < 8
            }
            title={'Register'}
            onPress={async () => {
              let user = await createUser(fullName, email, password);
              console.log('Prem: User ', user)
              
              if (user.error) {
                setFullName('');
                setEmail('');
                setPassword('');
                setError(user.message);
              } else {
                setError('');
                setSuccess('You have successfully registered 🥳');
                setTimeout(() => navigation.goBack(), 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
