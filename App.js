import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/homescreen'
import LoginScreen from './src/views/loginscreen';
import RegisterScreen from './src/views/registerscreen';
import RegisterScreen2 from './src/views/registerscreen2';
import 'react-native-gesture-handler';
import CongratsScreen from './src/views/congratsscreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={HomeScreen} />
        <Stack.Screen name="Connexion" component={LoginScreen} />
        <Stack.Screen name="Inscription" component={RegisterScreen} />
        <Stack.Screen name="InscriptionSuite" component={RegisterScreen2} />
        <Stack.Screen name="congrats" component={CongratsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
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
