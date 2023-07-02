import { View, Text, StyleSheet, TextInput, Animated } from 'react-native'
import React from 'react'
import SearchList from './SearchList';

const SearchBar = (props : any) => {
  const [search, setSearch] = React.useState<string>(''); 
  const data = props.data.filter((item: any) => item.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <View>
        <Animated.View style={[styles.container, {
        opacity: props.opacity
      }]}>
          <TextInput 
          onChangeText={text => setSearch(text)} 
          style={styles.bar} 
          placeholder='Search something '/>
      </Animated.View>
      <View style={{}}>
        {search.length > 0 ? <SearchList data={data}/> : null}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    bar:{
        height: 50,
        width: '100%',
        elevation: 20,
        shadowColor: 'black',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingLeft: 10
    }
})
export default SearchBar