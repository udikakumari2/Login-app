import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Background from './Background'


export default function splash(props) {
  return (
    <Background>
    <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
   <Text style={{ color: 'white', fontSize: 64 }}>Login App</Text>
   <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
    <Text style={{ color: 'white', fontSize: 30 ,padding:45,}}>>> </Text></TouchableOpacity>
   </View>
 </Background>
  )
}

const styles = StyleSheet.create({})