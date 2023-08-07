function discount(ticketQuantity){
    if( typeof ticketQuantity !== "number"){
        return "please provide a number"
    }
    else{
    const first100Rate = 100;
    const second100Rate = 90;
    const third100Rate = 70;
    if( ticketQuantity <=100){
        const price = ticketQuantity*first100Rate;
        return price;
    }
    else if( ticketQuantity <=200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice =  restTicketQuantity*second100Rate;
        const totalSecond = first100Price + restTicketPrice;
        return totalSecond;
    }
    else{
        const first100Price = 100* first100Rate;
        const second100Price = 100*second100Rate;
        const restThirdQuantity = ticketQuantity - 200;
        const restThirdPrice = restThirdQuantity * third100Rate;
        const overallPrice = first100Price + second100Price + restThirdPrice;
        return overallPrice;
    }


    }

    

}
const result = discount(250);
console.log(result);
