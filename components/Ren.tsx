import { View, Text } from 'react-native'
import React from 'react'
import { Rect } from 'react-native-svg'
import { context } from '../globalState/Provider'

const Ren = () => {
    const {state, dispatch} = React.useContext(context)
  return (
    <View style={{
        flex: 1
    }}>
      {state.dummyDataList?.map((item) =>(
        <View key={item.id}>
          <Text>{item.image}</Text>
        </View>
      ))}
    </View>
  )
}

export default Ren