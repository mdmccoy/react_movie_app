import React, {Component} from 'react';

import {StyleSheet,View,TouchableOpacity, Image, Text} from 'react-native';

import LinearGradient from 'react-native-linear-gradient'

import {ORANGE,PINK,WHITE} from '../../style'

import Services from '../services'

export default class UpcomingListItem extends Component{

  render(){
    const {backdrop_path, title} = this.props.data;
    return(
      <TouchableOpacity style={styles.container}>
        <View style={styles.wrapper}>
          <Image style={styles.image} source={{uri:`${Services.imageUrl}w500${backdrop_path}`}}/>
          <LinearGradient colors={[ORANGE,PINK]} style={styles.overlay}/>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.imgshadow}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      width: 320,
      height: 180,
      marginRight: 20
    },
    image:{
      backgroundColor: 'rgb(230,230,230)',
      width: 320,
      height: 160
    },
    imgshadow:{
      top: 16,
      left: 16,
      backgroundColor: '#000',
      opacity: 0.5,
      height:  144,
      width: 293,
      zIndex: 0,
      position: 'absolute',
      // shadowOffset:{
      //   width:0,
      //   height:4
      // },
      // shadowOpacity: 1,
      // shadowRadius: 9
    },
    wrapper:{
      borderRadius:6,
      zIndex: 2,
      overflow:'hidden',
      width:320,
      height:160,
      zIndex: 1
    },
    overlay:{
      position: 'absolute',
      top: 0,
      left: 0,
      width: 320,
      height: 160,
      opacity: 0.3,
      zIndex: 2,
      elevation: 1
    },
    title:{
      fontSize: 20,
      color: WHITE,
      position: 'absolute',
      bottom: 20,
      right: 20,
      zIndex: 3
    }
})
