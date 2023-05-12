import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getData } from '../context/Data';

export const Home = ({navigation}) => {

  useEffect(() => {
    function handleStatusCHange(data) {
      if (!data) {
        navigation.navigate('Cadastro')
        return true
      }
      if (!data.login) {
        console.log(data)
        navigation.navigate('Login')
        return true
      }
    }
    getData(handleStatusCHange, 'user')
  })

  const onPress = () => {
    navigation.navigate('Logoff')
  }


    return (
    <View style={styles.container}>
        <Text> Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  