import {Text, View, TextInput, StyleSheet} from 'react-native';
// Generic Text Input - takes a textInput config the properties should match to be set on textinput
function Input({label,textInputConfig }){
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig}></TextInput>
        </View>
    )

}

export default Input;

const style = StyleSheet.create({

})