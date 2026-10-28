import React from 'react';
import {View, Text,Image,ScrollView} from 'react-native';
import Movie from './components/Movie';


class AllMovies extends React.Component {
  render () {
    return(
        <ScrollView>
          <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"green"}
          poster={require('./img/doctor-sleep.jpg')}/>
          <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"blac"}
          poster={require('./img/midway.jpg')} />
          <Movie title={"Obsession"} year={2026} icon_name={"ghost"} icon_color={"purple"}
          poster={{uri:'https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/blt5c8bcbfee5dade5c/6a2b47a8c284bac540ef3353/Obsession_keyart_poster_2000x3000.jpg?width=2560'}} />/

        </ScrollView>

    )
  }
}

export default AllMovies;


