const product ={
    name:'Laptop',
    price:50000
}

const discount={
    price:45000,
    offer:"10%"
}


const marge={
    ...product,
    ...discount
}

console.log(marge)


const update={
    ...marge,
   inStock:true
}

console.log(update)


const{offer, ...safe}=update
console.log(safe)