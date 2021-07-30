import React from 'react'
import { View, Text,StyleSheet,Image,Dimensions,TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation,useTheme } from '@react-navigation/native';

const Card = (props) =>{
    const navigation = useNavigation();
    const {colors} = useTheme()
    const textcolor = colors.iconColor
return(
    <TouchableOpacity
    onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}
    >
    <View style={{elevation:4,margin:10,marginBottom:5}} 
    >
        <Image 
        source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`
          }}
        style={{
            width:"100%",
            height:200
        }}

        />
        <View style={{flexDirection:"row",margin:5}}>
        <MaterialCommunityIcons  name="account-circle" size={40} color="#212121" />
            <View style={{marginLeft:10}}>
            <Text style={{fontSize:20,width:Dimensions.get("screen").width-80,color:textcolor}}
                ellipsizeMode="tail"
                numberOfLines={1}
            >{props.title}</Text>
            <Text style={{color:textcolor}}>{props.channel}</Text>    
            </View>           
            
        </View>
    </View>
    </TouchableOpacity>
)
}

export default Card