import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';


const Loader =()=>{

  return (
    <View style={styles.ImageContainer} >
       <Image style={styles.ImageLoader} source={require('./X-pod-01.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageLoader: {
    width: 300,
    height: 300,
  },
  ImageContainer:
  {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  }
});

export default Loader;
