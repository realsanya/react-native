import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Home = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Button
        title="UserList"
        onPress={() => navigation.navigate('UserList')}
      />
      <Button
        title="MessageList"
        onPress={() => navigation.navigate('MessageList')}
      />
      <Button
        title="UserProfile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <Button
        title="UserCall"
        onPress={() => navigation.navigate('UserCall')}
      />
      <Button
        title="Gallery"
        onPress={() => navigation.navigate('Gallery')}
      />
      <Button
        title="ProductCard"
        onPress={() => navigation.navigate('ProductCard')}
      />
      <Button
        title="Resume"
        onPress={() => navigation.navigate('Resume')}
      />
      <Button
        title="AcceptedOrder"
        onPress={() => navigation.navigate('AcceptedOrder')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Home;