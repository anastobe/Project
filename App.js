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


const App =()=>{

  return (
    <View  style={styles.ImageContainer} >
      <Image style={styles.ImageLoader} source={require('./assets/X-pod-01.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  ImageLoader: {
    width: '100%',
    height: 280,
    
  }
});

export default App;
