import {StyleSheet, TextInput, View} from 'react-native';
import {TextInputProps} from 'react-native/Libraries/Components/TextInput/TextInput';
//circle-with-cross
import Icon from 'react-native-vector-icons/Entypo';
import FontIcon from 'react-native-vector-icons/FontAwesome';

const CustomTextInput = (props: TextInputProps) => {
  return (
    <>
      <View style={inputStyle.container}>
        <TextInput
          {...props}
          style={inputStyle.input}
          placeholderTextColor="#ffffff80"
          inlineImageLeft="d"
        />
        <Icon
          name="circle-with-cross"
          size={15}
          color="black"
          style={inputStyle.icon}
        />
      </View>
    </>
  );
};

const inputStyle = StyleSheet.create({
  input: {
    backgroundColor: '#00000070',
    opacity: 0.4,
    borderRadius: 6,
    // paddingHorizontal: 6,
    paddingVertical: 3,
    paddingRight: 26,
    paddingLeft: 6,
    color: 'white',
  },
  container: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: -23,
  },
});

export default CustomTextInput;
