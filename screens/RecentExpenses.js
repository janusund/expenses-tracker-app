import {Text, View, StyleSheet} from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/context/expenses-context';
import { getDateMinusDays } from '../Util/date';
import { useContext, useEffect, useState } from 'react';
import {fetchExpenses} from '../Util/http';

function RecentExpenses(){
      const expensesCtx = useContext(ExpensesContext);
        useEffect(() => {
            async function getExpenses(){
                const expenses = await fetchExpenses();
                expensesCtx.setExpenses(expenses);
            }
            getExpenses();
        }, []);

        const recentExpenses = expensesCtx.expenses.filter((expense)=> {
            const today = new Date();
            const dat7DaysAgo = getDateMinusDays(today, 7);
            return (expense.date >= dat7DaysAgo) && (expense.date <=today);

        })
    return <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 Days" fallBackText="No expenses registered for the last 7 days" />
    }

export default RecentExpenses;