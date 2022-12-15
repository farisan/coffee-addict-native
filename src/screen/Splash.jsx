import {Text, View, Image, ScrollView} from 'react-native';
import React, { useEffect } from 'react';
import image from '../assets/splash/get_started.png';
import styles from '../style/Splash';
import ButtonOpacity from '../components/ButtonOpacity';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {

  const handleSplah = async () => {
    const getToken = await AsyncStorage.getItem('token')
    if(getToken === null) {
      navigation.push("Get_Start")
    }else{
      navigation.push("Home")
    }
  }

  useEffect(() => {
    setTimeout(() => {
      handleSplah()
    }, 3000);
  }, [])


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title_center}>Coffee for Everyone</Text>
        <Image source={image} style={styles.image} />
        <ButtonOpacity
          color={'#6a4029'}
          text="Get Started"
          radius={20}
          colorText="white"
          height={70}
          width={`90%`}
          marginBottom={10}
          onPressHandler={{
            onPress: () => navigation.navigate('Get_Start'),
            onPressIn: () => console.log('Pressed In'),
            onPressOut: () => console.log('Pressed Out'),
            onLongPress: () => navigation.popToTop(),
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Splash;
