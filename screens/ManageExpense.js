import { useLayoutEffect, useContext } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/context/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';

function ManageExpense({route,navigation}){
    // If new expense then there will be no id 
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId; // Convert to boolean

    const expensesCtx = useContext(ExpensesContext);

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense",
      });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    }

    function confirmExpenseHandler() {
        if(isEditing){
            expensesCtx.updateExpense(editedExpenseId,{description:"Test", amount:19.99, date: new Date('2022-06-01')});
        }else{
            expensesCtx.addExpense({description:"Test", amount:19.99, date: new Date('2022-06-03')});
        }
      navigation.goBack();
    }

    function cancelExpenseHandler(){
        navigation.goBack();

    }
    return (
      <View style={styles.container}>
        <ExpenseForm/>
        <View style={styles.buttons}>
            <Button mode="flat"  style={styles.button} onPress={cancelExpenseHandler}>Cancel</Button>
            <Button mode="flat" style={styles.button} onPress={confirmExpenseHandler}>{isEditing? 'Update' : 'Add'}</Button>
        </View>
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
    buttons:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        minWidth:120,
        marginHorizontal:8,
        backgroundColor:'white'
    },
    deleteContainer:{
        marginTop:16,
        paddingTop:8,
        borderTopWidth:2,
        borderTopColor:GlobalStyles.colors.primary200,
        alignItems:'center',

    }
})