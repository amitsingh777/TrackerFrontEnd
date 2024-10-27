import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {TextInputProps} from 'react-native/Libraries/Components/TextInput/TextInput';

import Icon from 'react-native-vector-icons/Entypo';
import {IconProps} from 'react-native-vector-icons/Icon';

type Props = TextInputProps &
  Omit<IconProps, 'name'> &
  PressableProps & {
    onClear?: (event: GestureResponderEvent) => void;
  };

const CustomTextInput = (props: Props) => {
  return (
    <>
      <View style={inputStyle.container}>
        <TextInput
          {...props}
          style={inputStyle.input}
          placeholderTextColor="#ffffff95"
        />

        <Pressable
          android_ripple={{color: '#00000040', radius: 12, foreground: true}}
          onPress={props.onPress}
          style={inputStyle.iconContainer}>
          <Icon
            name="circle-with-cross"
            size={15}
            color="black"
            style={[{borderRadius: 100}]}
          />
        </Pressable>
      </View>
    </>
  );
};

const inputStyle = StyleSheet.create({
  input: {
    backgroundColor: '#000000',
    opacity: 0.4,
    borderRadius: 6,
    paddingVertical: 2,
    paddingRight: 26,
    paddingLeft: 6,
    color: 'white',
  },
  container: {
    flexGrow: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    borderRadius: 40,
    padding: 10,
    backgroundColor: 'transparent',
    marginLeft: -30,
  },
});

export default CustomTextInput;
