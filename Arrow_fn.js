function addToCart (product){
   return "Added: " + product
};

const addToCartArrow=(product)=>{
    return "Added: " + product
};


const getPrice =(price)=> price * 1.15;

const getURL = ()=> "/cart";


const handleAddTocart =(productId, quantity)=>{
    console.log(`product ID ${productId} Added, Qty: ${quantity}`);
};


console.log(addToCart("T-Shirt"));
console.log(addToCartArrow("Hoddies"));
console.log("Price With Tax",getPrice(500));
console.log("Cart URL: ", getURL());
console.log(handleAddTocart(1020,2));