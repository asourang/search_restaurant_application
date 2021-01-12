import { StyleSheet} from "react-native";


export const styles = StyleSheet.create({

    container1: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    container: {
      flex: 1,
 
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom:5,
      alignSelf:'center',
    },
   

    box:{
    borderWidth:3,
    borderColor:'black',
    margin: 10,
    padding:15,

    },

    details: {
      fontFamily:"Verdana",
      fontSize: 30,
      color:"#072f5f",
      fontWeight: 'bold',
      marginBottom:100,
     
    },
    home: {
      borderWidth:3,
      padding:10,
      borderRadius:35,
      fontFamily:"Palatino",
      fontSize: 30,
      color:"black",
      fontWeight: 'bold',
      marginBottom:100,
    
     
    },
    homeOrder: {
      padding:25,
     backgroundColor:'white',
      fontFamily:"Palatino",
      fontSize: 30,
      color:"black",
      fontWeight: 'bold',
      marginBottom:-10,
      width:425,
      marginTop:20,
     
    },
    newOrder: {

      paddingLeft:150,
      borderWidth:1,
      borderColor:'#fdb35a',
       padding:25,
      backgroundColor:"#f8c471",
       fontFamily:"Palatino",
       fontSize: 30,
       color:"white",
       fontWeight: 'bold',
       marginTop:550,
      
       width:425,
      
     },
     newOrder1: {

      paddingLeft:150,
      borderWidth:1,
      borderColor:'white',
       padding:25,
      backgroundColor:"beige",
       fontFamily:"Palatino",
       fontSize: 30,
       color:"white",
       fontWeight: 'bold',
       marginTop:0,
   
      
       width:450,
      
     },
     orderType: {
      flexDirection:'row',
      borderWidth:1,
      borderColor:'white',
       padding:25,
       fontFamily:"Palatino",
       fontSize: 30,
       color:"white",
       fontWeight: 'bold',
       width:420,
      
     },
     icon:{
      fontSize: 20,
      fontWeight: 'bold',
      marginRight:1,
      marginBottom:5,
     flexDirection:'row',
    },
    iconpick:{
      fontSize: 20,
      fontWeight: 'bold',
      marginRight:1,
      paddingRight:1,
      marginBottom:5,
     flexDirection:'row',
    },

     endText:{
    
      marginLeft:1,
      
      width:100,
        },
       
        startText:{
          flexDirection:'row',
          marginLeft:5,
          
          width:250,
            },

    textOrder: {

      backgroundColor:"#ffeeda",
       padding:22,
       fontFamily:"Palatino",
       fontSize: 15,
       color:"black",
       fontWeight: 'bold',
       width:450,
      
    }
     


   
  });