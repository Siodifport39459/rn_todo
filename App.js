//import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import  RegistrationScreen  from './src/screens/RegistrationScreen'
import AboutScreen from './src/screens/About'
/*import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }*/

const Stack = createStackNavigator();

 function App () {

  /*const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)*/

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
      };
export default App;