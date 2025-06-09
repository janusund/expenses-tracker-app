import {Text, View, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {useContext} from 'react';
import { ExpensesContext } from '../store/context/expenses-context';

function AllExpenses(){
    const expensesCtx = useContext(ExpensesContext);

return <ExpensesOutput expenses = {expensesCtx.expenses} expensesPeriod="Total" fallBackText="No expenses registered" />
}

export default AllExpenses;