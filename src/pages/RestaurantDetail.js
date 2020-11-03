import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  Button,
  Linking,
} from 'react-native';

const RestaurantDetail = (props) => {
  const {selectedRestaurant} = props.route.params;
  return (
    <View>
      <Text style={styles.name}>{selectedRestaurant.name}</Text>
      <Image
        style={styles.image}
        source={{uri: selectedRestaurant.image_url}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Adress: {selectedRestaurant.address}
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}> İnfo: {selectedRestaurant.area}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Postal Code: {selectedRestaurant.postal_code}
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Phone: {selectedRestaurant.phone}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Click to Reserve!"
          onPress={() => Linking.openURL(selectedRestaurant.reserve_url)}
        />
      </View>
    </View>
  );
};

export {RestaurantDetail};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  name: {
    fontWeight: '300',
    fontSize: 25,
  },
  image: {
    height: Dimensions.get('window').height / 3,
  },
  infoContainer: {
    color: '#fff',
    backgroundColor: '#29b6f6',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  infoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 10,
    width: Dimensions.get('window').width * 0.5,
    alignSelf: 'center',
  },
});
