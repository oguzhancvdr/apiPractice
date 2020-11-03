import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RestaurantList, CityList, RestaurantDetail} from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cities" component={CityList} />
        <Stack.Screen name="Restaurants" component={RestaurantList} />
        <Stack.Screen name="Details" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
