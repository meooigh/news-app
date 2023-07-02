import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import BlogCard from './BlogCard'
const {height,width} = Dimensions.get('window')
const SearchList = (props : any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) =>(
            <BlogCard
            title = {item.title}
            subTitle = {item.subTitle}
            image = {item.image}
            style={styles.blogcontainer} 
            imageStyle={styles.imageStyle} 
            showBlog={styles.showBlog}
            showImage={styles.showImage}
            showDescription={styles.showDescription}
            />
        )}
        keyExtractor={(item : any) => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height: height/2,
        width: width
    },
    blogcontainer:{
        height: 100,
        width: width,
        paddingHorizontal: 10
    },
    showBlog:{
        flexDirection: 'row',
        height: 100,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        width:'100%'
    },
    showImage:{
        height: 100,
        width: '30%'
    },
    imageStyle:{
        height: 100,
        width: "100%",
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0
    },
    showDescription:{
        width: '70%'
    }
})
export default SearchList