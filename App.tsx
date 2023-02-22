/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

const App = () =>{
  function sayHello(){
    console.log("Merhaba! Butona tıkladın");
  }


  return(
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={{backgroundColor:"pink"}}>Hello, world!</Text>
      <Text >Hello, world!</Text>
      <Text style={styles.upper_view_container}>Hello, world!</Text>
      <Text style={styles.bottom_view_container}>Hello, world!</Text>
      <Button title='my first button' onPress={sayHello} color="lightcoral"/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper_view_container: {
    backgroundColor: "blue",
    borderRadius: 5,
    flex:1
  },
  bottom_view_container:{
    backgroundColor: "pink",
    borderRadius: 5,
    flex:1
  }
});



export default App;
