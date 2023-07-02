import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'


const {width} = Dimensions.get('window')

const BlogCard = (props: any) => {
  return (
    <TouchableOpacity 
      testID='button'
      onPress={() => console.log('pressed')}
    style={[styles.container, props.style]}>
      <View style={[styles.showBlog, props.showBlog]}>
        <View style={props.showImage}>
            <Image testID='image' style={[styles.Image, props.imageStyle]} source={
              {
                uri: props.image
              }
            }/>
        </View>
        <View style={[styles.showDescription, props.showDescription]}>
            <Title testID="title" row={props.row}>{props.title}</Title>
            <SubTitle testID="subTitle">{props.subTitle}</SubTitle>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        height: 300,
        width: width,
        alignItems: 'center'
    },
    showBlog:{
        backgroundColor: 'white',
        height: 300,
        width: '90%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 20,
        shadowColor: 'black'
    },
    Image:{
        height: 180,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
    },
    showDescription:{
        alignItems: 'center',
        width:'100%'
    }
})
export default BlogCard