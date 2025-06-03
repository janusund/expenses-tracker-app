import {View,StyleSheet} from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { EXPENSES } from '../../data/dummy-data';
import { GlobalStyles } from '../../constants/styles';

/*Purpose : This component will list expenses for the last 7 days a Summary and a List */
function ExpensesOutput({expenses,expensesPeriod}){
    return  (<View style={styles.container}>
        <ExpensesSummary periodName={expensesPeriod} expenses={EXPENSES}/>
        <ExpensesList expenses={EXPENSES}/>
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

    }
});