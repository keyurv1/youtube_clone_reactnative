import React from 'react'
import { View, Text,ScrollView,FlatList } from 'react-native'
import Header  from '../component/Header'
import Card from './Card'
import {useSelector} from 'react-redux'

export default function Home({navigation}) {
  const CardData = useSelector(state=>{
    return state.cardData
  })
  return (
    <View style={{flex:1}}>
      <Header />
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
     
    </View>
  )
}
