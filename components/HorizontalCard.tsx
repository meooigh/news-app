import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import SmallCard from './SmallCard'



const HorizontalCard = (props : any) => {
  return (
    <View>
      <Text style={{
        marginTop: 10,
        marginLeft: 20,
        color: 'black',
        fontSize: 19,
        fontWeight: '700'
      }}>{props.content}</Text>
      <FlatList 
        showsHorizontalScrollIndicator = {false}
        data = {props.data}
        renderItem={({item}) =>(
           
                <SmallCard
                  id = {item.id}
                  title= {item. title}
                  subTitle = {item.subTitle}
                  image = {item.image}
                />
          
        )}
        keyExtractor={(item : any) => item.id}
        horizontal={true}
      />
    </View>
  )
}

export default HorizontalCard