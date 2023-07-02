import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Favorite = () => {
  return (
    <View style={styles.container}>
      <Text>Favorite</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default Favorite