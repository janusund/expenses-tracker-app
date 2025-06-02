import {View, Text,FlatList} from 'react-native';

/*Purpose : This component will list expenses for the last 7 days a Summary and a List */
function ExpensesOutput({expenses}){
    return
    <View>
        <View>
            <Text>Last 7 Days</Text>
            <Text>$177.95</Text>
        </View>
        <FlatList />
    </View>
}

export default ExpensesOutput;