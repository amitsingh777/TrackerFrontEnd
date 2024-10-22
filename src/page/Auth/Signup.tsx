import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import * as Keychain from 'react-native-keychain';
import {signup} from '../../apis/auth';
import CustomTextInput from '../../components/CustomTextInput';

const Signup = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const onNameInputChange = (name: string) => {
    setName(name);
  };
  const onMailInputChange = (mail: string) => {
    setMail(mail);
  };
  const onPasswordInputChange = (password: string) => {
    setPassword(password);
  };

  const onSignupPress = async () => {
    if (name && mail && password) {
      const token = await signup({userName: name, mail, password});
      if (token) {
        await Keychain.setGenericPassword('amit', `${token}`);
      }
    }
  };
  return (
    <View style={style.container}>
      <CustomTextInput
        placeholder="Enter your name please!"
        onChangeText={onNameInputChange}
      />
      <TextInput
        placeholder="Enter your password please!"
        onChangeText={onPasswordInputChange}
      />
      <TextInput
        placeholder="Enter your mail id please!"
        onChangeText={onMailInputChange}
      />
      <Button title="Sign me up!" onPress={onSignupPress} />
      <Button
        title="get credentials from me"
        onPress={async () => {
          const creds = await Keychain.getGenericPassword();
          console.log(creds);
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signup;
