import {StyleSheet, TextInput} from 'react-native';
import {TextInputProps} from 'react-native/Libraries/Components/TextInput/TextInput';
//circle-with-cross
import Icon from 'react-native-vector-icons/Entypo';
import FontIcon from 'react-native-vector-icons/FontAwesome';

const CustomTextInput = (props: TextInputProps) => {
  return (
    <>
      <TextInput
        {...props}
        style={inputStyle.input}
        placeholderTextColor="white"
      />
      <Icon name="circle-with-cross" size={30} color="black" />
      <FontIcon name="rocket" size={30} color="#900" />
    </>
  );
};

const inputStyle = StyleSheet.create({
  input: {
    backgroundColor: 'black',
    opacity: 0.4,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});

export default CustomTextInput;
