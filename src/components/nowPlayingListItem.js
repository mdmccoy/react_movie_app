import React, {Component} from 'react';

import {StyleSheet,View,TouchableOpacity, Image, Text} from 'react-native';

import {ORANGE,PINK,WHITE} from '../../style'

import Services from '../services'

export default class NowPlayingListItem extends Component{

  render(){
    const {poster_path,title} = this.props.data;
    return(
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{uri:`${Services.imageUrl}w500${poster_path}`}}/>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.imgshadow}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      width: 140,
      height: 260,
      marginRight: 20
    },
    image:{
      backgroundColor: 'rgb(230,230,230)',
      width: 140,
      height: 210,
      borderRadius: 6,
      zIndex: 1
    },
    imgshadow:{
      top: 20,
      left: 8,
      backgroundColor: '#000',
      opacity: 0.5,
      height:  185,
      width: 123,
      zIndex: 0,
      position: 'absolute',
      shadowOffset:{
        width:0,
        height:4
      },
      shadowOpacity: 1,
      shadowRadius: 9
    },
    title:{
      marginTop: 20,
      fontSize: 15,
      color: '#000',
    }
})
