
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from 'react';
import HomeScreen from "./HomeScreen";
import OrderScreen from "./OrderScreen";
import FeedbackScreen from "./FeedbackScreen";
import SearchScreen from "./SearchScreen";
import PrivacyScreen from "./PrivacyScreen";
import MindFeedbackScreen from "./MindFeedbackScreen";
import FeedbackKind from "./FeedbackKind";
import GeneralFeedbackScreen from "./GeneralFeedbackScreen";
import SpecificFeedbackScreen from "./SpecificFeedbackScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Order" component={OrderScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
const FeedbackAppStackNavigator = () => {
    return (
      <Stack.Navigator >
      <Stack.Screen name="FeedBack" component={FeedbackScreen} />
      <Stack.Screen name="MindFeedbackStack" component={MindFeedbackScreen} />
      <Stack.Screen name="FeedbackKind" component={FeedbackKind} />
      <Stack.Screen name="GeneralFeedbackScreen" component={GeneralFeedbackScreen} />
      <Stack.Screen name="SpecificFeedbackScreen" component={SpecificFeedbackScreen} />
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

export { MainStackNavigator , FeedbackAppStackNavigator, PrivacyStackNavigator};