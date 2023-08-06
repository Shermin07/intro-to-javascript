const phone = [
    {name: "iphone", camera : 100, price: 100000},
    {name: "redmi", camera : 30, price: 20000},
    {name: "sumsung", camera : 40, price: 80000},
    {name: "nokia", camera : 10, price: 15000},
    {name: "swami", camera : 10, price: 20000}

];

function cheapestPhone(phones){
     let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const newPhone = phones[i];
        if(newPhone.price < cheapest.price){
             cheapest = newPhone;
        }
    }
    return cheapest;
}
const result = cheapestPhone(phone);
console.log(result);