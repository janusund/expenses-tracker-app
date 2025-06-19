import {createContext, useReducer} from 'react';

export const ExpensesContext = createContext({
    expenses:[],
    addExpense:({description, amount, date})=>{},
    setExpenses:({description, amount, date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{description, amount, date})=>{}
});

function expensesReducer(state, action){
    switch(action.type){
        case 'ADD':
            //const id = new Date().toString()+ Math.random().toString(); // remove this since firebase has an internal id
            return [{...action.payload},...state];
        case 'SET':
            // change the order since fire base stores the most recent one in the end of object set 
            const inverted = action.payload.reverse();
            return inverted;
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
    const [expensesState, dispatch ] = useReducer(expensesReducer, []);

    function addExpense(expenseData){
        dispatch({type :'ADD', payload : expenseData});
    }

     function deleteExpense(id){
        dispatch({type :'DELETE', payload : id});
    }

     function updateExpense(id,expenseData){
        dispatch({type :'UPDATE', payload : {id, expenseData}});
    }

    function setExpenses(expenses){
        dispatch({type:'SET', payload:expenses});
    }

    const value ={
        expenses : expensesState,
        addExpense: addExpense,
        setExpenses:setExpenses,
        deleteExpense: deleteExpense,
        updateExpense : updateExpense
    }


    return <ExpensesContext.Provider value ={value}>
        {children}
    </ExpensesContext.Provider>

}


export default ExpensesContextProvider;