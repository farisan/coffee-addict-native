import {
  StyleSheet,
  View,
  ToastAndroid,
  Image,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import icon_girl from '../assets/register/icon-register.png';
import ButtonOpacity from '../components/ButtonOpacity';
import axios from 'axios';
import {URL} from '@env';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const valueEmail = e => {
    setEmail(e), console.log(e);
  };
  const valuePassword = e => {
    setPassword(e), console.log(e);
  };
  const valuePhone = e => {
    setPhone(e), console.log(e);
  };

  const handleRegister = () => {
    setLoading(true);
    if(!email || !password || !phone) return (
      setLoading(false),
      ToastAndroid.showWithGravity(
      "input must be fulfilled",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    ))
    return axios
      .post(`${URL}/users`, {
        email: email,
        passwords: password,
        phone_number: phone,
      })
      .then(() => {
        ToastAndroid.showWithGravity(
          'Register Success',
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        ),
          navigation.push('Login');
        setLoading(false);
      })
      .catch(err => {
        ToastAndroid.showWithGravity(
          err.response.data.msg,
          ToastAndroid.LONG,
          ToastAndroid.TOP,
        );
        setLoading(false);
      });
  };

  return (
    <ScrollView>
      <View style={styles.content_all}>
        <Image source={icon_girl} style={styles.image} />
        {/* <Button onPress={() => navigation.navigate('Splash')} title="Splash" /> */}
        <TextInput
          style={styles.input}
          placeholder="Enter your email adress"
          keyboardType="text"
          onChangeText={valueEmail}
          placeholderTextColor="#9F9F9F"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          keyboardType="password"
          onChangeText={valuePassword}
          placeholderTextColor="#9F9F9F"
        />
        <TextInput
          style={styles.input1}
          placeholder="Enter your phone number"
          keyboardType="numeric"
          onChangeText={valuePhone}
          placeholderTextColor="#9F9F9F"
        />
        {loading ? (
          <View style={{marginHorizontal: 100, marginVertical: 32}}>
            <ActivityIndicator
              style={styles.loading_style}
              size="large"
              color="#0000ff"
            />
          </View>
        ) : (
          <ButtonOpacity
            color={'#6a4029'}
            text="Create New Account"
            radius={20}
            colorText="white"
            height={60}
            width={`90%`}
            marginBottom={20}
            marginTop={20}
            // onPress={postRegister}
            onPressHandler={{
              onPress: handleRegister,
              // onPressIn: () => console.log('Pressed In'),
              // onPressOut: () => console.log('Pressed Out'),
              // onLongPress: () => navigation.popToTop(),
            }}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  content_all: {
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingTop: 50,
  },
  image: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  input1: {
    borderBottomWidth: 1,
    borderColor: `#9F9F9F`,
    borderWidth: 0,
    fontFamily: 'Poppins',
    fontSize: 14,
    height: 40,
    margin: 12,
    outlineWidth: 4,
    padding: 10,
    width: `90%`,
    color: 'black',
    marginBottom: 90,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: `#9F9F9F`,
    borderWidth: 0,
    fontFamily: 'Poppins',
    fontSize: 14,
    height: 40,
    margin: 12,
    outlineWidth: 4,
    padding: 10,
    width: `90%`,
    color: 'black',
  },
});
