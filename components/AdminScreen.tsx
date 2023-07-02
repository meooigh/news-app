import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import ImagePicker from 'react-native-image-crop-picker';
import Provider, { context } from '../globalState/Provider';
import { setTitle, setContent, setImage } from '../globalState/action';


const AdminScreen = (props: any) => {
  const {state, dispatch} = React.useContext(context);
  const {title, content, image} = state


  const choose = () =>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      dispatch(setImage(image.path));
    });
  }

  const sendData = () =>{
      fetch(`http://10.0.2.2:3000/users/AdminScreen`,{
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          title: title,
          content: content,
          image: image,
          author: props.id
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
    <Provider>
    <View style={styles.container}>
      <View style={{
        alignItems: 'center'
      }}>
      <View style={styles.title}>
        <Text style={{
          fontSize: 20,
          fontWeight: '700',
          color: 'white',
          marginVertical: 5
        }}>Title</Text>
        <TextInput 
        onChangeText={text => dispatch(setTitle(text))}
        style={{
          height: 40,
          width: '100%',
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 10
        }} placeholder='Enter title'/>
      </View>
      <View style={styles.subTitle}>
        <Text style={{
          fontSize: 20,
          fontWeight: '700',
          color: 'white',
          marginVertical: 5
        }}>Content</Text>
        <TextInput
        onChangeText={text => dispatch(setContent(text))}
        style={{
          height: 350,
          width: '100%',
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 10
        }}
        textAlignVertical='top'
         placeholder='Enter content'/>
      </View>
      </View>
      <TouchableOpacity
      onPress={() => choose()}
      style={{
        marginTop: 10,
        marginLeft: 25,
        height: 30, 
        width: 100,
        backgroundColor: 'orange',
      }}>
        <Text>pick your image</Text>
      </TouchableOpacity>
      <View style={{
        marginTop: 20,
        height: 100,
        width: '100%',
        alignItems: 'center'
      }}>
        <TouchableOpacity 
        onPress={() => sendData()}
        style={{
          backgroundColor: 'dodgerblue',
          height: 50,
          width: 150,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowColor: 'black',
        }}>
          <Text style={{
            elevation: 10,
            fontSize: 17,
            color: 'white',
            fontWeight: '700'
          }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Provider>
  )
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#d3d4cb',
    },
    title:{
      height: 80,
      width: '90%',
      marginTop: 20
    },
    subTitle:{
      height: 390,
      width: '90%',
    }
})
export default AdminScreen