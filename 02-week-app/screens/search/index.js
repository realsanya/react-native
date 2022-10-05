import { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import homeImage from '../../assets/home.webp';

const SearchScreen = ({ navigation }) => {

  const [location, setLocation] = useState('');

  const onPress = () => {
    navigation.navigate('List', location)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Search for a hotel to rent!
      </Text>
      <Text style={styles.description}>
        Search by city.
      </Text>
      <View style={styles.flow}>
        <TextInput
          value={location}
          onChange={setLocation}
          style={styles.searchInput}
          placeholder='Enter city...' />
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}>
            <Text style={styles.buttonText}>Press Here</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          style={styles.img}
          source={homeImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 65,
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  flow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#48BBEC',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  searchInput: {
    height: 36,
    width: 150,
    padding: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#656565'
  },
  img: {
    width: 250,
    height: 250,
    marginTop: 10,
  }
});

export default SearchScreen;