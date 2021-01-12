import { StatusBar } from 'expo-status-bar';
import {  Linking,Text, View,TouchableOpacity,Image, Button } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



function OrderScreen({ navigation }) {
  
    const orderType = () => {
     let output="In-Store"
      Linking.openURL(output);
    };

    return (

      
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textOrder}>How do you want your order?</Text>
          <View style={styles.row}><TouchableOpacity  onPress={() => orderType()}
        title="Type" style={styles.orderType}>
           <Icon
      style={styles.icon}
       name='list'
       type='button'
       />
       
        <Text style={styles.startText}>Order Type</Text><Text style={styles.endText}>In-Store Pickup</Text>
        <Icon
       style={styles.icon}
       name='angle-right'
       type='button'
       />
      </TouchableOpacity>
      </View>
      <View style={styles.row}><TouchableOpacity  onPress={() => navigation.navigate('Search')}
        title="when" style={styles.orderType}>
           <Icon
      style={styles.icon}
       name='clock-o'
       type='button'
       />
       
        <Text style={styles.startText}>When</Text><Text style={styles.endText}>ASAP</Text>
        <Icon
       style={styles.icon}
       name='angle-right'
       type='button'
       />
      </TouchableOpacity>
      </View>

      
      
      
      <View><TouchableOpacity  onPress={() => navigation.navigate('Search')}
        title="Search" style={styles.newOrder}>
        <Text >Search for Locations</Text>
      </TouchableOpacity>
      </View>
        </View>
      );
    }
 
  export default OrderScreen;