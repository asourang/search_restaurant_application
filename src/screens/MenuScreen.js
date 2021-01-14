import {  Text, View,TouchableOpacity , Icon} from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';



const MenuScreen =({ navigation }) =>{
    return  (
       
        
     
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.row}>
      
      <Text style={styles.textOrder}></Text>
     
      </View>
     <Text>CURBSIDE PICKUP is now available at this location! Place your order and select CURBSIDE from the available options.  {'\n'}{'\n'}PLEASE CALL THE STORE at the phone number listed above when you arrive, tell us the color and model of your car, and we’ll run your order out to you!  {'\n'}{'\n'}DELIVERY FEES WAIVED at this location for delivery orders placed on fiveguys.com or the Five Guys app ($15 order minimum)! Only bottled drinks available for delivery. Note that orders are delivered by a third-party provider.{'\n'}{'\n'}</Text>

    <View style={styles.row}><TouchableOpacity 
 style={styles.orderType}   >
   
  <Text style={styles.startText}>Burgers</Text>
  </TouchableOpacity>

</View>

<View style={styles.row}><TouchableOpacity  
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Hot Dogs</Text>
</TouchableOpacity>

</View>
<View style={styles.row}><TouchableOpacity 
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Sandwiches</Text>
</TouchableOpacity>

</View>
<View style={styles.row}><TouchableOpacity 
  title="Type" style={styles.orderType}>
   
  <Text style={styles.startText}>Fries</Text>
</TouchableOpacity>

</View>






  </View>
);
}

export default MenuScreen;