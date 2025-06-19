import { useLayoutEffect, useContext,useState } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/context/expenses-context';
import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import {storeExpense, updateExpense, deleteExpense} from '../Util/http';
import LoadingOverlay from '../components/UI/LoadingOverlay';
import ErrorOverlay from '../components/UI/ErrorOverlay';

function ManageExpense({route,navigation}){
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [error, setError] = useState();
    // If new expense then there will be no id 
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId; // Convert to boolean

    const expensesCtx = useContext(ExpensesContext);
    const selectedExpense =expensesCtx.expenses.find((expense)=>expense.id === editedExpenseId);

    useLayoutEffect(() => {
      navigation.setOptions({
        title: isEditing ? "Edit Expense" : "Add Expense",
      });
    }, [navigation, isEditing]);

    async function deleteExpenseHandler() {
       setIsSubmiting(true);
       try{
        expensesCtx.deleteExpense(editedExpenseId);
        await deleteExpense(editedExpenseId);
         navigation.goBack();
        }catch(error){
           setError('Could not save date - please try again later!');
          setIsSubmiting(false);
       }
    }

    async function confirmExpenseHandler(expenseData) {
       setIsSubmiting(true);
       try{
         if(isEditing){
          //Update locally first then update backend
            expensesCtx.updateExpense(editedExpenseId,expenseData);
            await updateExpense(editedExpenseId, expenseData);
        }else{
            
            const id = await storeExpense(expenseData); // returns a promise 
            expensesCtx.addExpense({...expenseData, id:id});
        }
        navigation.goBack();
       }catch(error){
          setError('Could not save date - please try again later!');
          setIsSubmiting(false);
       }
       
      
    }

    function cancelExpenseHandler(){
        navigation.goBack();

    }

    if(isSubmiting){
      return <LoadingOverlay/>;
    }

    if(error && !isSubmiting){
      return <ErrorOverlay message={error} />
    }
    return (
      <View style={styles.container}>
        <ExpenseForm onCancel = {cancelExpenseHandler} 
        submitButtonLabel={isEditing ?'Update' : 'Add'} 
        onSubmit={confirmExpenseHandler} 
        defaultValues ={selectedExpense}/>
      
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