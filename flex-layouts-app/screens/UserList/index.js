import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Item from './Item';

const userImg = require('../../assets/user.png');

const data = [
  {
    name: 'Kutyavina Vera',
    date: '20 Oct 7:00 pm',
    type: 'phone',
    img: userImg,
  },
  {
    name: 'Zalyaliev Ildar',
    date: '20 Oct 6:00 am',
    type: 'phone',
    img: userImg,
  },
  {
    name: 'Morozova Sasha',
    date: '19 Oct 8:00 am',
    type: 'video',
    img: userImg,
  },
  {
    name: 'Semenova Anastasia',
    date: '19 Oct 7:00 am',
    type: 'phone',
    img: userImg,
  }
]


const UserList = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <ScrollView>
        {data.map((user, i) => (
          <Item 
            key={i}
            name={user.name}
            date={user.date}
            type={user.type}
            img={user.img} />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
});


export default UserList;