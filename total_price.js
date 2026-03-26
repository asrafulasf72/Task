const cart = {
    Mango:200,
    Banana:80,
    Apple:150,
}

let total=0;

for (let item in cart){
    total+=cart[item]
}

console.log('total Price: ', total);