import MapView from 'react-native-maps'
import React, { Component } from 'react'
import { View , Text, StyleSheet, Button } from "react-native";
import {styles} from "./myStyle";


export default class LocationsScreen  extends Component { 
   render() {    return (      <MapView        style={{flex: 1}}  
          region={{          latitude: 42.882004,         
             longitude: 74.582748,          latitudeDelta: 0.0922, 
                      longitudeDelta: 0.0421        }}        
                      showsUserLocation={true}      />    ); 
                     }}


