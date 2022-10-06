import { View } from "react-native";

const ListItem = ({ location, price, text, img }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default ListItem;