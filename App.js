import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerItems,
//   createBottomTabNavigator,
//   TabBarBottom,
//   // createStackNavigator,
//   createAppContainer,
//   BottomTabBar,
// } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import People from './people';




const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// let App = createAppContainer(RootNavigator);

export default App;