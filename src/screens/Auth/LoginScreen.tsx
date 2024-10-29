import { RouteProp } from '@react-navigation/native';

import React, { useState } from 'react'
import { StackNavigationProp } from '../../types';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

type LoginScreenProps = {
  navigation: StackNavigationProp;
};

const LoginScreen = ({navigation}:LoginScreenProps) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')


  const handleLogin =()=>{
  navigation.replace('Home')
  }

  return (
   <View style={{flex:1,justifyContent:'center',padding:20}}>
     <Text variant="headlineLarge" style={{marginBottom:20, textAlign:'center'}} >
      Login
     </Text>
     <TextInput
      label="Email"
      value={email}
      onChangeText={text=>setEmail(text)}
      style={{marginBottom:16}}
     />
     <TextInput
      label="Password"
      value={password}
      onChangeText={text=>setPassword(text)}
      secureTextEntry
      style={{marginBottom:16}}
     />
     <Button mode="contained" onPress={handleLogin}>
      Login
     </Button>
   </View>
  )
}

export default LoginScreen