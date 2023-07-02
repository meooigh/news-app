import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import VerticalCard from './VerticalCard'
import Provider, { context } from '../globalState/Provider'
import { setState } from '../globalState/action'
import HorizontalCard from './HorizontalCard'

const About = (props :any) => {
   const {state, dispatch} = React.useContext(context);
   const {set} = state;
  return (
    <Provider >
        <View style={styles.container}>
            <View style={styles.bar}>    
                <TouchableOpacity style={[styles.touchableOpacity,{
                    backgroundColor: set === 'local' ? '#1da3b8': '#2e2b2b'
                }]}
                    onPress={() => dispatch(setState('local'))}
                >
                    <Text style={[styles.text]}>Trong nước</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.touchableOpacity,{
                    backgroundColor: set === 'tg' ? '#1da3b8': '#2e2b2b'
                }]}
                    onPress={() => dispatch(setState('tg'))}>
                    <Text style={styles.text}>Thế giới</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.touchableOpacity,{
                        backgroundColor: set === 'kd' ? '#1da3b8': '#2e2b2b'
                    }]}
                        onPress={() => dispatch(setState('kd'))}
                >
                    <Text style={styles.text}>Kinh doanh</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={[styles.touchableOpacity,{
                    backgroundColor: set === 'kh' ? '#1da3b8': '#2e2b2b'
                }]}
                    onPress={() => dispatch(setState('kh'))}>
                    <Text style={styles.text}>Khoa học</Text>
                </TouchableOpacity>
            </View>    
            {set === 'local' ? <VerticalCard data= {props.data} />: set ==='tg' ? <HorizontalCard data = {props.data}/> : null }
        </View>
        </Provider>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    bar:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height: 30,
        backgroundColor: '#2e2b2b'
    },
    touchableOpacity:{
        height: 30,
        width: 90,
        backgroundColor: '#1da3b8',
        borderRadius: 15,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color: 'white',
        fontSize: 16,
        fontWeight: '800'
    }
})
export default About