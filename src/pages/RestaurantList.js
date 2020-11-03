import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';

import {RestaurantItem, SearchBar} from '../components';

let originalList = [];

const RestaurantList = (props) => {
  const [restaurantList, setRestaurantList] = useState([]);
  const {selectedCity} = props.route.params;

  const fetchRestaurants = () => {
    axios
      .get('http://opentable.herokuapp.com/api/restaurants', {
        params: {
          city: selectedCity,
        },
      })
      .then((response) => {
        setRestaurantList(response.data.restaurants);
        originalList = [...response.data.restaurants];
      });
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const renderRestaurants = ({item}) => {
    return (
      <RestaurantItem
        restaurant={item}
        onSelect={() =>
          props.navigation.navigate('Details', {selectedRestaurant: item})
        }
      />
    );
  };

  function searchRestaurant(search) {
    const filteredRestaurants = originalList.filter((restaurant) => {
      const text = search.toUpperCase();
      const restaurantName = restaurant.name.toUpperCase();

      return restaurantName.indexOf(text) > -1;
    });
    setRestaurantList(filteredRestaurants);
  }
  return (
    <View style={{flex: 1}}>
      <View>
        <View>
          <Text style={{margin: 5, fontWeight: 'bold', fontSize: 35}}>
            {selectedCity}
          </Text>
          <SearchBar
            placeholder="Search a restaurant.."
            onSearch={(val) => searchRestaurant(val)}
          />
        </View>
      </View>
      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={restaurantList}
        renderItem={renderRestaurants}
      />
    </View>
  );
};

export {RestaurantList};
