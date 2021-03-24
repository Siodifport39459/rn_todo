//import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import  RegistrationScreen  from './src/screens/RegistrationScreen'
import LocationScreen from './src/screens/LocationScreen.js'
import ImagePickerScreen from './src/screens/ImagePickerScreen'

const Stack = createStackNavigator();

 function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="GeoLocation" component={LocationScreen} />
            {/*<Stack.Screen name="ImagePicker" component={ImagePickerScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
      };
export default App;