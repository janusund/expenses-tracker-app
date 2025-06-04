import { Pressable , StyleSheet,View} from "react-native";
import {Ionicons} from '@expo/vector-icons';
// Custon Button component

function IconButton({icon,size, color, onPress }){
    return <Pressable onPress ={onPress} style={({pressed}) =>pressed && styles.pressed}>
        <View styles={styles.buttonContainer}>
            <Ionicons name={icon} size={size} color={color}/>
        </View>
    </Pressable>

}

export default IconButton;

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius:24,
        padding:6,
        marginHorizontal:10,
        marginVertical:2
    },
    pressed:{
        opacity:0.75,

    }
})