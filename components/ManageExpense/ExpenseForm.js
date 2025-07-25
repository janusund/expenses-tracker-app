import {Text, View, StyleSheet, Alert} from 'react-native';
import Input from '../UI/Input';
import Button from '../UI/Button';
import {useState} from 'react';
import { GlobalStyles } from '../../constants/styles';
function ExpenseForm({onCancel,submitButtonLabel,onSubmit, defaultValues}){
    const [inputs, setInputs] = useState({
        amount:{value :defaultValues?.amount?.toString(), isValid : true},
        date:{value :defaultValues?.date?.toISOString().slice(0,10), isValid: true},
        description:{value :defaultValues?.description, isValid : true}
    });
    // First is the second parameter being passed 
    function inputChangeHandler(inputIdentifier,enteredValue){
        setInputs((currentInputValues)=>{
            return{
                ...currentInputValues,
                [inputIdentifier]:{value:enteredValue, isValid: true}
            }
        });

    }

      function submitHandler() {
        const expenseData ={
            amount: inputs.amount,
            date : inputs.date,
            description: inputs.description,
        };
        const amountIsValid = !isNaN(expenseData.amount.value) && expenseData.amount.value >0;
        const dateIsvalid = expenseData.date.value.toString() !=='Invalid Date' ;
        const descIsValid = expenseData.description.value.length >0;
        if(!amountIsValid || !dateIsvalid || !descIsValid){
            setInputs((currInputs)=>{
                return{
                     amount:{value :currInputs.amount.value, isValid : amountIsValid},
                     date:{value :currInputs.date.value, isValid : dateIsvalid},
                    description:{value :currInputs.description.value, isValid : descIsValid},
            }
            });
            return;
            
        }
        onSubmit({amount: +expenseData.amount.value,
            date: new Date(expenseData.date.value),
            description: expenseData.description.value,
        });
    }

    const formIsInValid=
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;


    return (
      <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputsRow}>
          <Input
            style={styles.rowInput}
            label="Amount"
            invalid={!inputs.amount.isValid}
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              value: inputs.amount.value,
            }}
          />
          <Input
            style={styles.rowInput}
            label="Date"
            invalid={!inputs.date.isValid}
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangeHandler.bind(this, "date"),
              value: inputs.date.value,
            }}
          />
        </View>
        <Input
          label="Description"
          invalid={!inputs.description.isValid}
          textInputConfig={{
            multiline: true,
             
            // autoCapitalize : 'none'
            // autoCorrect :false // default
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputs.description.value,
          }}
        />
        {formIsInValid && <Text style={styles.errorText}>Invalid input values - please check your enetered data</Text>}
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
    errorText:{
        textAlign:'center',
        color:GlobalStyles.colors.error500,
        margin:8
    }
})