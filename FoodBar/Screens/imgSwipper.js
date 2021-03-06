import React, { Component } from 'react'
import {TouchableOpacity, AppRegistry,Image, StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen' 
import Swiper from 'react-native-swiper'
 
const styles = StyleSheet.create({
  wrapper: { 
  
   },

buttonWrapperStyle : {
    backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'},

  slide1: {
    flex:1,
    justifyContent: 'center',
    flexDirection:"row",
    alignItems: 'center',
   
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row"
  },
})
 
export default class SwiperComponent extends Component {
  render(props) {
    return (
        <View style = {{
          flex:2            
        }}>
      <Swiper    >
        <View style={styles.slide1}>
      <TouchableOpacity > 
       <Image style = {{ width:412, height:312}} source={require('../Assets/bf.jpg')}/>
     </TouchableOpacity>  
        
        </View>
        <View style={styles.slide2}>
        <TouchableOpacity > 
       <Image style = {{ width:400, height:300}} source={require('../Assets/bf.jpg')}/>
     </TouchableOpacity>  


      
        </View>
        <View style={styles.slide3}>
        <TouchableOpacity > 
       <Image style = {{ width:400, height:300}} source={require('../Assets/bf.jpg')}/>
     </TouchableOpacity>  


      
        </View>
      </Swiper>
      </View>
    )
  }
}