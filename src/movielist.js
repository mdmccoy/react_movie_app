import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  LayoutAnimation
} from 'react-native';

import {ORANGE,PINK,GRAYBG} from '../style'

import UpcomingListItem from './components/upcomingListItem';

import NowPlayingListItem from './components/nowPlayingListItem'

import Services from './services'

export default class MovieList extends Component {

  state =  {
    upcoming: [
      {id:0,title: ''},
      {id:1,title: ''},
      {id:2,title: ''},
    ],
    nowPlaying:[
      {id:0,title: 'Test 1'},
      {id:1,title: 'Test 2'},
      {id:2,title: 'Test 3'},
      {id:3,title: 'Test 4'},
      {id:4,title: 'Test 5'}
    ]
  }

  componentWillUpdate(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  componentDidMount() {
    Services.getUpcomingMovies().then(response => {
      this.setState({upcoming: response.results})
    })
    Services.getNowPlaing().then(response => {
      this.setState({nowPlaying: response.results})
    })
  }

  keyExtractor = item => `${item.id}`;

  renderUpcoming = ({item}) => (
    <UpcomingListItem data={item}/>
  )

  renderNowPlaying = ({item}) => (
    <NowPlayingListItem data={item} />
  )

  render() {
    return (
        <ScrollView style={styles.container}>
          <Text style = {styles.title}>MOVIES</Text>
          <FlatList
            data={this.state.upcoming}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderUpcoming}
            horizontal
          />
        <View style={styles.listcontainer}>
          <Text style={styles.title}>NOW</Text>
          <FlatList
          data={this.state.nowPlaying}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderNowPlaying}
          horizontal
          />
        </View>
      </ScrollView>

    );
  }
}

const styles =  StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: GRAYBG,
    paddingLeft: 20
  },
  title:{
    fontSize: 24,
    fontWeight: '600',
    marginTop: 60
  },
  listcontainer:{

  },
  wrapper:{
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: GRAYBG,
    paddingLeft: 20
  }
})
