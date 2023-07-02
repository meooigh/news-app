import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({children, row} : any) => {
  return (
    <View style={{
      marginTop: 5
    }}>
      <Text numberOfLines={row} style={styles.titleStyle}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 20,
        fontWeight: '700',
        color: "black"
    }
})
export default Title