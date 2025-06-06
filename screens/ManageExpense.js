import { useLayoutEffect } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';

function ManageExpense({route,navigation}){
    // If new expense then there will be no id 
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId; // Convert to boolean

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense",
      });
    }, [navigation, isEditing]);

    function deleteExpenseHandler(){

    }
    return (
      <View style={styles.container}>
        {isEditing && (
          <View style={styles.deleteContainer}>
            <IconButton
              icon="trash"
              color={GlobalStyles.colors.error500}
              size={36}
              onPress={deleteExpenseHandler}
            />
          </View>
        )}
      </View>
    );
}

export default ManageExpense;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary800
    },
    deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:'center',

    }
})