import React from 'react'
import { View, Text,FlatList,ScrollView } from 'react-native'
import Header  from '../component/Header'
import Card from './Card'
import {useSelector} from 'react-redux'


const LittelCard=({name})=>{
    
    return(
        <View style={{backgroundColor:"red",width:"40%",borderRadius:4,marginTop:10,padding:8}}>
            <Text style={{textAlign:"center",color:"white",fontSize:22}} >
                {name}
            </Text>
            </View>
    )
}

const Explore = () =>{
    const CardData = useSelector(state=>{
        return state.cardData
    })
return(
    <View style={{flex:1}}>
        <Header/>
        <ScrollView>

        <View style={{
           flexDirection:"row",
           flexWrap:"wrap",
           justifyContent:"space-around"
       }}>
       <LittelCard name="Gamming" />
       <LittelCard name="Trending"/>
       <LittelCard name="Songs"/>
       <LittelCard name="News"/>
       <LittelCard name="Movies"/>
       <LittelCard name="Feshion"/>
       </View>

       <Text style={{margin:8,fontSize:22,borderBottomWidth:1}}>Trending Videos</Text>
       <FlatList 
    data={CardData}
    renderItem={({item})=>{
      return <Card
      videoId={item.id.videoId}
      title={item.snippet.title}
      channel={item.snippet.channelTitle}
      />
     
    }}
    keyExtractor={item=>item.id.videoId}
    />

        </ScrollView>
       
    </View>
)
}

export default Explore