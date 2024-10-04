import React from 'react';

import {View, StyleSheet, Text, Dimensions} from 'react-native';

import {LineChart} from 'react-native-chart-kit';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <Text>This is all about my life!</Text>
    </View>
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
