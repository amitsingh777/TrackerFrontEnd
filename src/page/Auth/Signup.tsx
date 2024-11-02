import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import * as Keychain from 'react-native-keychain';
import {signup} from '../../apis/auth';
import CustomTextInput from '../../components/CustomTextInput';
import {AxiosError} from 'axios';

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
      try {
        const data = await signup({
          userName: name,
          mail,
          password,
        });
        if (data && data.token) {
          await Keychain.setGenericPassword('amit', `${data.token}`);
        }
      } catch (e: unknown) {
        const ex = e as AxiosError;
        console.log(ex.code, ex.cause, ex.response, ex.status, ex.name);
      }
    }
  };
  const onNameClear = () => {
    setName('');
  };

  return (
    <View style={style.container}>
      <CustomTextInput
        placeholder="Enter your name please!"
        onChangeText={onNameInputChange}
        // onPress={onNameClear}
        value={name}
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
