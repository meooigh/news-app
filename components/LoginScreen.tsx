import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import { RootStack } from '../App';

type props = NativeStackScreenProps<RootStack, 'LoginScreen'>;


const LoginScreen = ({navigation} : props) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  
  const triggerLogIn = () =>{
    fetch(`http://10.0.2.2:3000/users/${username}/${password}`,{
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
          username: username,
          password: password
        })
    })
    .then((respone) => respone.json())
    .then((res)=>{
      if(res.success == true)
      {
        navigation.navigate('Screen',{
          id: parseInt(res.data.account_id),
          username: res.data.username,
          password: res.data.password
        })
      }
    }).catch((error) =>{
      console.log(error)
    })
}

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput style={styles.textIn} placeholder='Username' onChangeText={text => setUsername(text)}/>
        <TextInput style={styles.textIn} placeholder='password' onChangeText={text => setPassword(text)}/>
      </View>
      <View style={styles.loginButContainer}>
        <TouchableOpacity onPress={() =>{
          triggerLogIn();
        }} style={styles.loginBut}>
            <Text style={styles.text}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBut}>
            <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  textContainer:{
    height: 200,
    width:'90%',
  },
  textIn:{
    backgroundColor: 'white',
    height: 55,
    marginTop: 20
  },
  loginButContainer:{
    flexDirection:'row',
  },
  loginBut:{
    height: 50,
    width: 150,
    backgroundColor:'#3bdff5',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal: 10
  },
  text:{
    fontSize: 16,
    color:'white',
    fontWeight: '700'
  }
})
export default LoginScreen