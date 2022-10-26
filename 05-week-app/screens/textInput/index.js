import { useState } from "react";
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native"

const emailRegexp = /[-a-zA-Zа-яА-Я0-9@:%._\+~#=]{1,256}\.(ru|com)$/i;

const TextInputScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isShowPassword, showPassword] = useState(false);
  const [textError, setTextError] = useState('');

  const isValidate = () => {
    if (email.match(emailRegexp) && password.length > 6) {
      return true;
    } else {
      setTextError('Неверные данные');
      return false;
    }
  }

  const submitForm = () => {
    if (isValidate()) navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name ? `Hi ${name}!` : 'What is your name?'}
      </Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {isShowPassword &&
        <Text style={styles.text}>Password: {password}</Text>
      }
      {textError && 
        <Text style={{ ...styles.text, color: 'red' }}>{textError}</Text>
      }
      <View style={styles.buttonsView}>
        <Button
          title="Show Password"
          onPress={() => showPassword(true)}
        />
        <Button 
          title="Login"
          onPress={submitForm}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ADD8E6',
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  }, 
  textInput: {
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    padding: 10,
    margin: 10,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  }
});

export default TextInputScreen;