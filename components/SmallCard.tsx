import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import BlogCard from './BlogCard'
import { dataType } from './Home'
const {width} = Dimensions.get('window')

const SmallCard = (props: any) => {
  return (
    <View>
        <BlogCard 
        title = {props.title}
        subTitle = {props.subTitle}
        image = {props.image}
        style={styles.container} 
        imageStyle={styles.imageStyle} 
        showBlog={styles.showBlog}
        showImage={styles.showImage}
        
        />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height:200,
        marginLeft: 15,
        width: width/2
    },
    showBlog:{
        height: 200,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        width:'97%'
    },
    showImage:{
        height: 100
    },
    imageStyle:{
        height: 100,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    }
})
export default SmallCard