import { View, Text, StyleSheet, ScrollView, Animated, Image, Dimensions } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import MainCard from './MainCard'
import HorizontalCard from './HorizontalCard'
import Provider, { context } from '../globalState/Provider'
export type dataType = {
  id: number,
  title: string,
  subTitle : string,
  image: string,
}
const {width} = Dimensions.get('window')
const Home = (props : any) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
 
  const opacity = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1]
  })
  return (
    <Provider>
    <View style={styles.container}>
      <View style={{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: width,
        height: 70
      }}>
        <Animated.View style={[styles.imageContainer, {
          opacity: opacity
        }]}>
          <Image
            style={styles.image}
            source={{
              uri: "https://howtodrawforkids.com/wp-content/uploads/2022/10/8-how-to-draw-a-realistic-frog.jpg"
          }}
          />
        </Animated.View>
        <View style={{
          height: 70,
          width: "60%"
        }}>
          <SearchBar data={props.dummyDataList} opacity={opacity} />
        </View>
      </View>
      <ScrollView
        onScroll={(e) => {
          animatedValue.setValue(e.nativeEvent.contentOffset.y)
        }}
        scrollEventThrottle={16}
      >
        <MainCard />
        <HorizontalCard data = {props.dummyDataList} content='You may be interested' />
        <HorizontalCard data= {props.dummyDataList} content='Breaking News' />
      </ScrollView>
    </View>
    </Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d3c3"
  },
  imageContainer: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 30
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 30
  }
})
export default Home