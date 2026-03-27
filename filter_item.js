const cart={
    apple:100,
    banana:50,
    Orange:80,
}

let ExpensiveItem={};

for(let item in cart){
    if(cart[item] > 60){
        ExpensiveItem[item]=cart[item]
    }
}

console.log("Expensive Item's: ", ExpensiveItem)