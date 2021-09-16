import React,{useState,useEffect} from 'react';
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
import Loader from './Components/Loader/Loader'
import Auth from './Components/Auth/Auth'

const App =()=>{
  
  const [state, setstate] = useState(true)
  
  useEffect(() => {
   
    setTimeout(() => {  
      
      setstate(!state)
  
    }, 1000);
  
  }, [])


  
  return (
    <View>
     {state ? <Loader  />   : <Auth /> }
     
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
