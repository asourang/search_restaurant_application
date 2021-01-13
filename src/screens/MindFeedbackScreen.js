import {  Text, View,TouchableOpacity } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';



const MindFeedbackScreen =({ navigation }) =>{
    return  (
    
    <View style={{ flex: 1, alignItems: 'center' }}>
    <Text style={styles.textOrder}>What is on your mind?</Text>
    <View style={styles.row}><TouchableOpacity 
 style={styles.orderType}  onPress={() => navigation.navigate('FeedbackKind' )} >
   
  <Text style={styles.startText}>Compliment</Text>
  </TouchableOpacity>

</View>

<View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('FeedbackKind' )}
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Issue</Text>
</TouchableOpacity>

</View>
<View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('FeedbackKind' )}
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Question</Text>
</TouchableOpacity>

</View>
<View style={styles.row}><TouchableOpacity onPress={() => navigation.navigate('FeedbackKind' )}
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Suggestion</Text>
</TouchableOpacity>

</View>






  </View>
);
}

export default MindFeedbackScreen;