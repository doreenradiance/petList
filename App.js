import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PetsScreen from './PetsScreen';
import SignUpScreen from "./SignUpScreen";
import Pets from './components/Pets'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ["jenny","peace","terry"],
      age: "",
      location: "",
     
    }
  }

  render() {
    return (
      <View style={styles.container}>
      {/*  <SignUpScreen/> */}
      {/* <Pets /> */}
      <PetsScreen/>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App ;
