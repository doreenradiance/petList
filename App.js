import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import petsScreen from './petScreen';
import SignUpScreen from "./SignUpScreen"

export default function App() {
  return (
    
      <SignUpScreen/>
    //  <petsScreen/>
      // <Pets/> 
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-around",
  },
});
