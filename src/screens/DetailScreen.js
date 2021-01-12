

import { StatusBar } from 'expo-status-bar';
import { FlatList,SafeAreaView, Text, View, Button } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';
import ApiManager from '../../api/ApiManager';
function DetailScreen({ navigation }) {
  //Declare variable
  

  const [result , setResults]  = useState([]);

  const getPost = async () => {
      const response = await ApiManager.get('/posts');
      setResults(response.data);
  };
  return (
    <SafeAreaView style={styles.container1} >
    <Button style={styles.details} title="Details"
      onPress={()=>{
        getPost();
      }}/>
    <FlatList
   
       data={result}
       keyExtractor={item => item.id.toString()}
       renderItem={({item})=>(
         
           <View style={styles.box}>
             <Text style={styles.text}>{item.title}</Text>
             <Text>{item.body}</Text>
           </View>

       )}

/>
    
      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}

export default DetailScreen;

