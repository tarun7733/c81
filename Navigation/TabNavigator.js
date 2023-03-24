import React from "react";
import Feed from "../Screens/Feed";
import CreateStory from "../Screens/CreatePost";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Feed") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "CreatePost") {
            iconName = focused ? "create" : "create-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              
            />
          );
        }
      })}
      activeColor={"#ee8249"}
      inactiveColor={"gray"}
    >
      <Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
      <Tab.Screen name="Create Post" component={CreateStory} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator