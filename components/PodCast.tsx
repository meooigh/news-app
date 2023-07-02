import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  FlatList, 
  Animated, 
  Image, 
  TouchableOpacity,
  Easing,
  PanResponder
 } from 'react-native'
import React from 'react'
import SubTitle from './SubTitle'
import Title from './Title'
import { context } from '../globalState/Provider'
const { height, width } = Dimensions.get('window')

const itemHeight = height/1.5
// itemHeight = height/ (previewCount + 1/4 firtsItem + 1/4 lastItem)


const PodCast = (props : any) => {
  const animatedValuePodCard = React.useRef(new Animated.Value(200)).current;
  
   // animation like spotify's podCast but ...
  const panResponder = React.useRef(PanResponder.create({
    onPanResponderMove: (event, gesture) =>{

    }
  }),
  ).current;

  React.useEffect(() =>{
      Animated.timing(animatedValuePodCard, {
        toValue: height/3,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: false
    }).start();
  },[animatedValuePodCard])

  // custom paging in flatlist
  const snapToOffset = props.data.map((item: any, index: any) =>{
    return (index * itemHeight)
  })

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
       <FlatList 
        data={props.data}
        renderItem={({item}) =>(
          <TouchableOpacity style={styles.showBlog}>
            <View style={{
              justifyContent: 'center',
              alignItems:'center',
              height: height/3,
              width: width
            }}>
              <Animated.Image style={[styles.image,{
                height: animatedValuePodCard
              }]} source={{
                uri: item.image
              }}/>
            </View>
            <View style={styles.showDescription}>
                <Title>{item.title}</Title>
                <SubTitle>{item.subTitle}</SubTitle>
            </View>
        </TouchableOpacity>
        )}
        keyExtractor={(item : any) => item.id}
        showsVerticalScrollIndicator = {false}
        snapToOffsets={snapToOffset}
        pagingEnabled
       />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d3c3",
    alignItems:'center',
  },
  showBlog:{
    marginTop: 20,
    height: itemHeight -20,
    width: width - 30,
    backgroundColor:"white",
    justifyContent: 'center',
    borderRadius: 30
  },
  image:{
    height: 200,
    width: 200,
    borderRadius: 20
  },
  showDescription:{
      alignItems: 'center',
      width:'100%',
      marginTop: 30
  }
})
export default PodCast