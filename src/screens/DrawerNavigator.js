import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { PrivacyStackNavigator} from "./Stack";
import { FeedbackAppStackNavigator} from "./Stack";
import { MainStackNavigator} from "./Stack";
import LoginScreen from "./LoginScreen";
import OrderScreen from "./OrderScreen";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (

    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainStackNavigator} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Order" component={OrderScreen} />
        <Drawer.Screen name="Feedback" component={FeedbackAppStackNavigator} />
        <Drawer.Screen name="Privacy" component={PrivacyStackNavigator} />
      
      </Drawer.Navigator>
  
  );
}



export default DrawerNavigator ;