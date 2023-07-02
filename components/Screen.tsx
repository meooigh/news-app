import React from 'react';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home, { dataType } from './Home';
import About from './About';
import PodCast from './PodCast';
import Favorite from './Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faHouse, faBookOpen, faHeadphones, faStar} from '@fortawesome/free-solid-svg-icons'
import Provider, { context } from '../globalState/Provider';
import { RootStack } from '../App';
import AdminScreen from './AdminScreen';
import Ren from './Ren';
import SearchList from './SearchList';
import { useIsFocused } from '@react-navigation/native';
import { setPosts } from '../globalState/action';

export type RootTabParams = {
  Home: undefined,
  About: undefined,
  PodCast: undefined,
  SearchList: undefined,
  AdminScreen: undefined
}

type props = BottomTabScreenProps<RootStack, 'Screen'>
const tab = createBottomTabNavigator<RootTabParams>();
const Screen= ({route} : props) =>{
  const {state, dispatch} = React.useContext(context)
  const {dummyDataList} = state
  const isFocused = useIsFocused();

  React.useEffect(() =>{
    fetch('http://10.0.2.2:3000/users/getAllPosts',{
      method: 'GET',
      headers:{
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      },
    }).then(respone => respone.json())
      .then(responeData => {
        const data: dataType[] = [...responeData.data.map((post:any) => {
          return{
            id: post.post_id,
            title: post.title,
            subTitle: post.content,
            image: post.image
          }
        })]
        dispatch(setPosts(data))
      }
        )
  }, [isFocused])
  
  return (
    <Provider>
      <tab.Navigator
        screenOptions={{
          headerShown: false
        }} 
        initialRouteName='Home'>
        <tab.Screen
          name = 'Home'
          options={{
            tabBarLabel: 'Trang chu',
            tabBarIcon: ({color, size}) =>(
              <FontAwesomeIcon icon={faHouse} size={size} color={color}/>
            )
          }}
        >
          {(props) => <Home dummyDataList={dummyDataList} {...props}/>}
        </tab.Screen>

        <tab.Screen 
        name='About'
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) =>(
            <FontAwesomeIcon icon={faBookOpen} size={size} color={color}/>
          )
          
        }}>
          {(props) => <About data={dummyDataList} {...props}/>} 
        </tab.Screen>
        <tab.Screen name='PodCast' 
        options={{
          tabBarLabel: 'PodCast',
          tabBarIcon: ({color, size}) =>(
            <FontAwesomeIcon icon={faHeadphones} size={size} color={color}/>
          )
          
        }}
        >
          {(props) => <PodCast data= {dummyDataList} {...props}/>}
        </tab.Screen>
        <tab.Screen name='SearchList' 
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, size}) =>(
            <FontAwesomeIcon icon={faStar} size={size}
              color={color}
            />
          )
        }}>
          {(props) => <SearchList data={dummyDataList} {...props}/>}
        </tab.Screen>
        <tab.Screen name='AdminScreen' 
        options={{
          tabBarLabel: 'AdminScreen',
          tabBarIcon: ({color, size}) =>(
            <FontAwesomeIcon icon={faStar} size={size}
              color={color}
            />
          )
        }}>
          {(props) =><AdminScreen 
            id = {route.params.id}
            username = {route.params.username}
            password= {route.params.password}
          {...props}/>}
          </tab.Screen>
      </tab.Navigator>
  
    </Provider>
  );
}

export default Screen;