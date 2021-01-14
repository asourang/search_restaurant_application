
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from 'react';
import HomeScreen from "./HomeScreen";
import OrderScreen from "./OrderScreen";
import LoginScreen from "./LoginScreen";
import LocationsScreen from "./LocationsScreen";
import FeedbackScreen from "./FeedbackScreen";
import SearchScreen from "./SearchScreen";
import FeedbackLocation from "./FeedbackLocation";
import PrivacyScreen from "./PrivacyScreen";
import MindFeedbackScreen from "./MindFeedbackScreen";
import FeedbackKind from "./FeedbackKind";
import MenuScreen from "./MenuScreen";
import GeneralFeedbackScreen from "./GeneralFeedbackScreen";
import SpecificFeedbackScreen from "./SpecificFeedbackScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Order" component={OrderScreen} />
    <Stack.Screen name="Restaurants" component={SearchScreen} />
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="GeneralFeedbackScreen" component={GeneralFeedbackScreen} />
    </Stack.Navigator>
  );
}
const FeedbackAppStackNavigator = () => {
    return (
      <Stack.Navigator >
      <Stack.Screen name="FeedBack" component={FeedbackScreen} />
      <Stack.Screen name="MindFeedbackStack" component={MindFeedbackScreen} />
      <Stack.Screen name="FeedbackKind" component={FeedbackKind} />
      <Stack.Screen name="FeedbackLocation" component={FeedbackLocation} />
      <Stack.Screen name="GeneralFeedbackScreen" component={GeneralFeedbackScreen} />
      <Stack.Screen name="SpecificFeedbackScreen" component={SpecificFeedbackScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
}



const PrivacyStackNavigator = () => {
    return (
      <Stack.Navigator >
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
   
      </Stack.Navigator>
    );
}
const LoginStackNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const ListStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Restaurants" component={SearchScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    
    </Stack.Navigator>
  );
}
const MapStackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Restaurants" component={LocationsScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    
    </Stack.Navigator>
  );
}




export { MainStackNavigator ,MapStackNavigator ,LoginStackNavigator ,ListStackNavigator,FeedbackAppStackNavigator, PrivacyStackNavigator};