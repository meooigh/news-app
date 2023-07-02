import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStack } from '../App';

type props = NativeStackScreenProps<RootStack, 'SignIn'>
const SignIn = ({navigation}: props) => {
    const [visible, setVisible] = React.useState<boolean>(false);
    {/*state to save detail of user */}
    const [choice, setChoice] = React.useState<string>('choose your gender');
    const [name, setName] = React.useState<string>('');
    const [date, setDate] = React.useState<string>();
    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');


    const sendData = () =>{
        fetch(`http://10.0.2.2:3000/users/SignIn`,{
            method: 'POST',
            headers:{
              'Accept': 'application/json',
              'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
              name: name,
              age: date,
              gender: choice,
              username: username,
              password: password
            })
        }).then((respone) => respone.json())
        .then(res =>{
            if(res.success)
            {
                console.log(res.message)
            }
        })
    }
    
    return (
    <View style={styles.container}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around'
        }}>
            <View style={{
                height: 40,
                width: '45%',
                borderWidth: 1,
                backgroundColor:'white'
            }}>
                <TextInput placeholder='Ho va ten' onChangeText={text => setName(text)} />
            </View>
            <View style={{
                height: 40,
                width: '45%',
                borderWidth: 1,
                backgroundColor:'white'
            }}>
                <TextInput placeholder='mm/dd/yy' onChangeText={text => setDate(text)} />
            </View>
        </View>

        <TouchableOpacity 
        onPress={() => setVisible(true)}
        style={{
            height: 35,
            width: '40%',
            backgroundColor: 'white',
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ff7f50',
            marginTop: 20,
            marginLeft: 10
        }}>
            <Text>{choice}</Text>
        </TouchableOpacity>
        {visible ? 
        (<View 
            style={styles.textContainer}
        >
            <TouchableOpacity
                onPress={() =>{
                    setChoice('Male');
                    setVisible(false)
                }}
            >
                <Text>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>{
                    setChoice('Female');
                    setVisible(false)
                }}
            >
                <Text>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() =>{
                    setChoice('Other');
                    setVisible(false)
                }}
            >
                <Text>Other</Text>
            </TouchableOpacity>
        </View>) : null}
        <View
            style={{
                alignItems:'center'
            }}
        >
            <View
                style={{
                    height: 40,
                    width: '90%',
                    marginTop: 20
                }}
            >
                <TextInput placeholder='Username' 
                onChangeText={text => setUsername(text)}
                style={{
                    height: 40,
                    width: '100%',
                    borderWidth: 1
                }}/>
            </View>
            <View
                style={{
                    height: 40,
                    width: '90%',
                    marginTop: 20
                }}
            >
                <TextInput placeholder='password' 
                onChangeText={text => setPassword(text)}
                style={{
                    height: 40,
                    width: '100%',
                    borderWidth: 1
                }}/>
            </View>
        </View>
        <View style={{
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'center'
        }}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('LoginScreen')}
            style={{
               height: 50,
               width: 150,
               backgroundColor:'#3bdff5',
               justifyContent:'center',
               alignItems:'center',
               marginHorizontal: 10
            }}>
                <Text>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {
                sendData();
                navigation.navigate('LoginScreen')
            }}
            style={{
               height: 50,
               width: 150,
               backgroundColor:'#3bdff5',
               justifyContent:'center',
               alignItems:'center',
               marginHorizontal: 10
            }}>
                <Text>Confirm</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    textContainer:{
        marginLeft: 70
    }
})
export default SignIn