import {Text, View, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/context/expenses-context';
import { getDateMinusDays } from '../Util/date';
import { useContext } from 'react';

function RecentExpenses(){
        const expensesCtx = useContext(ExpensesContext);

        const recentExpenses = expensesCtx.expenses.filter((expense)=> {
            const date = new Date();
            const dat7DaysAgo = getDateMinusDays(date, 7);
            return expense.date >= dat7DaysAgo;

        })
    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallBackText="No expenses registered for the last 7 days" />
    }

export default RecentExpenses;