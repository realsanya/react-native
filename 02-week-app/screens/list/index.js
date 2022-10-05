import { StyleSheet, View } from 'react-native';
import ListItem from '../../components/list-item';
import { data } from '../../utils/data';

const ListScreen = (filter) => {
  const filteredData = data.map(() => data.location === filter);
  return (
    <View style={styles.container}>
      {filteredData.map((data) => (
        <ListItem
          location={data.location}
          price={data.price}
          text={data.text}
          img={data.img}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'top'
  },
});

export default ListScreen;