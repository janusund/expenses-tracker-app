import {createContext, useReducer} from 'react';
import { EXPENSES } from '../../data/dummy-data';

export const ExpensesContext = createContext({
    expenses:[],
    addExpense:({description, amount, date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{description, amount, date})=>{}
});

function expensesReducer(state, action){
    switch(action.type){
        case 'ADD':
            const id = new Date().toString()+ Math.random().toString();
            return [{...action.payload, id: id},...state]
        case 'DELETE':
            return state.filter((expense) => expense.id != action.payload);
        case 'UPDATE':
            // Find the index of the item to update
            const updatableExpenseIndex= state.findIndex((expense)=> expense.id === action.payload.id);
            // Find the Item
            const updatableExpense = state[updatableExpenseIndex];
            // Update the Item with the data 
            const updatedItem = {...updatableExpense, ...action.payload.expenseData};
            // Now fetch the expenses
            const updatedExpenses = [...state];
            // Set the new updated values 
            updatedExpenses[updatableExpenseIndex]= updatedItem;
            return updatedExpenses;
        default:
            return state;
    }
}

function ExpensesContextProvider({children}){
    const [expensesState, dispatch ] = useReducer(expensesReducer, EXPENSES);

    function addExpense(expenseData){
        dispatch({type :'ADD', payload : expenseData});
    }

     function deleteExpense(id){
        dispatch({type :'DELETE', payload : id});
    }

     function updateExpense(id,expenseData){
        dispatch({type :'UPDATE', payload : {id, expenseData}});
    }

    const value ={
        expenses : expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense : updateExpense
    }


    return <ExpensesContext.Provider value ={value}>
        {children}
    </ExpensesContext.Provider>

}


export default ExpensesContextProvider;