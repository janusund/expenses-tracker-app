import {Text, View, TextInput, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
// Generic Text Input - takes a textInput config the properties should match to be set on textinput
function Input({label,style, textInputConfig ,invalid }){
    const inputStyles=[styles.input];

    if(textInputConfig && textInputConfig.multiline){
        inputStyles.push(styles.inputMultiline);
    }

    if(invalid){
        inputStyles.push(styles.invalidInput);
    }
    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig}></TextInput>
        </View>
    )

}

export default Input;

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:4,
        marginVertical:8,
    },
    label:{
        fontSize:12,
        color:GlobalStyles.colors.primary100,
        marginBottom: 4,
    },
    input:{
        backgroundColor: GlobalStyles.colors.primary100,
        padding:6,
        borderRadius:6,
        fontSize:18,
        color: GlobalStyles.colors.primary700
    },
    inputMultiline:{
        minHeight:100,
        textAlignVertical:'top'
    },
    invalidLabel:{
        color:GlobalStyles.colors.error500
    },
    invalidInput:{
        backgroundColor:GlobalStyles.colors.error50
    }
})