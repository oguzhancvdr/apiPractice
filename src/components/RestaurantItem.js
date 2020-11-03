import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const RestaurantItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onSelect}>
      <Image style={styles.image} source={{uri: props.restaurant.image_url}} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Restaurat Name:</Text>
        <Text style={styles.title}>Price Range 1-4: </Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{props.restaurant.name}</Text>
        <Text style={styles.name}>{props.restaurant.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export {RestaurantItem};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bdbdbd',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
