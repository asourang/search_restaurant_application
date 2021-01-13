import {  Text, View,TouchableOpacity } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';



const GeneralFeedbackScreen =({ navigation }) =>{
    return  (
    
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={styles.textOrder}>Feedback Summary</Text>
    
  </View>
);
}

export default GeneralFeedbackScreen;