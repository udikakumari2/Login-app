import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Background from './Background'
import { darkGreen } from './Constants'
import Field from './Field'
import Btn from './Btn'

export default function content(props) {
  return (
    <Background>
     <View style={{alignItems: 'right', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginVertical: 20,
            
          }}>
          You are log in
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 360,
           
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: darkGreen, fontWeight: 'bold'}}>
            Log Out
          </Text>
         
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
           <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Log Out" Press={() => {alert("Logged out");
          props.navigation.navigate('Home');}} />
          
          </View>
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({})