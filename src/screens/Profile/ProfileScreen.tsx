import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper';

const ProfileScreen = () => {
  return (
   <View style={{flex:1,justifyContent:'center',padding:20}}>
     <Text variant="headlineLarge" style={{marginBottom:20, textAlign:'center'}}>
      Profile
     </Text>  
   </View>
  )
}

export default ProfileScreen