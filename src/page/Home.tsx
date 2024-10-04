import React from 'react';

import {View, StyleSheet, Text, Button, SafeAreaView} from 'react-native';

import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../types';
type RootNavigationProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: RootNavigationProps) => {
  const onLoginPress = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>This is all about my life!</Text>
        <Button title="Login page" onPress={onLoginPress} />
      </View>
    </SafeAreaView>
  );
  // return (
  //   <View style={styles.container}>
  //     {/* <Text style={{color: 'black'}}>ok</Text> */}

  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  chart: {
    flex: 1,
  },
});

export default Home;
