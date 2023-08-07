const shoppingCart = [
    {name : "shirt", price : 1200, quantity : 2},
    {name : "pant", price : 1000, quantity : 3},
    {name : "belt", price : 1200, quantity : 1},
];

function totalCost(products){
    let sum = 0;
    for( let i = 0; i < products.length; i++){
        const item = products[i];

     const   totalPrice = item.price * item.quantity;
     sum = sum + totalPrice;
    }
    return sum ;

}
const result = totalCost(shoppingCart);
console.log(result);

