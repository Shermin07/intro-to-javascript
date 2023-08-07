// height price:::

const phones = [
    {name : "redmi", price : 10000},
    {name : "iphone", price : 1000000},
    {name : "sumsung", price : 30000},
    {name : "oppo", price : 500000},
];

function heightPrice(phones){
    if( !Array.isArray){
        return "provide me an array"
    }
    else{
        let largest = phones[0];
        for(let i = 0; i < phones.length; i++){
            const phone = phones[i];
            if(phone.price > largest.price){
                largest = phone;
            }
        }
        return largest;
    }

}
const result = heightPrice(phones);
console.log(result);

// cheapest price:::
const phones1 = [
    {name : "redmi", price : 10000},
    {name : "iphone", price : 1000000},
    {name : "sumsung", price : 30000},
    {name : "oppo", price : 500000},
];

function lowestPrice(phones1){
    if( !Array.isArray){
        return "provide me an array"
    }
    else{
        let cheapest = phones1[0];
        for(let i = 0; i < phones1.length; i++){
            const phone1 = phones1[i];
            if(phone1.price < cheapest.price){
                cheapest = phone1;
            }
        }
        return cheapest;
    }

}
const result1 = lowestPrice(phones1);
console.log(result1);