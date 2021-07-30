import React,{useState} from 'react'
import { View, Text,ScrollView,TextInput ,FlatList,ActivityIndicator} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MiniCard from './MiniCard'
import {useSelector,useDispatch} from 'react-redux'
import { useTheme} from '@react-navigation/native';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDfHET0-2TwADee_O00BkryVg_6xHMZbxs
const SearchScreen=({navigation})=>{
    const {colors} = useTheme()
  const myColor = colors.iconColor
    const [value , setValue] = useState('')
    //const [miniCardData, setMiniCard] = useState([])
    const dispatch = useDispatch()
  const miniCardData = useSelector(state=>{
        return state.cardData
    })
    const[loading,setLoading] = useState(false)
    const fetchData = () =>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${value}&type=video&key=AIzaSyDfHET0-2TwADee_O00BkryVg_6xHMZbxs`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
dispatch({
    type:"add",payload:data.items
})
            //setMiniCard(data.items)
        })
    }
    return(
        <View style={{flex:1}}>
            <View style={{padding:5,flexDirection:"row",justifyContent:"space-around",elevation:5,backgroundColor:colors.headerColor}}> 
            <Ionicons  name="arrow-back" size={32} color={myColor} style={{marginTop:7}} onPress={()=>navigation.goBack()}/>
            <TextInput
            style={{width:"70%",backgroundColor:"#e6e6e6"}}
         
            value={value}
                onChangeText={(text)=>setValue(text)}
            />
            <Ionicons   name="md-send" size={32} color={myColor} style={{marginTop:7}} onPress={()=>fetchData()}/>
            </View>
          {loading ? <ActivityIndicator style={{marginTop:"50%"}} size="large" color="red"/> : null} 
            <FlatList
            data={miniCardData}
            renderItem={({item})=>{
                return<MiniCard
                videoId={item.id.videoId}
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />
            }}
        keyExtractor={item=>item.id.videoId}
        
            />
        
        </View>
    )
}

export default SearchScreen