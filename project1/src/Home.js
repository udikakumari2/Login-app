import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen } from './Constants'
import { green } from './Constants'

const Home = (props) => {
  return (
    <Background>
       <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'white', fontSize: 64 }}>Let's start</Text>
      <Btn bgColor={green} textColor='white' btnLabel="SignIn" Press={() => props.navigation.navigate("Login")}/>
      <Btn bgColor='white' textColor={darkGreen} btnLabel="SignUp" Press={() => props.navigation.navigate("Signup")}/>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({})
/* import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';


const Home = (props) => {
  return (
    <Background>
      
    </Background>
  );
}

const styles = StyleSheet.create({})*/

export default Home; 