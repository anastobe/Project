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
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Auth =()=>{

    const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Auth" component={Auth} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Auth;
