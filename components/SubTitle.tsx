import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SubTitle = ({children}: any) => {
  return (
    <View style={{
        marginTop: 5
    }}>
      <Text style={styles.subtext}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    subtext:{
        color: 'black',
        fontSize: 16
    }
})
export default SubTitle