import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import BlogCard from './BlogCard'
const {width} = Dimensions.get('window')
const FlatCard = (props: any) => {
  return (
    <BlogCard 
    title = {props.title}
    subTitle = {props.subTitle}
    image = {props.image}
    style={styles.container} 
    imageStyle={styles.imageStyle} 
    showBlog={styles.showBlog}
    showImage={styles.showImage}
    showDescription={styles.showDescription}
    />
  )
}
const styles = StyleSheet.create({
    container:{
        height: 200,
        width: width,
        paddingHorizontal: 10
    },
    showBlog:{
        flexDirection: 'row',
        height: 200,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        width:'100%'
    },
    showImage:{
        height: 200,
        width: '30%'
    },
    imageStyle:{
        height: 200,
        width: "100%",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    showDescription:{
        width: '70%'
    }
})
export default FlatCard