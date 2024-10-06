import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {login} from '../../apis/auth';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const onLoginPress = () => {
    if (userName && password) {
      login({userName, password});
    }
  };
  const onUserNameChange = (text: string) => {
    setUserName(text);
  };
  const onPasswordChange = (text: string) => {
    setPassword(text);
  };
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View style={styles.flexRow}>
        <Text>Username</Text>
        <TextInput placeholder="User Name" onChangeText={onUserNameChange} />
      </View>
      <View style={styles.flexRow}>
        <Text>Password</Text>
        <TextInput placeholder="Password" onChangeText={onPasswordChange} />
      </View>
      <Button
        title="Login"
        onPress={onLoginPress}
        disabled={Boolean(!(userName && password))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {alignItems: 'center', justifyContent: 'center', flex: 1},
  flexRow: {flexDirection: 'row'},
});

export default Login;
