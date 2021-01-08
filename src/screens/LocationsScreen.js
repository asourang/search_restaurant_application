import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";
import {styles} from "./myStyle";
function LocationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
     //   onPress={() => navigation.navigate('Login')}
        title="Locations"
      />
    </View>
  );
}
export default LocationsScreen;
