import {View, Text,FlatList} from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData){
    return <ExpenseItem {...itemData.item}/>
}

/* Purpose : Called from ExpensesOutput for List Details */
function ExpensesList({expenses}){
return <FlatList data={expenses} renderItem={renderExpenseItem} keyExtractor={(item)=> item.id} />

}

export default ExpensesList;