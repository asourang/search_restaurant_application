
import { StatusBar } from 'expo-status-bar';
import { FlatList,SafeAreaView, Text, View, Button } from "react-native";
import {styles} from "./myStyle";
import React, {useState} from 'react';
import ApiManager from '../../api/ApiManager';
function HomeScreen({ navigation }) {
  //Declare variable
  

  const [result , setResults]  = useState([]);

  const getPost = async () => {
      const response = await ApiManager.get('/posts');
      setResults(response.data);
  };
  return (
    <SafeAreaView style={styles.container} >
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
    
      <Button title="Home"
      onPress={()=>{
        getPost();
      }}/>


     
    
      <StatusBar style="auto" />
    
    </SafeAreaView>
  );
}

export default HomeScreen;

