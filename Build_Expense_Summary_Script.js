const expenses =[200,500,1200,3000,700]

const total=expenses.reduce((sum,exp)=> sum+exp,0);

const bigExpenses= expenses.filter(exp=> exp>1000);

const USDexpenses= expenses.map(exp=>exp*0.009);


console.log("Total Expenses: ", total);
console.log("Big Expenses: ", bigExpenses);
console.log("Usd In Expenses: ", USDexpenses);