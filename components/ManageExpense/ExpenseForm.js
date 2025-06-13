import {Text, View, StyleSheet} from 'react-native';
import Input from '../UI/Input';
import Button from '../UI/Button';
import {useState} from 'react';
function ExpenseForm({onCancel,submitButtonLabel,isEditing}){
    const [inputValues, setInputValues] = useState({
        amount:'',
        date:'',
        description:''
    });
    // First is the second parameter being passed 
    function inputChangeHandler(inputIdentifier,enteredValue){
        setInputValues((currentInputValues)=>{
            return{
                ...currentInputValues,
                [inputIdentifier]:enteredValue
            }
        });

    }

      function submitHandler() {
        if(isEditing){
            expensesCtx.updateExpense(editedExpenseId,{description:"Test", amount:19.99, date: new Date('2022-06-01')});
        }else{
            expensesCtx.addExpense({description:"Test", amount:19.99, date: new Date('2022-06-03')});
        }
      navigation.goBack();
    }


    return (
      <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
          <Input
            style={styles.rowInput}
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              value: inputValues.amount,
            }}
          />
          <Input
            style={styles.rowInput}
            label="Date"
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangeHandler.bind(this, "date"),
              value: inputValues.date,
            }}
          />
        </View>
        <Input
          label="Description"
          textInputConfig={{
            multiline: true,
            // autoCapitalize : 'none'
            // autoCorrect :false // default
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputValues.description,
          }}
        />
        <View style={styles.buttons}>
          <Button
            mode="flat"
            style={styles.button}
            onPress={onCancel}
          >
            Cancel
          </Button>
          <Button
            mode="flat"
            style={styles.button}
            onPress={submitHandler}
          >
            {submitButtonLabel}
          </Button>
        </View>
      </View>
    );

}

export default ExpenseForm;

const styles = StyleSheet.create({
    form:{
        marginTop:40
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'white',
        marginVertical:24,
        textAlign:'center',

    },
    inputsRow :{
        flexDirection:'row',
        justifyContent:'space-between'
    }
    ,
    rowInput:{
        flex:1
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
})