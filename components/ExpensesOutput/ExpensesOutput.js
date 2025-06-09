import {View,StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

/*Purpose : This component will list expenses for the last 7 days a Summary and a List */
function ExpensesOutput({expenses,expensesPeriod, fallBackText}){
    let content =<Text style={styles.infoText}>{fallBackText}</Text>
    if(expenses.length >0){
        content =<ExpensesList expenses={expenses}/>
    }
    return  (<View style={styles.container}>
        <ExpensesSummary periodName={expensesPeriod} expenses={expenses}/>
        {content}
    </View>);
}

export default ExpensesOutput;

const styles =StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 24,
        paddingBottom:0,
        paddingHorizontal:24,
        backgroundColor: GlobalStyles.colors.primary700,

    },
    infoText:{
        colot:'white',
        fontsize: 16,
        textAlign:'center',
        marginTop: 32
    }
});