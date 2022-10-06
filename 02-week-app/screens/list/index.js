import { StyleSheet, View, Text } from 'react-native';
import ListItem from '../../components/list-item';
import { data } from '../../utils/data';

const ListScreen = ({ filter }) => {
  
  const filteredData = data.filter((item) => item.location === filter);

  return (
    <View style={styles.container}>
      {filteredData.length !== 0 ? (
        filteredData.map((item) => (
          <ListItem
            key={item.id}
            location={item.location}
            price={item.price}
            text={item.text}
            img={item.img}
          />
        )) 
      ) : ( 
        <Text style={styles.notFoundText}>Not found :(</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'top',
    justifyContent: 'center'
  },
  notFoundText: {
    fontSize: 42,
    color: '#656565',
  }
});

export default ListScreen;