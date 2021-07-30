import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation ,useTheme} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {useDispatch,useSelector} from 'react-redux'

export default function Header() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const currentTheme = useSelector(state=>{
    return state.myDarkMode
  })
  const {colors} = useTheme()
  const myColor = colors.iconColor
  return (
    <View style={{height:45,
    backgroundColor:colors.headerColor,
    flexDirection:"row",
    justifyContent:"space-between",
    elevation:5
    }}>
      <View style={{
        flexDirection:"row",
        margin:5,
        
      }}>
      <AntDesign style={{marginLeft:15}} name="youtube" size={35} color="red" />
      <Text style={{
        fontSize:20,
        fontStyle:"normal",
        marginLeft:5,
        marginTop:3,
        fontWeight:"bold",
        color:myColor
        }} >YouTube</Text>
      </View>
      <View style={{
        flexDirection:"row",
        justifyContent:"space-around",
        width:150,
        marginTop:7
        }}>
      <FontAwesome  name="video-camera" size={30} color={myColor} />
      <FontAwesome  name="search" size={30} color={myColor} onPress={()=>navigation.navigate("search")} />
      <MaterialCommunityIcons  name="theme-light-dark" size={30} color={myColor} onPress={()=>dispatch({type:"change_theme",payload:!currentTheme})} />

      </View>
    </View>
  )
}
