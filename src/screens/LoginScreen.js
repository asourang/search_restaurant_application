import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={ styles2.container}>
     
      <StatusBar style="auto" />
     
      <Text style={styles2.Login}>Login</Text>
      <View style={styles2.inputView}>
  
        <TextInput
          style={styles2.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles2.inputView}>
        <TextInput
          style={styles2.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles2.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles2.loginBtn}>
        <Text style={styles2.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
   
    borderColor:"#ff8c00",
  
    
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#f8c471",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  Login: {
    fontFamily:"Cochin",
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:100,
    borderWidth:1/2,
    borderRadius:155/2,
    height: 155,
    width: 155,
    backgroundColor:'#fff',
    overflow:'hidden',
    paddingLeft:50,
    paddingTop:65,
    borderColor:'grey',
    color:'black',
   
  },

  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#ff8c00",
  },

});