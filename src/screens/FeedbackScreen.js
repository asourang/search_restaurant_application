import {  Text, View,TouchableOpacity } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';
import { FeedbackAppStackNavigator} from "./Stack";


const FeedbackScreen =({ navigation }) =>{
    return  (
    
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={styles.textOrder}>What is this regarding?</Text>
    <View style={styles.row}><TouchableOpacity 
 style={styles.orderType}  onPress={() => navigation.navigate('MindFeedbackStack' )} >
   
  <Text style={styles.startText}>App</Text>
  </TouchableOpacity>

</View>

<View style={styles.row}><TouchableOpacity  onPress={() => navigation.navigate('MindFeedbackStack' )} 
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Service</Text>
</TouchableOpacity>

</View>
<View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('MindFeedbackStack' )} 
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Service</Text>
</TouchableOpacity>

</View>
<View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('MindFeedbackStack' )} 
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Other</Text>
</TouchableOpacity>

</View>






  </View>
);
}

export default FeedbackScreen;