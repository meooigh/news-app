import { View, Text, StyleSheet, FlatList, TouchableOpacity, VirtualizedList, Image } from 'react-native'
import React from 'react'
import FlatCard from './FlatCard'

const VerticalCard = (props: any) => {
  return (
    <View style={styles.container}>
      <FlatList
          showsVerticalScrollIndicator={false}
          data={props.data}
          renderItem={({item}) => (
            <FlatCard 
              id = {item.id}
              title = {item.title}
              subTitle = {item.subTitle}
              image = {item.image}
            />
          )
          }
          keyExtractor={(item: any) => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  },

})
export default VerticalCard;