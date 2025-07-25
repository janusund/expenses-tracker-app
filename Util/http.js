import axios from 'axios';
const BACKEND_URL = 'https://my-restfulapi-reactnativeapp-default-rtdb.firebaseio.com/';

// Send amount, date , description , id is autogenerated by firebase
export async function storeExpense(expenseData){
    //First part is the url to firebase and expenses.json is firebase expenses node 
    // Firbase returns the id
    const response = await axios.post(`${BACKEND_URL}expenses.json`,
        expenseData
    );

    const id = response.data.name;
    return id;
}

export async function fetchExpenses(){
   const response = await axios.get(BACKEND_URL+'expenses.json');
   const expenses = [];
   for(const key in response.data){
    const expenseObj={
        id:key,
        amount: response.data[key].amount,
        date:new Date(response.data[key].date),
        description:response.data[key].description
    }
    expenses.push(expenseObj)
   }
   return expenses;
}

export function updateExpense(id, expenseData){
    return axios.put(BACKEND_URL+`/expenses/${id}.json`, expenseData); // returns promise
}

export function deleteExpense(id){
    return axios.delete(BACKEND_URL+ `/expenses/${id}.json`);// returns promise

}